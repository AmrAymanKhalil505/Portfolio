import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { categories, publicProjects, type ProjectCategory } from "../data/projects";

type Filter = "All" | ProjectCategory;

function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const filter: Filter = categories.includes(categoryParam as ProjectCategory) ? (categoryParam as ProjectCategory) : "All";

  const filteredProjects = useMemo(
    () => (filter === "All" ? publicProjects : publicProjects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <PageShell>
      <section className="border-b border-white/10 bg-[#080A0A]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Projects"
            title="Filterable Unity and interactive systems portfolio"
            description="Browse Unity projects across industrial simulation, engineering education, AR, VR, WebGL, and interactive systems."
          />
          <div className="sm:hidden">
            <label htmlFor="mobile-project-category" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-scan">
              Filter projects
            </label>
            <select
              id="mobile-project-category"
              value={filter}
              onChange={(event) => {
                const category = event.target.value as Filter;
                if (category === "All") {
                  setSearchParams({});
                } else {
                  setSearchParams({ category });
                }
              }}
              className="min-h-11 w-full rounded-md border border-white/15 bg-panel px-3 py-2 text-sm font-semibold text-white outline-none transition focus:border-scan focus:ring-2 focus:ring-scan/30"
            >
              {(["All", ...categories] as Filter[]).map((category) => (
                <option key={category} value={category} className="bg-panel text-white">
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden flex-wrap gap-2 sm:flex" role="tablist" aria-label="Filter projects by category">
            {(["All", ...categories] as Filter[]).map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                onClick={() => {
                  if (category === "All") {
                    setSearchParams({});
                  } else {
                    setSearchParams({ category });
                  }
                }}
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
