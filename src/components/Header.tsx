import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Download, Mail, Menu, X } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { profile } from "../data/profile";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? "bg-white/10 text-white" : "text-steel hover:bg-white/8 hover:text-white"
  }`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Portfolio home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-scan/40 bg-scan/12 text-sm font-bold text-scan">
            AK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">{profile.name}</span>
            <span className="block text-xs text-steel">{profile.title}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink to={profile.resumeUrl} download variant="ghost" icon={<Download size={16} />}>
            Resume
          </ButtonLink>
          <ButtonLink to={`mailto:${profile.email}`} variant="secondary" icon={<Mail size={16} />}>
            Contact
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          title="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <ButtonLink to={profile.resumeUrl} download variant="ghost" icon={<Download size={16} />}>
              Resume
            </ButtonLink>
            <ButtonLink to={`mailto:${profile.email}`} variant="secondary" icon={<Mail size={16} />}>
              Contact
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
