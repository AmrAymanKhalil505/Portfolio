// A proposal is a one-company pitch rendered by src/pages/ProposalPage.tsx at /proposal/:slug.
// Any string may contain "[[TODO: ...]]" markers; they render highlighted so missing facts
// are impossible to miss before the page is sent.

export type ProposalLink = {
  label: string;
  href: string;
};

export type ProposalAnswer = {
  title: string;
  /** The client's own wording, shown small so they recognise their question. */
  original?: string;
  body: string[];
};

export type ProposalExperience = {
  period: string;
  title: string;
  context: string;
  tech: string[];
  responsibility: string;
  links: ProposalLink[];
};

export type ProposalEvidence = {
  label: string;
  title: string;
  image: string;
  meta: string;
  copy: string;
  links: ProposalLink[];
};

/** direct = done it in production; adjacent = same skill in a neighbouring context;
 *  partial = meets part of it; commitment = something I will deliver, not past evidence. */
export type RequirementStatus = "direct" | "adjacent" | "partial" | "commitment";

export type ProposalRequirement = {
  need: string;
  status: RequirementStatus;
  proof: string;
};

export type ProposalRequirementGroup = {
  title: string;
  items: ProposalRequirement[];
};

export type ProposalStep = {
  title: string;
  body: string;
};

export type ProposalPhase = {
  when: string;
  title: string;
  body: string;
};

export type Proposal = {
  slug: string;
  client: string;
  projectName: string;
  dateLabel: string;
  greeting?: string;
  eyebrow: string;
  headline: string;
  lead: string[];
  quickFacts: { label: string; value: string }[];
  answers: ProposalAnswer[];
  candidNote?: { title: string; body: string };
  experience: ProposalExperience[];
  evidence: ProposalEvidence[];
  requirementGroups: ProposalRequirementGroup[];
  approach: { title: string; intro: string; steps: ProposalStep[]; note?: string };
  timeline: ProposalPhase[];
  questions: string[];
  closing: { title: string; body: string };
  signature: { name: string; role: string; location: string; links: ProposalLink[] };
};
