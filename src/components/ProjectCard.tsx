import { useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, PlayCircle } from "lucide-react";
import type { Project } from "../data/projects";
import BedoWatermark, { isBedoProject } from "./BedoWatermark";
import ButtonLink from "./ButtonLink";
import TechBadge from "./TechBadge";

type ProjectCardProps = {
  project: Project;
};

const getYouTubeId = (value: string) => {
  if (!value.includes("/") && !value.includes("?")) return value;

  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) return url.pathname.replace("/", "");
    if (url.searchParams.get("v")) return url.searchParams.get("v") ?? "";
    const embedMatch = url.pathname.match(/\/embed\/([^/?]+)/);
    if (embedMatch) return embedMatch[1];
  } catch {
    return "";
  }

  return "";
};

const getPreviewImage = (project: Project) => {
  if (project.previewVideo) return project.thumbnail;
  if (!project.previewGif) return project.thumbnail;
  const youtubeId = getYouTubeId(project.previewGif);
  if (youtubeId) return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  return project.previewGif;
};

const getFallbackPreviewImage = (project: Project) => {
  const youtubeId = project.previewGif ? getYouTubeId(project.previewGif) : "";
  return youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : project.thumbnail;
};

const formatEvidenceCount = (count: number, label = "") => {
  if (!label) return `${count}`;
  return label.startsWith("+") ? `${count}${label}` : `${count} ${label}`;
};

const getEvidenceItems = (project: Project) => {
  const evidence = [];
  const technicalEvidence = project.technicalEvidence;

  if (technicalEvidence?.badges?.length) return technicalEvidence.badges;

  if (technicalEvidence?.sensorsSimulated) {
    evidence.push(formatEvidenceCount(technicalEvidence.sensorsSimulated, technicalEvidence.sensorLabel ?? "sensors simulated"));
  }

  if (technicalEvidence?.mathematicalModelsSimulated) {
    evidence.push(
      formatEvidenceCount(
        technicalEvidence.mathematicalModelsSimulated,
        technicalEvidence.mathematicalModelLabel ?? "mathematical models",
      ),
    );
  }

  if (project.webglAvailable) evidence.push("WebGL demo");
  if (project.stationBreakdown?.length) evidence.push(`${project.stationBreakdown.length} stations`);
  if (project.technicalHighlights?.length) evidence.push("Tech breakdown");
  if (project.previewVideo || project.previewGif) evidence.push("Motion preview");

  return evidence.slice(0, 3);
};

function ProjectCard({ project }: ProjectCardProps) {
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const evidenceScrollRef = useRef<HTMLDivElement>(null);
  const evidenceItems = getEvidenceItems(project);
  const [showAllMobileEvidence, setShowAllMobileEvidence] = useState(false);
  const [showAllMobileTech, setShowAllMobileTech] = useState(false);
  const compactMobileEvidenceItems = evidenceItems.slice(0, 3);
  const mobileEvidenceItems = showAllMobileEvidence ? evidenceItems : compactMobileEvidenceItems;
  const hiddenEvidenceCount = Math.max(evidenceItems.length - compactMobileEvidenceItems.length, 0);
  const compactMobileTechItems = project.tech.slice(0, 4);
  const mobileTechItems = showAllMobileTech ? project.tech : compactMobileTechItems;
  const hiddenTechCount = Math.max(project.tech.length - compactMobileTechItems.length, 0);
  const usesDotIndicator = evidenceItems.length > 3;
  const dotCount = usesDotIndicator ? Math.min(evidenceItems.length, 10) : 0;
  const [activeEvidenceDot, setActiveEvidenceDot] = useState(0);
  const usesLogoThumbnail = project.id === "atmosphere-guardian";
  const previewImage = usesLogoThumbnail ? project.thumbnail : getPreviewImage(project);
  const fallbackPreviewImage = usesLogoThumbnail ? project.thumbnail : getFallbackPreviewImage(project);

  const playPreviewVideo = () => {
    const video = previewVideoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Browsers can block autoplay in some contexts; the still thumbnail remains as fallback.
    });
  };

  const stopPreviewVideo = () => {
    const video = previewVideoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  const updateEvidenceDot = () => {
    const reel = evidenceScrollRef.current;
    if (!reel || dotCount <= 1) return;

    const scrollRange = reel.scrollHeight - reel.clientHeight;
    const progress = scrollRange > 0 ? reel.scrollTop / scrollRange : 0;
    setActiveEvidenceDot(Math.round(progress * (dotCount - 1)));
  };

  const scrollEvidenceReel = (direction: "up" | "down") => {
    const reel = evidenceScrollRef.current;
    if (!reel) return;

    reel.scrollBy({ top: direction === "up" ? -48 : 48, behavior: "smooth" });
  };

  return (
    <article
      className="group overflow-hidden rounded-lg border border-white/10 bg-panel shadow-glow transition duration-300 hover:-translate-y-1 hover:border-scan/35"
      onMouseEnter={playPreviewVideo}
      onMouseLeave={stopPreviewVideo}
      onFocus={playPreviewVideo}
      onBlur={stopPreviewVideo}
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden border-b border-white/10 ${
          usesLogoThumbnail ? "bg-white" : "bg-[#0B0E0D]"
        }`}
      >
        <img
          src={previewImage}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = fallbackPreviewImage;
          }}
          className={`h-full w-full transition duration-500 ${
            usesLogoThumbnail ? "object-contain p-6 group-hover:scale-[1.03]" : "object-cover group-hover:scale-105"
          }`}
        />
        {project.previewVideo && (
          <video
            ref={previewVideoRef}
            src={project.previewVideo}
            poster={project.thumbnail}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${project.title} hover preview`}
          />
        )}
        <BedoWatermark visible={isBedoProject(project)} />
        <span className="absolute left-3 top-3 z-30 rounded-md border border-white/15 bg-ink/78 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.category}
        </span>
        {project.media && (
          <span className="absolute bottom-3 right-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink/75 text-white backdrop-blur">
            <PlayCircle size={22} />
          </span>
        )}
      </div>
      <div className="flex min-h-0 flex-col p-4 sm:p-5 md:min-h-[35rem]">
        <h3 className="max-h-14 overflow-hidden text-lg font-semibold leading-tight text-white md:h-16 md:max-h-none md:text-xl">
          {project.title}
        </h3>
        <p className="mt-3 max-h-[4.5rem] overflow-hidden text-sm leading-6 text-steel md:h-[7.5rem] md:max-h-none">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 md:hidden" aria-label={`${project.title} key highlights`}>
          {mobileEvidenceItems.map((item) => (
            <span key={item} className="rounded-full border border-scan/15 bg-scan/[0.055] px-3 py-1.5 text-xs font-medium text-scan/90">
              {item}
            </span>
          ))}
          {hiddenEvidenceCount > 0 && (
            <button
              type="button"
              onClick={() => setShowAllMobileEvidence((isExpanded) => !isExpanded)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-steel transition hover:border-scan/30 hover:text-white"
              aria-expanded={showAllMobileEvidence}
            >
              {showAllMobileEvidence ? "Show less" : `+${hiddenEvidenceCount} more`}
            </button>
          )}
        </div>
        <div className="mt-4 hidden h-40 md:block">
          {evidenceItems.length > 0 && (
            <div className={`h-full ${usesDotIndicator ? "flex items-stretch gap-3" : ""}`}>
              <div
                ref={usesDotIndicator ? evidenceScrollRef : undefined}
                onScroll={usesDotIndicator ? updateEvidenceDot : undefined}
                className={`evidence-badge-scroll grid h-full flex-1 gap-2 overflow-y-auto rounded-lg border border-white/5 bg-ink/25 p-2 pr-2 ${
                  usesDotIndicator ? "evidence-badge-scroll--dots" : ""
                }`}
                aria-label={`${project.title} technical details`}
              >
                {evidenceItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-scan/15 bg-scan/[0.055] px-3 py-2 text-xs font-medium text-scan/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {usesDotIndicator && dotCount > 0 && (
                <div className="evidence-dot-rail evidence-dot-rail--vertical">
                  <button type="button" onClick={() => scrollEvidenceReel("up")} aria-label="Scroll feature badges up">
                    <ChevronUp size={14} />
                  </button>
                  <div className="evidence-dot-stack">
                    {Array.from({ length: dotCount }).map((_, index) => (
                      <span key={index} className={index === activeEvidenceDot ? "is-active" : ""} />
                    ))}
                  </div>
                  <button type="button" onClick={() => scrollEvidenceReel("down")} aria-label="Scroll feature badges down">
                    <ChevronDown size={14} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 md:hidden" aria-label={`${project.title} tech stack`}>
          {mobileTechItems.map((tech) => (
            <TechBadge key={tech} tech={tech} compact />
          ))}
          {hiddenTechCount > 0 && (
            <button
              type="button"
              onClick={() => setShowAllMobileTech((isExpanded) => !isExpanded)}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-steel transition hover:border-scan/30 hover:text-white"
              aria-expanded={showAllMobileTech}
            >
              {showAllMobileTech ? "Show less" : `+${hiddenTechCount}`}
            </button>
          )}
        </div>
        <div className="mt-5 hidden h-[8.25rem] flex-wrap content-start gap-2 overflow-hidden md:flex" aria-label={`${project.title} tech stack`}>
          {project.tech.slice(0, 5).map((tech) => (
            <TechBadge key={tech} tech={tech} compact />
          ))}
        </div>
        <div className="mt-5 flex h-11 shrink-0 items-start justify-start md:mt-auto">
          <ButtonLink to={project.caseStudyUrl} variant="primary" icon={<ArrowUpRight size={16} />}>
            View Case Study
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
