import { siteConfig } from "@/lib/data";

const KEYWORDS = ["ANDROID", "PYTHON", "EMBEDDED C", "AUTOMOTIVE HMI", "LLMs"];

function MarqueeUnit() {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-3">
      <span>/BUILDING SINCE {siteConfig.foundedYear}</span>
      {KEYWORDS.map((keyword) => (
        <span key={keyword} className="flex items-center gap-3">
          <span className="text-foreground/20">—</span>
          <span>{keyword}</span>
        </span>
      ))}
      <span className="text-foreground/20">—</span>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-foreground/10 bg-white py-5">
      <div className="flex w-max animate-marquee text-sm font-semibold uppercase tracking-widest text-foreground/40">
        <div className="flex shrink-0">
          <MarqueeUnit />
          <MarqueeUnit />
          <MarqueeUnit />
        </div>
        <div className="flex shrink-0" aria-hidden="true">
          <MarqueeUnit />
          <MarqueeUnit />
          <MarqueeUnit />
        </div>
      </div>
    </div>
  );
}
