"use client";

import { useId } from "react";

const STAR_PATH =
  "M50 0C52 28 72 48 100 50C72 52 52 72 50 100C48 72 28 52 0 50C28 48 48 28 50 0Z";

const BOLT_PATH = "M36 0L4 56H26L18 100L56 40H32L36 0Z";

export function FourPointStar({ className = "" }: { className?: string }) {
  const id = useId();

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      overflow="visible"
    >
      <defs>
        <linearGradient id={`${id}-edge`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ddd6fe" />
          <stop offset="45%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id={`${id}-face`} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="35%" stopColor="#18181b" />
          <stop offset="70%" stopColor="#000000" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <radialGradient id={`${id}-sheen`} cx="30%" cy="20%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-spec`} cx="25%" cy="15%" r="16%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="6" dy="14" stdDeviation="10" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter={`url(#${id}-shadow)`}>
        <path d={STAR_PATH} fill={`url(#${id}-edge)`} transform="translate(-8,-8)" />
        <path d={STAR_PATH} fill={`url(#${id}-face)`} />
        <path
          d={STAR_PATH}
          fill="none"
          stroke={`url(#${id}-edge)`}
          strokeWidth="1.2"
          strokeOpacity="0.55"
        />
        <path d={STAR_PATH} fill={`url(#${id}-sheen)`} />
        <path d={STAR_PATH} fill={`url(#${id}-spec)`} />
      </g>
    </svg>
  );
}

export function LightningBolt({ className = "" }: { className?: string }) {
  const id = useId();

  return (
    <svg
      viewBox="0 0 60 100"
      className={className}
      aria-hidden="true"
      overflow="visible"
    >
      <defs>
        <linearGradient id={`${id}-edge`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="50%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id={`${id}-face`} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="35%" stopColor="#18181b" />
          <stop offset="70%" stopColor="#000000" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <radialGradient id={`${id}-sheen`} cx="35%" cy="14%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-spec`} cx="30%" cy="10%" r="14%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="6" dy="14" stdDeviation="10" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter={`url(#${id}-shadow)`}>
        <path d={BOLT_PATH} fill={`url(#${id}-edge)`} transform="translate(8,-8)" />
        <path d={BOLT_PATH} fill={`url(#${id}-face)`} />
        <path
          d={BOLT_PATH}
          fill="none"
          stroke={`url(#${id}-edge)`}
          strokeWidth="1.2"
          strokeOpacity="0.55"
        />
        <path d={BOLT_PATH} fill={`url(#${id}-sheen)`} />
        <path d={BOLT_PATH} fill={`url(#${id}-spec)`} />
      </g>
    </svg>
  );
}
