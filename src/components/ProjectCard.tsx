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
  const evidenceItems = getEvidenceItems(project);
  const usesDotIndicator = project.id === "industrial-training-simulation-systems";
  const dotCount = usesDotIndicator ? Math.min(evidenceItems.length, 16) : 0;

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
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-steel">{project.summary}</p>
          {evidenceItems.length > 0 && (
            <>
              <div
                className={`evidence-badge-scroll mt-4 grid max-h-[8.25rem] gap-2 overflow-y-auto rounded-lg border border-white/5 bg-ink/25 p-2 pr-2 ${
                  usesDotIndicator ? "evidence-badge-scroll--dots" : ""
                }`}
                aria-label={`${project.title} technical evidence`}
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
                <div className="evidence-dot-rail mt-3" aria-hidden="true">
                  {Array.from({ length: dotCount }).map((_, index) => (
                    <span key={index} className={index === 0 ? "is-active" : ""} />
                  ))}
                </div>
              )}
            </>
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
