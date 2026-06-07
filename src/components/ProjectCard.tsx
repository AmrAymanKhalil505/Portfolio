import { ArrowUpRight, MonitorPlay, PlayCircle } from "lucide-react";
import type { Project } from "../data/projects";
import ButtonLink from "./ButtonLink";

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
  if (!project.previewGif) return project.thumbnail;
  const youtubeId = getYouTubeId(project.previewGif);
  if (youtubeId) return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  return project.previewGif;
};

const getFallbackPreviewImage = (project: Project) => {
  const youtubeId = project.previewGif ? getYouTubeId(project.previewGif) : "";
  return youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : project.thumbnail;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-panel shadow-glow transition duration-300 hover:-translate-y-1 hover:border-scan/35">
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
        <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-ink/78 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.category}
        </span>
        {project.media && (
          <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink/75 text-white backdrop-blur">
            <PlayCircle size={22} />
          </span>
        )}
      </div>
      <div className="flex min-h-[22rem] flex-col p-5">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-steel">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-md border border-white/10 bg-white/6 px-2.5 py-1 text-xs text-steel">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <ButtonLink to={project.caseStudyUrl} variant="primary" icon={<ArrowUpRight size={16} />}>
            {project.media ? "View Project" : "View Case Study"}
          </ButtonLink>
          {project.demoUrl && (
            <ButtonLink to={`${project.caseStudyUrl}#demo`} variant="secondary" icon={<PlayCircle size={16} />}>
              Watch Demo
            </ButtonLink>
          )}
          {project.webglAvailable && (
            <ButtonLink to={`${project.caseStudyUrl}#webgl`} variant="ghost" icon={<MonitorPlay size={16} />}>
              Play WebGL Demo
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
