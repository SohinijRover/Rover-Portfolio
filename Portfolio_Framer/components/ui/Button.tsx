import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  className?: string;
  external?: boolean;
};

const variants = {
  dark: "bg-foreground text-background hover:bg-neutral-800",
  light: "bg-white text-black hover:bg-neutral-200",
  outline:
    "border border-foreground/20 text-foreground hover:border-foreground/60 bg-transparent",
};

export default function Button({
  href,
  children,
  variant = "dark",
  className = "",
  external = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
