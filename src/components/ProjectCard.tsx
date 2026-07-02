import { useRef } from "react";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import type { Project } from "../data/projects";
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

const getEvidenceItems = (project: Project) => {
  const evidence = [];
  const technicalEvidence = project.technicalEvidence;

  if (technicalEvidence?.sensorsSimulated) {
    evidence.push(`${technicalEvidence.sensorsSimulated} ${technicalEvidence.sensorLabel ?? "sensors simulated"}`);
  }

  if (technicalEvidence?.mathematicalModelsSimulated) {
    evidence.push(
      `${technicalEvidence.mathematicalModelsSimulated} ${
        technicalEvidence.mathematicalModelLabel ?? "mathematical models"
      }`,
    );
  }

  if (project.webglAvailable) evidence.push("WebGL demo");
  if (project.media?.length) evidence.push(`${project.media.length} media proofs`);
  if (project.stationBreakdown?.length) evidence.push(`${project.stationBreakdown.length} stations`);
  if (project.technicalHighlights?.length) evidence.push("Tech breakdown");
  if (project.previewVideo || project.previewGif) evidence.push("Motion preview");

  return evidence.slice(0, 3);
};

const getEvidenceList = (project: Project) => project.technicalEvidence?.evidenceList ?? [];

const getPlatformSummary = (project: Project) => project.platform.slice(0, 2).join(" + ");

function ProjectCard({ project }: ProjectCardProps) {
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const evidenceItems = getEvidenceItems(project);
  const evidenceList = getEvidenceList(project);
  const platformSummary = getPlatformSummary(project);

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

  return (
    <article
      className="group overflow-hidden rounded-lg border border-white/10 bg-panel shadow-glow transition duration-300 hover:-translate-y-1 hover:border-scan/35"
      onMouseEnter={playPreviewVideo}
      onMouseLeave={stopPreviewVideo}
      onFocus={playPreviewVideo}
      onBlur={stopPreviewVideo}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0B0E0D]">
        <img
          src={getPreviewImage(project)}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = getFallbackPreviewImage(project);
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
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
        <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-ink/78 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.category}
        </span>
        {project.media && (
          <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink/75 text-white backdrop-blur">
            <PlayCircle size={22} />
          </span>
        )}
      </div>
      <div className="flex min-h-[23.5rem] flex-col p-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-scan/75">
            <span>Evidence panel</span>
            {platformSummary && (
              <>
                <span className="h-1 w-1 rounded-full bg-scan/45" aria-hidden="true" />
                <span className="truncate text-steel/70">{platformSummary}</span>
              </>
            )}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-steel">{project.summary}</p>
          {evidenceItems.length > 0 && (
            <div className="mt-4 grid gap-2" aria-label={`${project.title} technical evidence`}>
              {evidenceItems.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-scan/15 bg-scan/[0.055] px-3 py-2 text-xs font-medium text-scan/90"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          {evidenceList.length > 0 && (
            <div
              className="mt-4 max-h-32 space-y-2 overflow-y-auto rounded-lg border border-white/10 bg-ink/35 p-3 pr-2 text-xs leading-5 text-steel scrollbar-thin scrollbar-track-transparent scrollbar-thumb-scan/25"
              aria-label={`${project.title} detailed technical evidence`}
            >
              {evidenceList.map((item) => (
                <div key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-scan/70" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
          <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
            {project.tech.slice(0, 5).map((tech) => (
              <TechBadge key={tech} tech={tech} compact />
            ))}
          </div>
        </div>
        <div className="mt-6 flex h-11 shrink-0 items-start justify-start">
          <ButtonLink to={project.caseStudyUrl} variant="primary" icon={<ArrowUpRight size={16} />}>
            Inspect Case Study
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
