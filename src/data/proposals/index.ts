import type { Proposal } from "./types";

// Each proposal is code-split so a client's name and pitch never ship in the main bundle.
// To add a company: create <slug>.ts exporting a default Proposal and register it here.
export const proposalLoaders: Record<string, () => Promise<{ default: Proposal }>> = {
  utopivr: () => import("./utopivr"),
};

// Proposals go out through job platforms, so they link to the contact-free /work mode.
export const portfolioUrl = "https://amraymankhalil505.github.io/Portfolio/work";
export const caseStudyUrl = (projectId: string) => `${portfolioUrl}/projects/${projectId}`;
export const youtubeThumbnail = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
