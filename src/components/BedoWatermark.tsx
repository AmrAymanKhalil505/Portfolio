import type { Project } from "../data/projects";

type BedoWatermarkProps = {
  visible?: boolean;
};

type BedoProjectLike = Pick<Project, "productContext" | "timeline" | "attributionNote">;

export const isBedoProject = (project: BedoProjectLike) => {
  const productLabels = project.productContext?.map((item) => item.label).join(" ") ?? "";
  const searchText = `${productLabels} ${project.timeline} ${project.attributionNote ?? ""}`.toLowerCase();
  return searchText.includes("bedo");
};

function BedoWatermark({ visible = true }: BedoWatermarkProps) {
  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="-rotate-45 select-none opacity-[0.26] mix-blend-overlay">
        <div className="flex items-end gap-[0.08em] font-black leading-none tracking-[-0.12em] text-[clamp(4rem,14vw,11rem)]">
          <span className="text-[#f7941d]">B</span>
          <span className="text-[#404149]">E</span>
          <span className="text-[#f7941d]">D</span>
          <span className="text-[#404149]">O</span>
        </div>
        <div className="-mt-[0.32em] ml-[0.38em] w-[55%] skew-x-[-26deg] bg-[#404149] px-5 py-1.5 text-center">
          <span className="block skew-x-[26deg] text-[clamp(0.32rem,1.05vw,0.85rem)] font-bold uppercase tracking-[0.26em] text-white">
            Innovating Education
          </span>
        </div>
      </div>
    </div>
  );
}

export default BedoWatermark;
