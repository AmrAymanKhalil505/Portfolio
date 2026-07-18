import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
    const pathMatch = url.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/);
    if (pathMatch) return pathMatch[1];
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
  const navigate = useNavigate();
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const evidenceItems = getEvidenceItems(project);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const compactMobileEvidenceItems = evidenceItems.slice(0, 1);
  const mobileEvidenceItems = isMobileExpanded ? evidenceItems : compactMobileEvidenceItems;
  const compactMobileTechItems = project.tech.slice(0, 2);
  const mobileTechItems = isMobileExpanded ? project.tech : compactMobileTechItems;
  const desktopEvidenceItems = evidenceItems.slice(0, 3);
  const hiddenDesktopEvidenceCount = Math.max(evidenceItems.length - desktopEvidenceItems.length, 0);
  const desktopTechItems = project.tech.slice(0, 4);
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

  const isInteractiveTarget = (target: EventTarget | null) =>
    target instanceof Element && Boolean(target.closest("a, button, input, select, textarea, [role='button']"));

  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    if (isInteractiveTarget(event.target)) return;
    navigate(project.caseStudyUrl);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    navigate(project.caseStudyUrl);
  };

  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-panel shadow-glow transition duration-300 hover:-translate-y-1 hover:border-scan/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-scan/70"
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.title} case study`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      onMouseEnter={playPreviewVideo}
      onMouseLeave={stopPreviewVideo}
      onFocus={playPreviewVideo}
      onBlur={stopPreviewVideo}
    >
      <div
        className={`relative aspect-[16/9] overflow-hidden border-b border-white/10 md:aspect-[16/10] ${
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
      <div className="flex min-h-0 flex-col p-4 md:min-h-[33rem] md:p-6">
        <h3 className="max-h-12 overflow-hidden text-lg font-semibold leading-tight text-white md:h-16 md:max-h-none md:text-xl">
          {project.title}
        </h3>
        <p
          className={`mt-3 text-sm leading-6 text-steel ${
            isMobileExpanded ? "" : "max-h-12 overflow-hidden"
          } md:h-28 md:max-h-none md:overflow-hidden`}
        >
          {project.summary}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 md:hidden" aria-label={`${project.title} key highlights`}>
          {mobileEvidenceItems.map((item) => (
            <span key={item} className="rounded-full border border-scan/15 bg-scan/[0.055] px-3 py-1.5 text-xs font-medium text-scan/90">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 hidden min-h-[9.5rem] md:block" aria-label={`${project.title} technical details`}>
          {desktopEvidenceItems.length > 0 && (
            <div className="grid gap-2">
              {desktopEvidenceItems.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-scan/15 bg-scan/[0.055] px-3 py-2 text-xs font-medium leading-4 text-scan/90"
                >
                  {item}
                </span>
              ))}
              {hiddenDesktopEvidenceCount > 0 && (
                <span className="px-1 text-xs font-medium text-steel">
                  +{hiddenDesktopEvidenceCount} more technical signal{hiddenDesktopEvidenceCount === 1 ? "" : "s"} in the case study
                </span>
              )}
            </div>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2 md:hidden" aria-label={`${project.title} tech stack`}>
          {mobileTechItems.map((tech) => (
            <TechBadge key={tech} tech={tech} compact />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3 md:hidden">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIsMobileExpanded((isExpanded) => !isExpanded);
            }}
            className="flex items-center gap-1.5 text-sm font-medium text-steel transition hover:text-white"
            aria-expanded={isMobileExpanded}
          >
            {isMobileExpanded ? (
              <>
                Hide details <ChevronUp size={15} />
              </>
            ) : (
              <>
                Show details <ChevronDown size={15} />
              </>
            )}
          </button>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-scan">
            Open case study <ArrowUpRight size={15} />
          </span>
        </div>
        <div className="mt-5 hidden min-h-[5.25rem] flex-wrap content-start gap-2 overflow-hidden md:flex" aria-label={`${project.title} tech stack`}>
          {desktopTechItems.map((tech) => (
            <TechBadge key={tech} tech={tech} compact />
          ))}
        </div>
        <div className="mt-6 hidden h-11 shrink-0 items-start justify-start md:mt-auto md:flex">
          <ButtonLink to={project.caseStudyUrl} variant="primary" icon={<ArrowUpRight size={16} />}>
            View Case Study
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
