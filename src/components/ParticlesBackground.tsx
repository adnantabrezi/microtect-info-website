import React from "react";

// Static constellation: Big (Top-Right) -> Small (Bottom-Left)
const COLS = 14;
const ROWS = 10;
const VW = 1400;
const VH = 900;
const CELL_W = VW / COLS;
const CELL_H = VH / ROWS;
const MAX_R = 45;
const MIN_R = 1;

interface StaticNode {
  id: string;
  cx: number;
  cy: number;
  r: number;
  fill: string;
}

const STATIC_NODES: StaticNode[] = [];

for (let r = 0; r < ROWS; r++) {
  const rowOffset = (r % 2) * 0.5 * CELL_W;
  for (let c = 0; c < COLS + 1; c++) {
    const cx = Math.round(((c + 0.5) * CELL_W + rowOffset) * 10) / 10;
    const cy = Math.round((r + 0.5) * CELL_H * 10) / 10;

    if (cx > VW + 30) continue;

    // t goes from 0.0 at Top-Right to 1.0 at Bottom-Left
    const t = Math.min(1, Math.max(0, ((1 - cx / VW) + cy / VH) / 2));

    // BIG at Top-Right (t=0), SMALL at Bottom-Left (t=1)
    const sizeProgress = Math.pow(1 - t, 1.25);
    const radius = Math.round((MIN_R + (MAX_R - MIN_R) * sizeProgress) * 10) / 10;

    const isRed = (c + r * 3) % 7 === 0;
    const sizeRatio = (radius - MIN_R) / (MAX_R - MIN_R);
    const alpha = Math.round((0.05 + (1 - sizeRatio) * 0.22) * 1000) / 1000;

    const fill = isRed
      ? `rgba(224, 32, 32, ${alpha})`
      : `rgba(30, 41, 59, ${(alpha * 0.85).toFixed(3)})`;

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
        opacity: 0.6,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid slice"
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
