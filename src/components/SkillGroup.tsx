type SkillGroupProps = {
  title: string;
  skills: string[];
};

function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-panel p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
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
