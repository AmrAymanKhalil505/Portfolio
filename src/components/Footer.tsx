import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { profile } from "../data/profile";
import { contact } from "../lib/siteMode";

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [footerProgress, setFooterProgress] = useState(0);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const thresholds = Array.from({ length: 21 }, (_, index) => index / 20);
    const observer = new IntersectionObserver(
      ([entry]) => {
        const progress = entry.isIntersecting ? Math.min(1, entry.intersectionRatio * 1.35) : 0;
        setFooterProgress(progress);
      },
      {
        threshold: thresholds,
      },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const compactLinkClass =
    "inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-sm font-semibold text-steel transition hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scan";

  return (
    <>
      <aside
        aria-label="Quick portfolio contact"
        className={`fixed inset-x-0 bottom-0 z-50 origin-bottom transition-[transform,opacity] duration-150 ease-out ${
          footerProgress > 0.88 ? "pointer-events-none" : ""
        }`}
        style={{
          opacity: 1 - footerProgress,
          transform: `translateY(${footerProgress * 92}%) scaleX(${1 - footerProgress * 0.035}) scaleY(${1 - footerProgress * 0.08})`,
        }}
      >
        <div className="border-t border-white/10 bg-[#080909]/95 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2 sm:px-6 lg:px-8">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">Open to remote Unity roles</p>
              <p className="hidden truncate text-xs text-steel sm:block">
                Simulation · WebGL · VR · EdTech
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-scan bg-scan px-3 py-1.5 text-sm font-semibold text-ink transition hover:border-white hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scan"
                >
                  <Mail size={15} />
                  Contact
                </a>
              )}
              {contact.linkedinUrl && (
                <a
                  href={contact.linkedinUrl}
                  className={`${compactLinkClass} hidden sm:inline-flex`}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={15} />
                  <span className="hidden lg:inline">LinkedIn</span>
                </a>
              )}
              {contact.githubUrl && (
                <a
                  href={contact.githubUrl}
                  className={`${compactLinkClass} hidden sm:inline-flex`}
                  aria-label="GitHub profile"
                >
                  <Github size={15} />
                  <span className="hidden lg:inline">GitHub</span>
                </a>
              )}
              <Link to="/projects" className={compactLinkClass}>
                <ArrowUpRight size={15} />
                <span className="hidden sm:inline">Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>

      <footer ref={footerRef} className="border-t border-white/10 bg-[#080909]">
        <div
          className="mx-auto grid max-w-7xl gap-8 px-4 py-10 transition-[transform,opacity] duration-150 ease-out sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8"
          style={{
            opacity: 0.82 + footerProgress * 0.18,
            transform: `translateY(${(1 - footerProgress) * 10}px)`,
          }}
        >
          <div>
            <p className="text-lg font-semibold text-white">
              {profile.name} - {profile.headline}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-steel">
              Available for simulation prototypes, WebGL demos, VR training concepts, technical UI systems,
              and interactive learning tools.
              {contact.email && contact.phone && ` Contact: ${contact.email} / ${contact.phone}.`}
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-2 lg:justify-end">
            {contact.email && (
              <ButtonLink to={`mailto:${contact.email}`} icon={<Mail size={16} />}>
                Contact Me
              </ButtonLink>
            )}
            {contact.linkedinUrl && (
              <ButtonLink to={contact.linkedinUrl} variant="ghost" icon={<Linkedin size={16} />} aria-label="LinkedIn profile">
                LinkedIn
              </ButtonLink>
            )}
            {contact.githubUrl && (
              <ButtonLink to={contact.githubUrl} variant="ghost" icon={<Github size={16} />} aria-label="GitHub profile">
                GitHub
              </ButtonLink>
            )}
            <ButtonLink to="/projects" variant="ghost" icon={<ArrowUpRight size={16} />}>
              Projects
            </ButtonLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
