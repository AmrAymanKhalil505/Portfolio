type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && <p className="mb-3 text-sm font-semibold text-scan">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-steel">{description}</p>}
    </div>
  );
}

export default SectionHeader;
