import type { LucideIcon } from "lucide-react";

type SkillGroupProps = {
  title: string;
  skills: string[];
  icon?: LucideIcon;
};

function SkillGroup({ title, skills, icon: Icon }: SkillGroupProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-panel p-5">
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-scan/25 bg-scan/10 text-scan">
            <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
          </span>
        )}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <ul className="mt-4 grid gap-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-3 text-sm text-steel">
            <span className="h-1.5 w-1.5 rounded-full bg-scan" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillGroup;
