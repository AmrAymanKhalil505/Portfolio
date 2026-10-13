import type { Proposal } from "./types";

// Each proposal is code-split so a client's name and pitch never ship in the main bundle.
// To add a company: create <slug>.ts exporting a default Proposal and register it here.
export const proposalLoaders: Record<string, () => Promise<{ default: Proposal }>> = {
  utopivr: () => import("./utopivr"),
  clarisign: () => import("./clarisign"),
  naphora: () => import("./naphora"),
  north: () => import("./north"),
  hypervr: () => import("./hypervr"),
  vrchat: () => import("./vrchat"),
  empiresbattle: () => import("./empiresbattle"),
  dragonslake: () => import("./dragonslake"),
  bairesdev: () => import("./bairesdev"),
  truphysics: () => import("./truphysics"),
  estoty: () => import("./estoty"),
  "survival-unity": () => import("./survival-unity"),
  "folklore-horror": () => import("./folklore-horror"),
  matrplotr: () => import("./matrplotr"),
  "accident-reconstruction": () => import("./accident-reconstruction"),
  "animal-multiplayer": () => import("./animal-multiplayer"),
  syncvr: () => import("./syncvr"),
  magicmedia: () => import("./magicmedia"),
  gsw: () => import("./gsw"),
  "apartment-vr-tour": () => import("./apartment-vr-tour"),
  freemind: () => import("./freemind"),
  artifexmundi: () => import("./artifexmundi"),
};

// Proposals go out through job platforms, so they link to the contact-free /work mode.
export const portfolioUrl = "https://amraymankhalil505.github.io/Portfolio/work";
export const caseStudyUrl = (projectId: string) => `${portfolioUrl}/projects/${projectId}`;
export const youtubeThumbnail = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
