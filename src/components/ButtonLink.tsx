import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  children: ReactNode;
  to: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  download?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const variantClass = {
  primary:
    "border-scan bg-scan text-ink hover:bg-white hover:border-white focus-visible:outline-scan",
  secondary:
    "border-white/20 bg-white/8 text-white hover:bg-white/14 hover:border-white/35 focus-visible:outline-pulse",
  ghost:
    "border-transparent bg-transparent text-steel hover:text-white hover:bg-white/8 focus-visible:outline-pulse",
};

function ButtonLink({ children, to, variant = "secondary", icon, download, ...props }: ButtonLinkProps) {
  const className = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClass[variant]} ${props.className ?? ""}`;
  const isExternal = to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("#");

  if (isExternal || download) {
    return (
      <a href={to} className={className} download={download} {...props}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} {...props}>
      {icon}
      {children}
    </Link>
  );
}

export default ButtonLink;
