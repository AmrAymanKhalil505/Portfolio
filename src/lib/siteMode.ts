import { profile } from "../data/profile";

// One site, two modes chosen by URL:
//   /...       public — full contact details, LinkedIn/GitHub, public resume.
//   /work/...  marketplace-safe (e.g. Upwork before a contract) — no email, phone, social
//              profiles, or contact-bearing resume. Used for links sent through job platforms.
// The mode is fixed for the page load: the router basename includes "/work", so every
// internal <Link> stays inside the mode without knowing about it.

export type SiteMode = "public" | "work";

const appBase = import.meta.env.BASE_URL.replace(/\/$/, "");
export const workPrefix = "/work";

const pathWithinApp = window.location.pathname.slice(appBase.length);

export const siteMode: SiteMode =
  pathWithinApp === workPrefix || pathWithinApp.startsWith(`${workPrefix}/`) ? "work" : "public";

export const isWorkMode = siteMode === "work";

export const routerBasename = `${appBase}${isWorkMode ? workPrefix : ""}` || undefined;

type ContactLinks = {
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  resumeUrl?: string;
};

// Everything a page may show for reaching Amr. Components render a link only if it is set here,
// so work mode stays clean without per-component checks of the mode.
export const contact: ContactLinks = isWorkMode
  ? { resumeUrl: profile.workResumeUrl }
  : {
      email: profile.email,
      phone: profile.phone,
      linkedinUrl: profile.linkedinUrl,
      githubUrl: profile.githubUrl,
      resumeUrl: profile.resumeUrl,
    };
