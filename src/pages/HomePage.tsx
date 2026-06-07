import { ArrowRight, Download, FlaskConical, Mail, MonitorPlay } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import LabStation from "../components/LabStation";
import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import SkillGroup from "../components/SkillGroup";
import { featuredProjects } from "../data/projects";
import { education, experience, profile } from "../data/profile";
import heroImage from "../assets/hero-lab.svg";

const skillTags = ["Unity", "C#", "WebGL", "VR", "Simulation", "Digital Twin", "UI Systems"];

const stats = [
  "Senior Unity Engineer at BEDO",
  "Unity AR app with Photon + PlayFab",
  "Meta Quest 2 VR training work",
  "IBM Call for Code regional winner",
];

const skillGroups = [
  {
    title: "Unity Development",
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
    skills: ["VR", "AR", "Meta Quest 2", "Auto Hand", "360 Video", "Android", "iOS", "WebGL", "JavaScript / JSLib"],
  },
  {
    title: "Backend / Workflow",
    skills: ["Photon", "PlayFab", "Node.js", "Oracle Database", "Render", "SQL", "Java", "Git", "Visual Studio"],
  },
];

function HomePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-white/10">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050606_0%,rgba(5,6,6,0.88)_36%,rgba(5,6,6,0.45)_100%)]" />
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative mx-auto flex min-h-[calc(86vh-4rem)] max-w-7xl items-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
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
              <ButtonLink to="/lab" variant="secondary" icon={<FlaskConical size={17} />}>
                Open Interactive Lab
              </ButtonLink>
              <ButtonLink to={profile.resumeUrl} download variant="ghost" icon={<Download size={17} />}>
                Download Resume
              </ButtonLink>
            </div>
            <div className="mt-5 flex max-w-full flex-nowrap gap-2 overflow-x-auto pb-2 sm:mt-8 sm:flex-wrap sm:overflow-visible sm:pb-0">
              {skillTags.map((tag, index) => (
                <span
                  key={tag}
                  className={`rounded-md border border-white/12 bg-white/8 px-3 py-1 text-sm text-steel ${
                    index > 3 ? "hidden sm:inline-flex" : ""
                  }`}
                >
                  {tag}
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
            {[
              "Educational Simulations",
              "Digital Twin / Industrial Training",
              "VR & Interactive Booths",
              "WebGL Experiments",
              "Game Systems & Architecture",
              "AR / Interior Visualization",
            ].map((category) => (
              <div key={category} className="rounded-lg border border-white/10 bg-panel p-5">
                <MonitorPlay className="mb-5 text-scan" size={24} />
                <h3 className="text-base font-semibold text-white">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Interactive Simulation Lab"
              title="A lightweight lab for technical prototypes"
              description="The lab is a separate optional page, so visitors can read the portfolio normally and only open the experiments when they want a deeper look."
            />
            <ButtonLink to="/lab" variant="primary" icon={<FlaskConical size={17} />}>
              Open Interactive Lab
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <LabStation
              title="Fluid Physics Bench"
              description="A compact station for fluid-like motion, parameters, and visible feedback."
              cta="View Experiment"
              variant="fluid"
            />
            <LabStation
              title="PID Control Station"
              description="A graph-focused prototype for overshoot, target response, and tuning behavior."
              cta="View Experiment"
              variant="pid"
            />
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
              <SkillGroup key={group.title} title={group.title} skills={group.skills} />
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
