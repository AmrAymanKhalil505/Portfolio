import { useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { categories, projects, type ProjectCategory } from "../data/projects";

type Filter = "All" | ProjectCategory;

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <PageShell>
      <section className="border-b border-white/10 bg-[#080A0A]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Projects"
            title="Filterable Unity and interactive systems portfolio"
            description="Each project card shows the role, category, stack, and next action so technical reviewers can go deeper without hunting."
          />
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {(["All", ...categories] as Filter[]).map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                onClick={() => setFilter(category)}
                className={`min-h-10 rounded-md border px-3 py-2 text-sm font-semibold transition ${
                  filter === category
                    ? "border-scan bg-scan text-ink"
                    : "border-white/12 bg-white/6 text-steel hover:border-white/25 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-5 text-sm text-steel">
          Showing <span className="font-semibold text-white">{filteredProjects.length}</span> project
          {filteredProjects.length === 1 ? "" : "s"}
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export default ProjectsPage;
