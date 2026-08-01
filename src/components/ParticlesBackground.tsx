import React, { useState, useEffect } from "react";

// Static constellation: Big (Top-Right) -> Small (Bottom-Left) within the top 50vh region
const COLS = 24;
const ROWS = 14;
const VW = 1400;
const VH = 500;
const CELL_W = VW / COLS;
const CELL_H = VH / ROWS;
const MAX_R = 45;
const MIN_R = 1.5;

interface StaticNode {
  id: string;
  cx: number;
  cy: number;
  r: number;
  fill: string;
}

// Discrete size tiers per row level: Top-most row = Big, next rows = level 2, level 3, etc.
const TIER_RADII = [45, 30, 20, 13, 8.5, 5, 3, 1.8];

const STATIC_NODES: StaticNode[] = [];

for (let r = 0; r < ROWS; r++) {
  const rowOffset = (r % 2) * 0.5 * CELL_W;
  for (let c = 0; c < COLS + 1; c++) {
    const orig_cx = Math.round(((c + 0.5) * CELL_W + rowOffset) * 10) / 10;
    const orig_cy = Math.round((r + 0.5) * CELL_H * 10) / 10;

    if (orig_cx > VW + 30) continue;

    // Calculate normalized radial distance from Top-Right corner
    const dx = (VW - orig_cx) / (VW * 0.55);
    const dy = orig_cy / VH;
    const t = Math.sqrt(dx * dx + dy * dy);

    // Only render particles within this quadrant/ellipse
    if (t > 1) continue;

    // Warp t to compress outer rows together as sizes decrease
    const t_warped = Math.pow(t, 0.65);
    const scale = t > 0 ? t_warped / t : 0;

    // Apply coordinate warp
    const cx = Math.round((VW - (VW - orig_cx) * scale) * 10) / 10;
    const cy = Math.round((orig_cy * scale) * 10) / 10;

    // Row-wise level selection: Level 0 (top-most big) -> Level 1 (2nd) -> Level 2 (3rd)...
    const tier = Math.min(TIER_RADII.length - 1, Math.floor(t_warped * TIER_RADII.length));
    const radius = TIER_RADII[tier] ?? 0;

    const isRed = (c + r * 3) % 7 === 0;

    // Boundary edge fade so particles don't clip abruptly at t=1
    const fade = Math.pow(Math.max(0, 1 - t_warped), 0.4);
    const alpha = Math.round((isRed ? 0.35 : 0.25) * fade * 1000) / 1000;

    if (alpha <= 0.005) continue;

    const fill = isRed
      ? `rgba(224, 32, 32, ${alpha})`
      : `rgba(30, 41, 59, ${alpha})`;

    STATIC_NODES.push({
      id: `${r}-${c}`,
      cx,
      cy,
      r: radius,
      fill,
    });
  }
}

export function ParticlesBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    handleChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        opacity: 0.75,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={isMobile ? "620 0 680 500" : `0 0 ${VW} ${VH}`}
        preserveAspectRatio={isMobile ? "xMaxYMin meet" : "xMaxYMin slice"}
        style={{ display: "block" }}
      >
        <defs>
          <radialGradient id="bgGlow" cx="100%" cy="0%" r="50%">
            <stop offset="0%" stopColor="rgba(224, 32, 32, 0.075)" />
            <stop offset="50%" stopColor="rgba(30, 41, 59, 0.015)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bgGlow)" />
        {STATIC_NODES.map((node) => (
          <circle
            key={node.id}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={node.fill}
          />
        ))}
      </svg>
    </div>
  );
}

export default ParticlesBackground;
