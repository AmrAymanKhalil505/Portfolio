import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon, PlayCircle } from "lucide-react";
import { getGeneratedThumbnail } from "../data/generatedThumbnails";

export type MediaItem = {
  id: string;
  type: "youtube" | "video" | "image" | "gif";
  title: string;
  caption: string;
  details?: {
    title?: string;
    components?: string[];
    behaviors?: string[];
    notes?: string[];
  };
  youtubeId?: string;
  src?: string;
  thumbnail: string;
  alt?: string;
};

type MediaDemoViewerProps = {
  media: MediaItem[];
};

const getYouTubeId = (value: string | undefined) => {
  if (!value) return "";
  if (!value.includes("/") && !value.includes("?")) return value;

  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) return url.pathname.replace("/", "");
    if (url.searchParams.get("v")) return url.searchParams.get("v") ?? "";
    const embedMatch = url.pathname.match(/\/embed\/([^/?]+)/);
    if (embedMatch) return embedMatch[1];
  } catch {
    return value;
  }

  return value;
};

const getYouTubeThumbnail = (item: MediaItem) => {
  if (item.thumbnail) return item.thumbnail;
  const videoId = getYouTubeId(item.youtubeId ?? item.src);
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
};

const getMediaThumbnail = (item: MediaItem) => {
  if (item.type === "youtube") return getYouTubeThumbnail(item);
  const source = item.thumbnail || item.src;
  return getGeneratedThumbnail(source, item.thumbnail || item.src || "");
};

const getYouTubeEmbedUrl = (item: MediaItem, shouldAutoplay: boolean) => {
  const videoId = getYouTubeId(item.youtubeId ?? item.src);
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    loop: "1",
    mute: "1",
    playlist: videoId,
  });

  if (shouldAutoplay) params.set("autoplay", "1");

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
};

function MediaDemoViewer({ media }: MediaDemoViewerProps) {
  const [selectedId, setSelectedId] = useState(media[0]?.id);
  const [loadedMediaIds, setLoadedMediaIds] = useState<Set<string>>(new Set());
  const selected = useMemo(
    () => media.find((item) => item.id === selectedId) ?? media[0],
    [media, selectedId],
  );
  const selectedIndex = Math.max(
    0,
    media.findIndex((item) => item.id === selected?.id),
  );

  if (!selected) return null;

  const isLoaded = loadedMediaIds.has(selected.id);
  const selectedThumbnail = getMediaThumbnail(selected);

  const selectMedia = (item: MediaItem) => {
    setSelectedId(item.id);
  };

  const selectByOffset = (offset: number) => {
    const nextIndex = (selectedIndex + offset + media.length) % media.length;
    setSelectedId(media[nextIndex].id);
  };

  const loadSelectedMedia = () => {
    setLoadedMediaIds((current) => {
      const next = new Set(current);
      next.add(selected.id);
      return next;
    });
  };

  const openUrl = selected.type === "youtube" ? selected.youtubeId ?? selected.src : selected.src;

  return (
    <section id="demo" className="border-y border-white/10 bg-[#090B0B]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold text-scan">Gallery</p>
            <h2 className="text-3xl font-semibold text-white">Project media and station details</h2>
          </div>
          {openUrl && (
            <a
              href={openUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-steel transition hover:border-white/30 hover:text-white"
            >
              <ExternalLink size={16} />
              {selected.type === "youtube" ? "Open on YouTube" : "Open media"}
            </a>
          )}
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-panel shadow-glow">
          <div className="relative aspect-video bg-black">
            <div className="absolute right-4 top-4 z-10 rounded-md bg-ink/75 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
              {selectedIndex + 1}/{media.length}
            </div>
            <button
              type="button"
              onClick={() => selectByOffset(-1)}
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-white backdrop-blur transition hover:border-scan hover:text-scan"
              aria-label="Previous media"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={() => selectByOffset(1)}
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-white backdrop-blur transition hover:border-scan hover:text-scan"
              aria-label="Next media"
            >
              <ChevronRight size={24} />
            </button>
            {selected.type === "youtube" && isLoaded && (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={getYouTubeEmbedUrl(selected, true)}
                title={selected.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            )}

            {selected.type === "youtube" && !isLoaded && (
              <button
                type="button"
                onClick={loadSelectedMedia}
                className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden text-left"
                aria-label={`Play ${selected.title}`}
              >
                <img
                  src={selectedThumbnail}
                  alt={selected.alt ?? `${selected.title} thumbnail`}
                  className="h-full w-full object-cover opacity-80"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-ink/30" aria-hidden="true" />
                <span className="absolute flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-ink/75 text-white backdrop-blur transition hover:scale-105">
                  <PlayCircle size={38} />
                </span>
              </button>
            )}

            {(selected.type === "video" || selected.type === "gif") && selected.src && (
              <video
                src={selected.src}
                poster={selected.thumbnail}
                className="h-full w-full object-cover"
                controls
                loop
                muted
                playsInline
                preload="metadata"
              />
            )}

            {selected.type === "image" && (
              <img
                src={selected.src ?? selected.thumbnail}
                alt={selected.alt ?? selected.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            )}
          </div>

          <div className="border-t border-white/10 p-5">
            <h3 className="text-xl font-semibold text-white">{selected.title}</h3>
            <p className="gallery-caption mt-2 text-sm leading-6 text-steel">{selected.caption}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => selectByOffset(-1)}
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/15 text-steel transition hover:border-white/30 hover:text-white sm:flex"
            aria-label="Previous thumbnail"
          >
            <ChevronLeft size={20} />
          </button>
          <div
            className="gallery-filmstrip flex flex-1 snap-x gap-3 overflow-x-auto pb-2"
            aria-label="Demo media thumbnails"
          >
            {media.map((item, index) => {
              const isSelected = item.id === selected.id;
              const thumbnail = getMediaThumbnail(item);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectMedia(item)}
                  className={`group w-36 shrink-0 snap-start overflow-hidden rounded-md border bg-panel text-left transition sm:w-40 ${
                    isSelected ? "border-scan" : "border-white/10 hover:border-white/25"
                  }`}
                  aria-label={`Show ${item.title}`}
                  aria-pressed={isSelected}
                >
                  <span className="relative block aspect-video bg-black">
                    {thumbnail ? (
                      <img
                        src={thumbnail}
                        alt={item.alt ?? `${item.title} thumbnail`}
                        className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-steel">
                        <ImageIcon size={24} />
                      </span>
                    )}
                    <span className="absolute bottom-1.5 left-1.5 rounded bg-ink/80 px-1.5 py-0.5 text-[0.68rem] font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="absolute right-1.5 top-1.5 rounded bg-ink/80 px-1.5 py-0.5 text-[0.68rem] font-semibold text-white">
                      {item.type === "youtube" ? "Video" : "Image"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => selectByOffset(1)}
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/15 text-steel transition hover:border-white/30 hover:text-white sm:flex"
            aria-label="Next thumbnail"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-3 flex justify-center gap-2" aria-label="Gallery position">
          {media.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectMedia(item)}
              className={`h-2.5 rounded-full transition ${
                item.id === selected.id ? "w-7 bg-scan" : "w-2.5 bg-white/25 hover:bg-white/45"
              }`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>

        <section className="mt-5 rounded-lg border border-white/10 bg-panel p-5">
          <div className="min-h-[18rem] max-h-[24rem] overflow-y-auto pr-2">
            <p className="mb-2 text-sm font-semibold text-scan">Selected Media Details</p>
            <h3 className="text-xl font-semibold text-white">{selected.details?.title ?? selected.title}</h3>
            <p className="mt-3 text-sm leading-6 text-steel">{selected.caption}</p>
            {selected.details ? (
              <>
                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  {selected.details.components && (
                    <DetailList title="Simulated components" items={selected.details.components} />
                  )}
                  {selected.details.behaviors && (
                    <DetailList title="Main simulated behavior" items={selected.details.behaviors} />
                  )}
                </div>
                {selected.details.notes && (
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <DetailList title="Interface notes" items={selected.details.notes} />
                  </div>
                )}
              </>
            ) : (
              <div className="mt-5 rounded-md border border-white/10 bg-ink/45 p-4 text-sm leading-6 text-steel">
                Select a station image from the slider to view the simulated components and behavior for that station.
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-scan">{title}</p>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-steel">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-scan" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MediaDemoViewer;
