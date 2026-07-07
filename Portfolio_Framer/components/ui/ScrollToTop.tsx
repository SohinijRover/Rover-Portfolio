"use client";

import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const lenis = useLenis();

  return (
    <button
      type="button"
      onClick={() =>
        lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Scroll to top"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/10"
    >
      <ArrowUp size={18} />
    </button>
  );
}
