import type { MediaItem } from "../../components/MediaDemoViewer";

export type ProjectCategory =
  | "Educational Simulations"
  | "Educational Games / Interactive Learning"
  | "Digital Twin / Industrial Training"
  | "VR & Interactive Booths"
  | "WebGL Experiments"
  | "Game Systems & Architecture"
  | "AR / Interior Visualization"
  | "IoT / ML / Social Impact";

export type Project = {
  id: string;
  aliases?: string[];
  hidden?: boolean;
  title: string;
  category: ProjectCategory;
  summary: string;
  role: string;
  platform: string[];
  tech: string[];
  thumbnail: string;
  previewGif?: string;
  previewVideo?: string;
  media?: MediaItem[];
  articleLayout?: "blog";
  demoUrl?: string;
  demoLabel?: string;
  githubUrl?: string;
  caseStudyUrl: string;
  productContext?: {
    label: string;
    url?: string;
  }[];
  attributionNote?: string;
  highlights: string[];
  timeline: string;
  problem: string;
  solution: string;
  challenges: string[];
  impact: string[];
  overview?: string[];
  simulatedBehaviors?: {
    title: string;
    bullets: string[];
  }[];
  stationBreakdown?: {
    title: string;
    description: string;
    bullets: string[];
  }[];
  technicalHighlights?: string[];
  featured?: boolean;
  webglAvailable?: boolean;
};

export const categories: ProjectCategory[] = [
  "Educational Simulations",
  "Educational Games / Interactive Learning",
  "Digital Twin / Industrial Training",
  "VR & Interactive Booths",
  "WebGL Experiments",
  "Game Systems & Architecture",
  "AR / Interior Visualization",
  "IoT / ML / Social Impact",
];
