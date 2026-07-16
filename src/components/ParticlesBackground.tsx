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
      alpha = 1.0;

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

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    
    let time = 0;
    
    let textRects: { left: number, right: number, top: number, bottom: number, width: number, height: number }[] = [];

    const updateRects = () => {
      // Only repel from floating headers, not grid cards where they can get trapped!
      const elements = document.querySelectorAll('.hero h1, .hero p, .hero-eyebrow, .page-hero h1, .page-hero p, .page-hero-label, .section-h2, .section-lead, .section-label');
      textRects = Array.from(elements).map(el => {
        const r = el.getBoundingClientRect();
        return {
          left: r.left,
          right: r.right,
          top: r.top + window.scrollY,
          bottom: r.bottom + window.scrollY,
          width: r.width,
          height: r.height
        };
      });
    };

    const init = () => {
      // Handle high-DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      
      time += 0.02; // Time accumulator for sine waves
      
      // Smoothly interpolate mouse target
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;
      const mouseParallaxX = currentMouseX * -40; // Max 40px shift opposite to mouse
      const mouseParallaxY = currentMouseY * -40;
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Sinusoidal floating, scaled by particle size for a stunning faux-3D parallax effect!
        const depth = p.size * 0.4;
        const offsetX = Math.cos(time * 0.22 + p.offset * 0.7) * (20 * depth);
        const offsetY = Math.sin(time * 0.30 + p.offset) * (20 * depth);
        
        // Mouse and Scroll Parallax
        // We scale by 'depth' so larger particles move faster than small ones (true 3D feel!)
        const scrollOffset = window.scrollY * 0.35 * depth;
        let finalX = p.baseX + offsetX + (mouseParallaxX * depth);
        let finalY = p.baseY + offsetY - scrollOffset + (mouseParallaxY * depth);
        
        // Wrap vertically and horizontally to create an infinite continuous field
        finalX = ((finalX % w) + w) % w;
        finalY = ((finalY % h) + h) % h;
        
        // --- TEXT DESPAWN (FADE) LOGIC ---
        const currentScrollY = window.scrollY;
        let targetAlpha = 1.0;
        
        for (let r = 0; r < textRects.length; r++) {
          const rect = textRects[r];
          const vTop = rect.top - currentScrollY;
          const vBottom = rect.bottom - currentScrollY;
          
          const margin = 20; // Margin around text where particles begin to fade
          if (finalX > rect.left - margin && finalX < rect.right + margin &&
              finalY > vTop - margin && finalY < vBottom + margin) {
              targetAlpha = 0.0; // Fade out when behind text
              break;
          }
        }
        
        // Smoothly fade alpha in and out
        p.alpha += (targetAlpha - p.alpha) * 0.15;
        // -----------------------------
        
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(finalX, finalY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.globalAlpha = 1.0;
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
        updateRects();
      }, 200); // Debounce to prevent layout thrashing
    };

    let rectsInterval = setInterval(updateRects, 1500); // Re-calculate rects periodically in case dynamic elements load

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        targetMouseY = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      clearTimeout(resizeTimeout);
      clearInterval(rectsInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
