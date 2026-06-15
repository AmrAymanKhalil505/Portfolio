import {
  Activity,
  Apple,
  Blocks,
  Box,
  BrainCircuit,
  ChartLine,
  Cloud,
  Code2,
  Cpu,
  Database,
  Droplets,
  Gamepad2,
  Gauge,
  Glasses,
  Globe2,
  Monitor,
  Network,
  Server,
  Smartphone,
  Wifi,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type TechBadgeProps = {
  tech: string;
  compact?: boolean;
};

const getTechIcon = (tech: string): LucideIcon => {
  const value = tech.toLowerCase();

  if (value.includes("unity")) return Box;
  if (value.includes("c#") || value.includes("scriptableobject") || value.includes("soap")) return Code2;
  if (value.includes("webgl") || value.includes("browser")) return Globe2;
  if (value.includes("android") || value.includes("quest") || value.includes("mobile")) return Smartphone;
  if (value.includes("ios")) return Apple;
  if (value.includes("ar")) return Smartphone;
  if (value.includes("vr") || value.includes("360")) return Glasses;
  if (value.includes("photon") || value.includes("multiplayer")) return Network;
  if (value.includes("playfab") || value.includes("node") || value.includes("render")) return Server;
  if (value.includes("cloud") || value.includes("kubernetes") || value.includes("ibm")) return Cloud;
  if (value.includes("database") || value.includes("data")) return Database;
  if (value.includes("iot") || value.includes("plc") || value.includes("sensor")) return Cpu;
  if (value.includes("machine") || value.includes("ml")) return BrainCircuit;
  if (value.includes("pid") || value.includes("control")) return Gauge;
  if (value.includes("visualization") || value.includes("graph")) return ChartLine;
  if (value.includes("fluid") || value.includes("flow")) return Droplets;
  if (value.includes("simulation") || value.includes("digital twin") || value.includes("digital shadow")) return Workflow;
  if (value.includes("virtual lab") || value.includes("education") || value.includes("training")) return Blocks;
  if (value.includes("physics")) return Activity;
  if (value.includes("game")) return Gamepad2;
  if (value.includes("web") || value.includes("ui")) return Monitor;
  if (value.includes("wifi")) return Wifi;

  return Code2;
};

function TechBadge({ tech, compact = false }: TechBadgeProps) {
  const Icon = getTechIcon(tech);

  return (
    <span
      className={`inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/10 bg-white/6 text-steel ${
        compact ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"
      }`}
      title={tech}
    >
      <Icon size={compact ? 13 : 15} className="shrink-0 text-scan" aria-hidden="true" />
      <span>{tech}</span>
    </span>
  );
}

export default TechBadge;
