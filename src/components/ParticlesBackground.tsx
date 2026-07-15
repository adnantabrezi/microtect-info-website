import React, { useEffect, useRef } from "react";

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 60 : 150;

    class Particle {
      baseX: number;
      baseY: number;
      size: number;
      offset: number;
      color: string;

      constructor(w: number, h: number) {
        this.baseX = Math.random() * w;
        this.baseY = Math.random() * h;
        // Huge size variety: 85% small/medium particles, 15% large "close" particles
        const isLarge = Math.random() > 0.85;
        this.size = isLarge ? Math.random() * 3.5 + 3 : Math.random() * 2 + 0.5;
        this.offset = Math.random() * Math.PI * 2;
        
        // Theme colors: 85% muted black/gray, 15% brand red
        const isRed = Math.random() > 0.85;
        const opacity = Math.random() * 0.5 + 0.15; // Opacity between 0.15 and 0.65
        this.color = isRed 
          ? `rgba(224, 32, 32, ${opacity})`   // --red
          : `rgba(10, 10, 10, ${opacity})`;   // --text
      }
    }

    let time = 0;
    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      // Handle high-DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(rect.width, rect.height));
      }
    };

    const animate = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      time += 0.02; // Time accumulator for sine waves
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Sinusoidal floating, scaled by particle size for a stunning faux-3D parallax effect!
        const depth = p.size * 0.4;
        const offsetX = Math.cos(time * 0.22 + p.offset * 0.7) * (20 * depth);
        const offsetY = Math.sin(time * 0.30 + p.offset) * (20 * depth);
        
        ctx.beginPath();
        ctx.arc(p.baseX + offsetX, p.baseY + offsetY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize and start animation loop
    init();
    animate();

    // Handle Resize without infinite loops
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 200); // Debounce to prevent layout thrashing
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
