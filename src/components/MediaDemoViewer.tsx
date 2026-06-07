import { useMemo, useState } from "react";
import { ExternalLink, Image as ImageIcon, PlayCircle } from "lucide-react";

export type MediaItem = {
  id: string;
  type: "youtube" | "video" | "image" | "gif";
  title: string;
  caption: string;
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

  if (!selected) return null;

  const isLoaded = loadedMediaIds.has(selected.id);
  const selectedThumbnail = selected.type === "youtube" ? getYouTubeThumbnail(selected) : selected.thumbnail;

  const selectMedia = (item: MediaItem) => {
    setSelectedId(item.id);
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
            <p className="mb-3 text-sm font-semibold text-scan">Demo Viewer</p>
            <h2 className="text-3xl font-semibold text-white">Video demos inside the project page</h2>
          </div>
          {openUrl && (
            <a
              href={openUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-steel transition hover:border-white/30 hover:text-white"
            >
              <ExternalLink size={16} />
              Open on YouTube
            </a>
          )}
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-panel shadow-glow">
          <div className="relative aspect-video bg-black">
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
                className="h-full w-full object-cover"
                loading="lazy"
              />
            )}
          </div>

          <div className="border-t border-white/10 p-5">
            <h3 className="text-xl font-semibold text-white">{selected.title}</h3>
            <p className="mt-2 text-sm leading-6 text-steel">{selected.caption}</p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="Demo media thumbnails">
          {media.map((item) => {
            const isSelected = item.id === selected.id;
            const thumbnail = item.type === "youtube" ? getYouTubeThumbnail(item) : item.thumbnail;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => selectMedia(item)}
                className={`overflow-hidden rounded-lg border bg-panel text-left transition hover:-translate-y-0.5 ${
                  isSelected ? "border-scan" : "border-white/10 hover:border-white/25"
                }`}
                aria-pressed={isSelected}
              >
                <span className="relative block aspect-video bg-black">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={item.alt ?? `${item.title} thumbnail`}
                      className="h-full w-full object-cover opacity-80"
                      loading="lazy"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-steel">
                      <ImageIcon size={24} />
                    </span>
                  )}
                  <span className="absolute bottom-2 left-2 rounded-md bg-ink/80 px-2 py-1 text-xs font-semibold text-white">
                    {item.type === "youtube" ? "YouTube" : "Preview"}
                  </span>
                </span>
                <span className="block px-3 py-3 text-sm font-semibold text-white">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MediaDemoViewer;
