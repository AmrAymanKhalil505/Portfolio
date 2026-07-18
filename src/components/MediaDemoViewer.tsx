import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Boxes,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Image as ImageIcon,
  MonitorPlay,
  PlayCircle,
  Tags,
} from "lucide-react";
import { getGeneratedThumbnail } from "../data/generatedThumbnails";
import BedoWatermark from "./BedoWatermark";

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
  showBedoWatermark?: boolean;
};

const getYouTubeId = (value: string | undefined) => {
  if (!value) return "";
  if (!value.includes("/") && !value.includes("?")) return value;

  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) return url.pathname.replace("/", "");
    if (url.searchParams.get("v")) return url.searchParams.get("v") ?? "";
    const pathMatch = url.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/);
    if (pathMatch) return pathMatch[1];
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

const getMediaTypeLabel = (type: MediaItem["type"]) => {
  switch (type) {
    case "youtube":
      return "YouTube demo";
    case "video":
      return "Video capture";
    case "gif":
      return "Motion clip";
    case "image":
      return "Screenshot";
    default:
      return "Media";
  }
};

const getSelectedTags = (item: MediaItem) => {
  const behaviorTags = item.details?.behaviors?.slice(0, 4) ?? [];
  const componentTags = item.details?.components?.slice(0, Math.max(0, 4 - behaviorTags.length)) ?? [];
  return [...behaviorTags, ...componentTags];
};

function MediaDemoViewer({ media, showBedoWatermark = false }: MediaDemoViewerProps) {
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
  const selectedTags = getSelectedTags(selected);
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

  return (
    <section id="demo" className="border-y border-white/10 bg-[#090B0B]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:items-stretch">
          <div className="min-w-0 w-full overflow-hidden rounded-xl border border-white/10 bg-panel shadow-glow lg:h-full">
            <div
              className={`relative overflow-hidden ${
                selected.type === "image"
                  ? "bg-panel sm:aspect-video sm:bg-black"
                  : "h-[clamp(11rem,48vw,14rem)] bg-panel sm:h-auto sm:aspect-video sm:bg-black"
              }`}
            >
              <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
                <span className="rounded-md border border-scan/25 bg-ink/75 px-3 py-1 text-xs font-semibold text-scan backdrop-blur">
                  {getMediaTypeLabel(selected.type)}
                </span>
                <span className="rounded-md bg-ink/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {selectedIndex + 1}/{media.length}
                </span>
              </div>

              {media.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => selectByOffset(-1)}
                    className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/80 text-white shadow-glow backdrop-blur transition hover:border-scan hover:text-scan sm:left-4 sm:h-11 sm:w-11"
                    aria-label="Previous media"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={() => selectByOffset(1)}
                    className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/80 text-white shadow-glow backdrop-blur transition hover:border-scan hover:text-scan sm:right-4 sm:h-11 sm:w-11"
                    aria-label="Next media"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

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
                    className="h-full w-full object-contain opacity-80"
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
                  className="absolute inset-0 h-full w-full object-contain"
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
                  className="relative h-auto w-full object-contain sm:absolute sm:inset-0 sm:h-full"
                  loading="lazy"
                />
              )}

              <BedoWatermark visible={showBedoWatermark} />
            </div>

            <div className="hidden border-t border-white/10 p-5 lg:block">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-scan">Selected view</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{selected.title}</h3>
                </div>
              </div>
              <p className="gallery-caption mt-2 text-sm leading-6 text-steel">{selected.caption}</p>
            </div>
          </div>

          <div className="order-2 min-w-0 max-w-full overflow-hidden lg:hidden">
            <div className="gallery-filmstrip flex min-w-0 max-w-full snap-x gap-2 overflow-x-auto pb-2" aria-label="Demo media thumbnails">
              {media.map((item, index) => {
                const isSelected = item.id === selected.id;
                const thumbnail = getMediaThumbnail(item);

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectMedia(item)}
                    className={`group w-24 shrink-0 snap-start overflow-hidden rounded-md border bg-panel transition ${
                      isSelected ? "border-scan shadow-glow" : "border-white/10"
                    }`}
                    aria-label={`Show ${item.title}`}
                    aria-pressed={isSelected}
                  >
                    <span className="relative block aspect-video bg-black">
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={item.alt ?? `${item.title} thumbnail`}
                          className="h-full w-full object-cover opacity-85"
                          loading="lazy"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-steel">
                          <ImageIcon size={20} />
                        </span>
                      )}
                      <span className="absolute bottom-1 left-1 rounded bg-ink/85 px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">
                        {index + 1}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="order-3 min-w-0 lg:order-2">
            <SelectedEvidencePanel
              selected={selected}
              selectedTags={selectedTags}
              onPrevious={() => selectByOffset(-1)}
              onNext={() => selectByOffset(1)}
            />
          </div>
        </div>

        <div className="mt-5 hidden items-center gap-3 lg:flex">
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
                  className={`group w-44 shrink-0 snap-start overflow-hidden rounded-lg border bg-panel text-left transition sm:w-52 ${
                    isSelected ? "border-scan shadow-glow" : "border-white/10 hover:border-white/25"
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
                      {getMediaTypeLabel(item.type)}
                    </span>
                  </span>
                  <span className="block border-t border-white/10 px-3 py-2">
                    <span className="line-clamp-2 text-xs font-semibold leading-5 text-white">{item.title}</span>
                    {item.details?.behaviors?.[0] && (
                      <span className="mt-1 block truncate text-[0.68rem] leading-4 text-steel">
                        {item.details.behaviors[0]}
                      </span>
                    )}
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

        <div className="mt-3 hidden items-center justify-center gap-3 lg:flex" aria-label="Gallery position">
          <MediaStepButton label="Previous media" onClick={() => selectByOffset(-1)}>
            <ChevronLeft size={18} />
          </MediaStepButton>
          <div className="flex flex-wrap justify-center gap-2">
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
          <MediaStepButton label="Next media" onClick={() => selectByOffset(1)}>
            <ChevronRight size={18} />
          </MediaStepButton>
        </div>
      </div>
    </section>
  );
}

function MediaStepButton({ children, label, onClick }: { children: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-steel transition hover:border-white/30 hover:text-white"
      aria-label={label}
    >
      {children}
    </button>
  );
}

function SelectedEvidencePanel({
  selected,
  selectedTags,
  onPrevious,
  onNext,
}: {
  selected: MediaItem;
  selectedTags: string[];
  onPrevious: () => void;
  onNext: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [scrollMetrics, setScrollMetrics] = useState({ clientHeight: 0, scrollHeight: 0, scrollTop: 0 });

  const updateScrollMetrics = useCallback(() => {
    const content = contentRef.current;
    if (!content) return;

    setScrollMetrics({
      clientHeight: content.clientHeight,
      scrollHeight: content.scrollHeight,
      scrollTop: content.scrollTop,
    });
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    content.scrollTop = 0;
    updateScrollMetrics();

    const resizeObserver = new ResizeObserver(updateScrollMetrics);
    resizeObserver.observe(content);
    if (content.firstElementChild) resizeObserver.observe(content.firstElementChild);
    window.addEventListener("resize", updateScrollMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollMetrics);
    };
  }, [selected.id, updateScrollMetrics]);

  const maxScroll = Math.max(0, scrollMetrics.scrollHeight - scrollMetrics.clientHeight);
  const canScroll = maxScroll > 4;
  const thumbHeightPercent = canScroll
    ? Math.max(12, (scrollMetrics.clientHeight / scrollMetrics.scrollHeight) * 100)
    : 100;
  const thumbTopPercent = canScroll
    ? (scrollMetrics.scrollTop / maxScroll) * (100 - thumbHeightPercent)
    : 0;

  const setScrollFromPointer = (clientY: number) => {
    const content = contentRef.current;
    const rail = railRef.current;
    if (!content || !rail || !canScroll) return;

    const railRect = rail.getBoundingClientRect();
    const thumbHeight = Math.max(48, (scrollMetrics.clientHeight / scrollMetrics.scrollHeight) * railRect.height);
    const usableTrack = Math.max(1, railRect.height - thumbHeight);
    const nextThumbTop = Math.min(Math.max(clientY - railRect.top - thumbHeight / 2, 0), usableTrack);
    content.scrollTop = (nextThumbTop / usableTrack) * maxScroll;
  };

  const handleThumbPointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const content = contentRef.current;
    const rail = railRef.current;
    if (!content || !rail || !canScroll) return;

    const railRect = rail.getBoundingClientRect();
    const startY = event.clientY;
    const startScrollTop = content.scrollTop;
    const scrollRatio = maxScroll / Math.max(1, railRect.height - (thumbHeightPercent / 100) * railRect.height);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      content.scrollTop = startScrollTop + (moveEvent.clientY - startY) * scrollRatio;
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp, { once: true });
  };

  return (
    <aside className="flex h-[30rem] max-h-[30rem] flex-col rounded-xl border border-white/10 bg-panel p-5 shadow-glow lg:h-[41rem] lg:max-h-[41rem]">
      <div className="lg:hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-scan">Selected view</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{selected.title}</h3>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-scan/25 bg-scan/10 px-2.5 py-1 text-xs font-semibold text-scan">
            <MonitorPlay size={13} />
            {getMediaTypeLabel(selected.type)}
          </span>
        </div>
        <div className="mt-3 flex gap-2">
          <MediaStepButton label="Previous media" onClick={onPrevious}>
            <ChevronLeft size={18} />
          </MediaStepButton>
          <MediaStepButton label="Next media" onClick={onNext}>
            <ChevronRight size={18} />
          </MediaStepButton>
        </div>
      </div>

      <div className="hidden items-start justify-between gap-4 lg:flex">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-scan">Brief</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{selected.details?.title ?? selected.title}</h3>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-scan/25 bg-scan/10 px-2.5 py-1 text-xs font-semibold text-scan">
          <MonitorPlay size={13} />
          {getMediaTypeLabel(selected.type)}
        </span>
      </div>

      <div className="mt-4 grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_1.25rem] gap-3">
        <div
          ref={contentRef}
          onScroll={updateScrollMetrics}
          className="brief-scroll h-full touch-pan-y overflow-y-auto overscroll-contain pr-1 [-webkit-overflow-scrolling:touch]"
        >
          <p className="text-sm leading-6 text-steel">{selected.caption}</p>

          <div className="mt-5 border-t border-white/10 pt-5 lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-scan">Technical brief</p>
            <h4 className="mt-2 text-lg font-semibold text-white">{selected.details?.title ?? selected.title}</h4>
          </div>

          {selectedTags.length ? (
            <div className="mt-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Tags size={16} className="text-scan" />
                Behavior tags
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-steel">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {selected.details ? (
            <div className="mt-6 space-y-5 border-t border-white/10 pt-5">
              {selected.details.components && (
                <DetailList icon={<Boxes size={16} />} title="Simulated components" items={selected.details.components} />
              )}
              {selected.details.behaviors && (
                <DetailList icon={<MonitorPlay size={16} />} title="Main simulated behavior" items={selected.details.behaviors} />
              )}
              {selected.details.notes && (
                <DetailList icon={<ClipboardList size={16} />} title="Interface notes" items={selected.details.notes} />
              )}
            </div>
          ) : (
            <div className="mt-6 rounded-md border border-white/10 bg-ink/45 p-4 text-sm leading-6 text-steel">
              This capture does not have a detailed breakdown yet. It still works as visual context, and can later be
              expanded with simulated components, behaviors, and interface notes.
            </div>
          )}
        </div>

        <div
          ref={railRef}
          className={`relative h-full touch-none select-none rounded-full border border-white/10 bg-white/10 ${
            canScroll ? "cursor-pointer" : "opacity-35"
          }`}
          onPointerDown={(event) => {
            event.preventDefault();
            setScrollFromPointer(event.clientY);
          }}
        >
          <button
            type="button"
            className={`absolute left-1/2 min-h-12 w-4 -translate-x-1/2 touch-none rounded-full bg-scan shadow-glow transition hover:bg-white ${
              canScroll ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
            }`}
            style={{ height: `${thumbHeightPercent}%`, top: `${thumbTopPercent}%` }}
            onPointerDown={handleThumbPointerDown}
            aria-label="Scroll brief"
          />
        </div>
      </div>
    </aside>
  );
}

function DetailList({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <span className="text-scan">{icon}</span>
        {title}
      </div>
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
