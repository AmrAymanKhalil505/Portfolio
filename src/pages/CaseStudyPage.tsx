import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Github, Mail, MonitorPlay, PlayCircle } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import MediaDemoViewer from "../components/MediaDemoViewer";
import PageShell from "../components/PageShell";
import { getProjectById } from "../data/projects";
import { profile } from "../data/profile";

function CaseStudyPage() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) return <Navigate to="/projects" replace />;
  if (project.articleLayout === "blog") return <BlogProjectPage project={project} />;

  return (
    <PageShell>
      <article>
        <section className="border-b border-white/10 bg-[#080A0A]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <Link
              to="/projects"
              className="mb-8 inline-flex items-center gap-2 rounded-md px-1 py-2 text-sm font-semibold text-steel transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to projects
            </Link>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold text-scan">{project.category}</p>
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">{project.title}</h1>
                <p className="mt-5 text-lg leading-8 text-steel">{project.summary}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <ButtonLink to="#demo" variant="primary" icon={<PlayCircle size={17} />}>
                      Watch Demo
                    </ButtonLink>
                  )}
                  {project.simulatedBehaviors ? (
                    <ButtonLink to="#behaviors" variant="secondary" icon={<MonitorPlay size={17} />}>
                      View Behaviors
                    </ButtonLink>
                  ) : project.webglAvailable ? (
                    <ButtonLink to="#webgl" variant="secondary" icon={<MonitorPlay size={17} />}>
                      Play WebGL Demo
                    </ButtonLink>
                  ) : null}
                  {project.simulatedBehaviors && (
                    <ButtonLink to={`mailto:${profile.email}`} variant="ghost" icon={<Mail size={17} />}>
                      Contact Me
                    </ButtonLink>
                  )}
                  {project.githubUrl && (
                    <ButtonLink to={project.githubUrl} variant="ghost" icon={<Github size={17} />}>
                      GitHub
                    </ButtonLink>
                  )}
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-white/10 bg-panel shadow-glow">
                <img src={project.thumbnail} alt={`${project.title} visual preview`} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {project.media && <MediaDemoViewer media={project.media} />}

        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <MetaBlock label="My role" value={project.role} />
          <MetaBlock label="Timeline" value={project.timeline} />
          <MetaBlock label="Platform" value={project.platform.join(", ")} />
          <MetaBlock label="Tech stack" value={project.tech.join(", ")} />
        </section>

        {project.overview ? (
          <CimProjectDetails project={project} />
        ) : (
          <>
            <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-14 sm:px-6 lg:grid-cols-2 lg:px-8">
              <CaseSection title="Problem" items={[project.problem]} />
              <CaseSection title="Solution" items={[project.solution]} />
              <CaseSection title="What I built" items={project.highlights} />
              <CaseSection title="Key technical challenges" items={project.challenges} />
              <CaseSection title="Result / impact" items={project.impact} />
              <CaseSection
                title="Optional technical breakdown"
                items={[
                  "Component boundaries are planned around readable state, visible feedback, and quick iteration.",
                  "UI and debug surfaces are treated as part of the prototype, not an afterthought.",
                  "WebGL-oriented projects prioritize lightweight assets, fast loading, and clear browser interactions.",
                ]}
              />
            </section>

            {!project.media && (
              <section id="demo" className="border-y border-white/10 bg-[#090B0B]">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                  <h2 className="text-2xl font-semibold text-white">Screenshots or video</h2>
                  <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-panel">
                      <img src={project.thumbnail} alt={`${project.title} demo placeholder`} className="h-full min-h-80 w-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-ink/20">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-white backdrop-blur">
                          <PlayCircle size={30} />
                        </span>
                      </div>
                    </div>
                    <div id="webgl" className="rounded-lg border border-white/10 bg-panel p-6">
                      <h3 className="text-xl font-semibold text-white">WebGL demo placeholder</h3>
                      <p className="mt-3 text-sm leading-6 text-steel">
                        Replace this block with the published Unity WebGL build URL or an embedded build once the
                        project is ready for public visitors.
                      </p>
                      <div className="mt-6 flex h-40 items-center justify-center rounded-md border border-dashed border-white/20 bg-white/5 text-sm text-steel">
                        Unity WebGL build slot
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </article>
    </PageShell>
  );
}

type ProjectWithCimDetails = NonNullable<ReturnType<typeof getProjectById>>;

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
    return "";
  }

  return "";
};

const getYouTubeThumbnail = (value: string | undefined) => {
  const youtubeId = getYouTubeId(value);
  return youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : "";
};

function BlogProjectPage({ project }: { project: ProjectWithCimDetails }) {
  return (
    <PageShell>
      <article className="bg-[#080A0A]">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <Link
              to="/projects"
              className="mb-10 inline-flex items-center gap-2 rounded-md px-1 py-2 text-sm font-semibold text-steel transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to projects
            </Link>
            <p className="mb-4 text-sm font-semibold text-scan">{project.category}</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">{project.title}</h1>
            <p className="mt-6 text-xl leading-9 text-steel">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-md border border-white/10 bg-white/6 px-3 py-1 text-sm text-steel">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="#demo" variant="primary" icon={<PlayCircle size={17} />}>
                Watch Demo
              </ButtonLink>
              <ButtonLink to="#behaviors" variant="secondary" icon={<MonitorPlay size={17} />}>
                View Behaviors
              </ButtonLink>
              <ButtonLink to={`mailto:${profile.email}`} variant="ghost" icon={<Mail size={17} />}>
                Contact Me
              </ButtonLink>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <img
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            onError={(event) => {
              const fallback = getYouTubeThumbnail(project.previewGif);
              if (fallback) event.currentTarget.src = fallback;
            }}
            className="aspect-video w-full rounded-lg border border-white/10 object-cover shadow-glow"
          />
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetaBlock label="My role" value={project.role} />
            <MetaBlock label="Timeline" value={project.timeline} />
            <MetaBlock label="Platform" value={project.platform.join(", ")} />
            <MetaBlock label="Stack" value={project.tech.slice(0, 5).join(", ")} />
          </dl>
        </div>

        <BlogSection title="Project Overview">
          {project.overview?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </BlogSection>

        <section id="demo" className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold text-scan">Demos</p>
          <h2 className="text-3xl font-semibold text-white">Watch the simulated behavior</h2>
          <p className="mt-4 text-base leading-8 text-steel">
            The videos are embedded inside the article so the work can be reviewed without leaving the portfolio.
          </p>
          <div className="mt-8 space-y-10">
            {project.media?.map((item) => (
              <InlineMediaBlock key={item.id} item={item} />
            ))}
          </div>
        </section>

        <BlogSection id="behaviors" title="Simulated Behaviors">
          {project.simulatedBehaviors?.map((behavior) => (
            <BlogBulletGroup key={behavior.title} title={behavior.title} bullets={behavior.bullets} />
          ))}
        </BlogSection>

        <BlogSection title="Station Breakdown">
          {project.stationBreakdown?.map((station) => (
            <section key={station.title} className="border-t border-white/10 pt-7 first:border-t-0 first:pt-0">
              <h3 className="text-2xl font-semibold text-white">{station.title}</h3>
              <p className="mt-3">{station.description}</p>
              <BulletList items={station.bullets} />
            </section>
          ))}
        </BlogSection>

        <BlogSection title="Technical Highlights">
          <BulletList items={project.technicalHighlights ?? project.highlights} />
        </BlogSection>
      </article>
    </PageShell>
  );
}

function BlogSection({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id?: string;
  title: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-6 space-y-6 text-lg leading-9 text-steel">{children}</div>
    </section>
  );
}

function BlogBulletGroup({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <BulletList items={bullets} />
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-steel">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-scan" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InlineMediaBlock({ item }: { item: NonNullable<ProjectWithCimDetails["media"]>[number] }) {
  const [loaded, setLoaded] = useState(false);
  const youtubeId = getYouTubeId(item.youtubeId ?? item.src);
  const fallbackThumbnail = youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : "";
  const thumbnail = item.thumbnail || fallbackThumbnail;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?${new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    loop: "1",
    mute: "1",
    playlist: youtubeId,
  }).toString()}`;

  return (
    <figure className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
        {item.type === "youtube" && loaded && (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        )}
        {item.type === "youtube" && !loaded && (
          <button
            type="button"
            className="absolute inset-0 h-full w-full"
            onClick={() => setLoaded(true)}
            aria-label={`Play ${item.title}`}
          >
            <img
              src={thumbnail}
              alt={`${item.title} thumbnail`}
              onError={(event) => {
                if (fallbackThumbnail) event.currentTarget.src = fallbackThumbnail;
              }}
              className="h-full w-full object-cover opacity-80"
            />
            <span className="absolute inset-0 bg-ink/25" aria-hidden="true" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/75 text-white backdrop-blur">
              <PlayCircle size={32} />
            </span>
          </button>
        )}
        {item.type !== "youtube" && (
          <img src={item.src ?? thumbnail} alt={item.alt ?? item.title} className="h-full w-full object-cover" />
        )}
      </div>
      <figcaption className="mt-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          {(item.youtubeId ?? item.src) && (
            <a
              href={item.youtubeId ?? item.src}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-scan transition hover:text-white"
            >
              Open on YouTube
            </a>
          )}
        </div>
        <p className="mt-2 text-base leading-7 text-steel">{item.caption}</p>
      </figcaption>
    </figure>
  );
}

function CimProjectDetails({ project }: { project: ProjectWithCimDetails }) {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-panel p-6">
          <p className="mb-3 text-sm font-semibold text-scan">Project Overview</p>
          <div className="grid gap-4 text-sm leading-7 text-steel lg:grid-cols-2">
            {project.overview?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section id="behaviors" className="border-y border-white/10 bg-[#090B0B]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold text-scan">Simulated Behaviors</p>
          <h2 className="text-3xl font-semibold text-white">Motion, pneumatics, and digital state changes</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {project.simulatedBehaviors?.map((behavior) => (
              <CaseSection key={behavior.title} title={behavior.title} items={behavior.bullets} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold text-scan">Station Breakdown</p>
        <h2 className="text-3xl font-semibold text-white">Short behavior cards by station</h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {project.stationBreakdown?.map((station) => (
            <section key={station.title} className="rounded-lg border border-white/10 bg-panel p-6">
              <h3 className="text-xl font-semibold text-white">{station.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{station.description}</p>
              <ul className="mt-4 space-y-3">
                {station.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-steel">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-scan" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <CaseSection title="Technical Highlights" items={project.technicalHighlights ?? project.highlights} />
      </section>
    </>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-panel p-5">
      <dt className="text-sm font-semibold text-scan">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-steel">{value}</dd>
    </div>
  );
}

function CaseSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-panel p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-steel">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-scan" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CaseStudyPage;
