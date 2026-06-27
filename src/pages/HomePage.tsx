import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Code2,
  Download,
  Factory,
  Gamepad2,
  Globe2,
  GraduationCap,
  Headset,
  Mail,
  Rows3,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import ButtonLink from "../components/ButtonLink";
import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import SkillGroup from "../components/SkillGroup";
import TechBadge from "../components/TechBadge";
import { featuredProjects } from "../data/projects";
import { education, experience, profile } from "../data/profile";
import {
  heroSettingsEventName,
  loadHeroSettings,
  mobileCropCurtainHeight,
  mobileOverlayGradient,
  overlayGradient,
  type HeroSettings,
} from "../lib/heroSettings";
import heroPoster from "../assets/robot-disass-poster.png";
import heroVideo from "../assets/Robot Disass.mp4";

const skillTags = ["Unity", "C#", "WebGL", "VR", "Simulation", "Digital Twin", "UI Systems"];

const stats = [
  "Senior Unity Engineer at BEDO",
  "Unity AR app with Photon + PlayFab",
  "Meta Quest 2 VR training work",
  "IBM Call for Code regional winner",
];

const projectCategories = [
  {
    title: "Educational Simulations",
    icon: GraduationCap,
  },
  {
    title: "Digital Twin / Industrial Training",
    icon: Factory,
  },
  {
    title: "VR & Interactive Booths",
    icon: Headset,
  },
  {
    title: "WebGL Experiments",
    icon: Globe2,
  },
  {
    title: "Game Systems & Architecture",
    icon: Gamepad2,
  },
  {
    title: "AR / Interior Visualization",
    icon: Box,
  },
];

const skillGroups = [
  {
    title: "Unity Development",
    icon: Code2,
    skills: [
      "C#",
      "Gameplay systems",
      "uGUI",
      "ScriptableObject architecture",
      "SOAP / event channels",
      "Dependency injection",
      "PlayMaker integration",
      "Runtime 3D model loading",
      "WebGL optimization",
    ],
  },
  {
    title: "Simulation / Industrial",
    icon: Factory,
    skills: [
      "Physics-based interactions",
      "Baked fluid-behavior visuals",
      "PID visualization",
      "Digital twin logic",
      "Digital shadows",
      "PLC ladder logic",
      "TIA Portal concepts",
      "Real-time feedback systems",
    ],
  },
  {
    title: "XR / Platforms",
    icon: Headset,
    skills: ["VR", "AR", "Meta Quest 2", "Auto Hand", "360 Video", "Android", "iOS", "WebGL", "JavaScript / JSLib"],
  },
  {
    title: "Backend / Workflow",
    icon: Workflow,
    skills: ["Photon", "PlayFab", "Node.js", "Oracle Database", "Render", "SQL", "Java", "Git", "Visual Studio"],
  },
];

function HomePage() {
  const [heroSettings, setHeroSettings] = useState<HeroSettings>(loadHeroSettings);

  useEffect(() => {
    const handleHeroSettings = (event: Event) => {
      const customEvent = event as CustomEvent<HeroSettings>;
      setHeroSettings(customEvent.detail ?? loadHeroSettings());
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "portfolio.heroSettings") setHeroSettings(loadHeroSettings());
    };

    window.addEventListener(heroSettingsEventName, handleHeroSettings);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(heroSettingsEventName, handleHeroSettings);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-white/10">
        <img
          src={heroPoster}
          alt=""
          aria-hidden="true"
          className="hero-desktop-layer pointer-events-none absolute inset-y-0 right-0 h-full w-[68%] object-cover object-right grayscale-[12%]"
          style={{ opacity: heroSettings.posterOpacity }}
        />
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          poster={heroPoster}
          playsInline
          preload="metadata"
          className="hero-desktop-layer pointer-events-none absolute inset-y-0 right-0 h-full w-[68%] object-cover object-right grayscale-[12%]"
          style={{ opacity: heroSettings.videoOpacity }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <img
          src={heroPoster}
          alt=""
          aria-hidden="true"
          className="hero-mobile-layer pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[118%] object-cover object-center grayscale-[10%]"
          style={{
            opacity: Math.min(0.8, heroSettings.posterOpacity + 0.2),
            transform: "translateX(-50%)",
            WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 78%, transparent 100%)",
            maskImage: "linear-gradient(180deg, #000 0%, #000 78%, transparent 100%)",
          }}
        />
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          poster={heroPoster}
          playsInline
          preload="metadata"
          className="hero-mobile-layer pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[118%] object-cover object-center grayscale-[10%]"
          style={{
            opacity: Math.min(0.9, heroSettings.videoOpacity + 0.22),
            transform: "translateX(-50%)",
            WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 78%, transparent 100%)",
            maskImage: "linear-gradient(180deg, #000 0%, #000 78%, transparent 100%)",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div
          className="hero-desktop-layer absolute inset-0"
          style={{ background: overlayGradient(heroSettings.overlayStrength) }}
        />
        <div
          className="hero-mobile-layer absolute inset-0"
          style={{ background: mobileOverlayGradient(heroSettings.overlayStrength) }}
        />
        <div className="hero-mobile-layer pointer-events-none absolute inset-x-0 top-0 h-[24rem]">
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: mobileCropCurtainHeight(heroSettings.mobileCropY),
              background: "linear-gradient(180deg, rgba(5, 6, 6, 0) 0%, rgba(5, 6, 6, 0.92) 24%, #050606 100%)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="hero-content-wrap relative mx-auto flex min-h-[calc(86vh-4rem)] max-w-7xl items-start px-4 pb-10 pt-64 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-md border border-scan/30 bg-scan/10 px-3 py-1 text-sm font-semibold text-scan">
              Unity, simulation, WebGL, VR
            </p>
            <h1 className="max-w-[16ch] text-[1.85rem] font-semibold leading-[1.12] text-white sm:max-w-4xl sm:text-5xl sm:leading-tight lg:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-[32ch] text-base leading-7 text-steel sm:max-w-3xl sm:text-lg sm:leading-8">
              I create Unity/WebGL/VR experiences that make technical concepts easier to understand through
              interaction, visualization, and real-time feedback.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink to="/projects" variant="primary" icon={<ArrowRight size={17} />}>
                View Projects
              </ButtonLink>
              <ButtonLink to={profile.resumeUrl} download variant="ghost" icon={<Download size={17} />}>
                Download Resume
              </ButtonLink>
            </div>
            <div className="mt-5 flex max-w-full flex-nowrap gap-2 overflow-x-auto pb-2 sm:mt-8 sm:flex-wrap sm:overflow-visible sm:pb-0">
              {skillTags.map((tag, index) => (
                <span
                  key={tag}
                  className={`${
                    index > 3 ? "hidden sm:inline-flex" : ""
                  }`}
                >
                  <TechBadge tech={tag} compact />
                </span>
              ))}
            </div>
            <dl className="mt-8 hidden max-w-4xl gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat} className="rounded-md border border-white/10 bg-ink/62 px-4 py-3 backdrop-blur">
                  <dt className="sr-only">Experience signal</dt>
                  <dd className="text-sm font-medium text-white">{stat}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeader
          eyebrow="Featured work"
          title="Simulation projects with visible technical behavior"
          description="Recruiters can scan the role and platform quickly, while technical leads can click into the implementation details."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <article className="flex min-h-[36rem] flex-col justify-between rounded-lg border border-dashed border-white/15 bg-panel p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-scan/35">
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-md border border-scan/25 bg-scan/10 text-scan">
                <Rows3 size={26} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <p className="mt-8 text-sm font-semibold text-scan">More work</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">See the full project archive</h3>
              <p className="mt-4 text-sm leading-6 text-steel">
                Browse the rest of the portfolio, including grouped simulation systems, AR work, VR booths,
                educational labs, and game projects.
              </p>
            </div>
            <ButtonLink to="/projects" variant="primary" icon={<ArrowUpRight size={16} />} className="mt-8 self-start">
              See More Projects
            </ButtonLink>
          </article>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Experience"
            title="Recent Unity roles across education, AR, and VR training"
            description="A quick scan of the work history behind the projects: industrial simulations, collaborative AR visualization, and headset-based training."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {experience.map((job) => (
              <article key={`${job.company}-${job.role}`} className="rounded-lg border border-white/10 bg-panel p-5">
                <p className="text-sm font-semibold text-scan">{job.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{job.role}</h3>
                <p className="mt-1 text-sm text-steel">
                  {job.company} / {job.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-steel">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-scan" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080A0A]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Project categories"
            title="Built around training, learning, and real-time interaction"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {projectCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div key={category.title} className="rounded-lg border border-white/10 bg-panel p-5">
                  <Icon className="mb-5 text-scan" size={24} strokeWidth={1.9} aria-hidden="true" />
                  <h3 className="text-base font-semibold text-white">{category.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#090B0B]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technical skills"
            title="Unity implementation skills grouped for fast review"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} title={group.title} skills={group.skills} icon={group.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold text-scan">About</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              I build Unity systems where learners, trainees, and product users can see cause and effect.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-steel">
            <p>
              My work sits between gameplay programming, educational design, industrial simulation, AR room
              visualization, and VR training. I enjoy turning abstract technical systems into interfaces people can
              test, tune, and understand.
            </p>
            <p>
              I studied Computer Science Engineering and Technology at {education.school}, where my bachelor
              project was a Unity-based self-driving car simulation using reinforcement learning.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[linear-gradient(90deg,#101314,#0A0D0C)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Need a Unity simulation or prototype reviewed?</h2>
            <p className="mt-2 text-sm text-steel">
              Send the project brief, target platform, and what needs to be interactive.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to={profile.resumeUrl} download variant="ghost" icon={<Download size={17} />}>
              Download Resume
            </ButtonLink>
            <ButtonLink to={`mailto:${profile.email}`} variant="primary" icon={<Mail size={17} />}>
              Contact Me
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default HomePage;
