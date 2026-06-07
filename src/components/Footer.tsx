import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080909]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">
            {profile.name} - {profile.headline}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-steel">
            Available for simulation prototypes, WebGL demos, VR training concepts, technical UI systems,
            and interactive learning tools. Contact: {profile.email} / {profile.phone}.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-2 lg:justify-end">
          <ButtonLink to={`mailto:${profile.email}`} icon={<Mail size={16} />}>
            Contact Me
          </ButtonLink>
          <ButtonLink to={profile.linkedinUrl} variant="ghost" icon={<Linkedin size={16} />} aria-label="LinkedIn profile">
            LinkedIn
          </ButtonLink>
          <ButtonLink to={profile.githubUrl} variant="ghost" icon={<Github size={16} />} aria-label="GitHub profile">
            GitHub
          </ButtonLink>
          <ButtonLink to="/projects" variant="ghost" icon={<ArrowUpRight size={16} />}>
            Projects
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
