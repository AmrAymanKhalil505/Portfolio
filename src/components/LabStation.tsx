import { ArrowUpRight } from "lucide-react";
import ButtonLink from "./ButtonLink";

type LabStationProps = {
  title: string;
  description: string;
  cta: string;
  variant: "fluid" | "pid" | "plc" | "vr";
};

function LabStation({ title, description, cta, variant }: LabStationProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-panel p-5 shadow-glow">
      <div className="mb-5 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-md border border-white/10 bg-[#070808]">
        {variant === "fluid" && <FluidVisual />}
        {variant === "pid" && <PidVisual />}
        {variant === "plc" && <PlcVisual />}
        {variant === "vr" && <VrVisual />}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-steel">{description}</p>
      <div className="mt-5">
        <ButtonLink to="#" variant="secondary" icon={<ArrowUpRight size={16} />}>
          {cta}
        </ButtonLink>
      </div>
    </article>
  );
}

function FluidVisual() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(110,231,249,0.10),rgba(169,251,215,0.08),rgba(248,211,106,0.08))]" />
      <div className="fluid-wave wave-a" />
      <div className="fluid-wave wave-b" />
      <div className="absolute bottom-5 left-6 right-6 h-1 rounded-full bg-white/10" />
      <div className="absolute bottom-5 left-6 h-1 w-1/2 rounded-full bg-pulse" />
    </div>
  );
}

function PidVisual() {
  return (
    <div className="relative h-full w-full p-6">
      <div className="absolute inset-0 bg-grid-fine opacity-35" />
      <svg className="relative h-full w-full" viewBox="0 0 320 160" role="img" aria-label="Animated PID graph">
        <line x1="18" y1="42" x2="300" y2="42" stroke="#F8D36A" strokeDasharray="5 7" strokeWidth="2" />
        <path
          className="pid-line"
          d="M18 132 C46 118 58 48 90 54 C118 60 112 90 140 84 C172 76 168 45 198 48 C232 52 232 66 260 58 C280 52 290 45 302 42"
          fill="none"
          stroke="#A9FBD7"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="302" cy="42" r="5" fill="#6EE7F9" />
      </svg>
    </div>
  );
}

function PlcVisual() {
  return (
    <div className="grid h-full w-full grid-cols-[1fr_0.8fr] gap-4 p-5">
      <div className="space-y-3">
        {["Input A", "Relay", "Output"].map((label, index) => (
          <div key={label} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/6 p-3">
            <span className={`h-3 w-3 rounded-full ${index === 1 ? "bg-amber" : "bg-scan"} plc-pulse`} />
            <span className="text-xs text-steel">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="relative h-24 w-24 rounded-md border border-scan/40 bg-scan/10">
          <div className="absolute left-1/2 top-3 h-18 w-1 -translate-x-1/2 bg-scan/40" />
          <div className="absolute bottom-3 left-1/2 h-4 w-14 -translate-x-1/2 rounded-sm bg-scan" />
        </div>
      </div>
    </div>
  );
}

function VrVisual() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-x-8 top-8 h-20 rounded-md border border-pulse/40 bg-pulse/10" />
      <div className="absolute left-1/2 top-14 h-16 w-36 -translate-x-1/2 rounded-lg border border-white/20 bg-white/10">
        <div className="absolute left-4 top-5 h-7 w-9 rounded-md bg-ink" />
        <div className="absolute right-4 top-5 h-7 w-9 rounded-md bg-ink" />
      </div>
      <div className="vr-scan absolute bottom-8 left-1/2 h-2 w-40 -translate-x-1/2 rounded-full bg-scan" />
    </div>
  );
}

export default LabStation;
