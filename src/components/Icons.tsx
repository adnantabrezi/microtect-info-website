/**
 * Professional inline SVG icons used across the site.
 * All icons are 24x24, stroke-based, 1.5px weight.
 */

const svgProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// -- Features / Capabilities --

export function IconParticleSize() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function IconNitrogen() {
  return (
    <svg {...svgProps}>
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

export function IconTechnology() {
  return (
    <svg {...svgProps}>
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </svg>
  );
}

export function IconGrinding() {
  return (
    <svg {...svgProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function IconThroughput() {
  return (
    <svg {...svgProps}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

// -- Benefits --

export function IconBioavailability() {
  return (
    <svg {...svgProps}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

export function IconNoHeat() {
  return (
    <svg {...svgProps}>
      <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
    </svg>
  );
}

export function IconPurity() {
  return (
    <svg {...svgProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function IconEfficiency() {
  return (
    <svg {...svgProps}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

export function IconCleanAir() {
  return (
    <svg {...svgProps}>
      <path d="M9.59 4.59A2 2 0 1111 8H2" />
      <path d="M12.59 19.41A2 2 0 1014 16H2" />
      <path d="M17.73 7.73A2.5 2.5 0 1119.5 12H2" />
    </svg>
  );
}

// -- Facility / Process --

export function IconCleanRoom() {
  return (
    <svg {...svgProps}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function IconHVAC() {
  return (
    <svg {...svgProps}>
      <path d="M9.59 4.59A2 2 0 1111 8H2" />
      <path d="M12.59 19.41A2 2 0 1014 16H2" />
      <path d="M17.73 7.73A2.5 2.5 0 1119.5 12H2" />
    </svg>
  );
}

export function IconCleaning() {
  return (
    <svg {...svgProps}>
      <polyline points="20 6 9 17 4 12" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function IconLab() {
  return (
    <svg {...svgProps}>
      <path d="M9 3h6" />
      <path d="M10 3v7.4a2 2 0 01-.6 1.4L4 17.2a2 2 0 00-.6 1.4V20a2 2 0 002 2h13.2a2 2 0 002-2v-1.4a2 2 0 00-.6-1.4l-5.4-5.4a2 2 0 01-.6-1.4V3" />
    </svg>
  );
}

export function IconQuality() {
  return (
    <svg {...svgProps}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export function IconMicronizer() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

// -- Services Page --

export function IconMicronization() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function IconAPI() {
  return (
    <svg {...svgProps}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}

export function IconAnalysis() {
  return (
    <svg {...svgProps}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

export function IconRnD() {
  return (
    <svg {...svgProps}>
      <path d="M9 3h6" />
      <path d="M10 3v7.4a2 2 0 01-.6 1.4L4 17.2a2 2 0 00-.6 1.4V20a2 2 0 002 2h13.2a2 2 0 002-2v-1.4a2 2 0 00-.6-1.4l-5.4-5.4a2 2 0 01-.6-1.4V3" />
    </svg>
  );
}

export function IconNitrogenMilling() {
  return (
    <svg {...svgProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4l2 2" />
    </svg>
  );
}

export function IconQA() {
  return (
    <svg {...svgProps}>
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// -- Contact --

export function IconMail() {
  return (
    <svg {...svgProps}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13L2 4" />
    </svg>
  );
}

export function IconPhone() {
  return (
    <svg {...svgProps}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function IconMapPin() {
  return (
    <svg {...svgProps}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconClock() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function IconWhatsApp(props?: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );
}

// -- Industries & Certifications --

export function IconPharma() {
  return (
    <svg {...svgProps}>
      <path d="M10.5 20.5l-6-6a4.95 4.95 0 117-7l6 6a4.95 4.95 0 11-7 7z" />
      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    </svg>
  );
}

export function IconFood() {
  return (
    <svg {...svgProps}>
      <path d="M2 21c0-3 1.85-5.36 4-6.5a10 10 0 014.5-1.5c4 0 7 2 9 6" />
      <path d="M11 21v-4" />
      <path d="M7 21v-3" />
      <path d="M15 21v-3" />
      <path d="M12 13V3a1 1 0 011-1 3 3 0 013 3v2" />
    </svg>
  );
}

export function IconCosmetics() {
  return (
    <svg {...svgProps}>
      <path d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
      <path d="M19 12l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
      <path d="M5 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </svg>
  );
}

export function IconChemical() {
  return (
    <svg {...svgProps}>
      <path d="M10 2v7.31" />
      <path d="M14 9.3V1.99" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3a6.5 6.5 0 11-4 0" />
      <path d="M5.52 16h12.96" />
    </svg>
  );
}

export function IconCertificate() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
