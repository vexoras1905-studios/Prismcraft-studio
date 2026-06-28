import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function AnimatedBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const blob4Ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    // GSAP slow continuous animation for deep ambient background blobs
    const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current, blob4Ref.current];
    
    blobs.forEach((blob, i) => {
      if (!blob) return;
      
      const randomX = () => (Math.random() - 0.5) * 40;
      const randomY = () => (Math.random() - 0.5) * 40;
      const randomScale = () => 0.8 + Math.random() * 0.4;
      const randomDuration = () => 15 + Math.random() * 10;

      gsap.to(blob, {
        xPercent: randomX(),
        yPercent: randomY(),
        scale: randomScale(),
        duration: randomDuration(),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 2,
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Check if mouse is hovering over interactive elements for custom glow effects
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.interactive-card') !== null;
      
      setIsHoveringClickable(isClickable);

      // Smooth custom cursor/glow tracking with GSAP
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-neutral-950 pointer-events-none">
      {/* Dynamic Drift Blobs */}
      <div 
        ref={blob1Ref}
        className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] md:w-[35vw] md:h-[35vw] rounded-full bg-purple-700/15 blur-[80px] md:blur-[120px]"
      />
      <div 
        ref={blob2Ref}
        className="absolute top-[50%] right-[10%] w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] rounded-full bg-pink-700/15 blur-[90px] md:blur-[140px]"
      />
      <div 
        ref={blob3Ref}
        className="absolute bottom-[5%] left-[20%] w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] rounded-full bg-orange-600/10 blur-[80px] md:blur-[110px]"
      />
      <div 
        ref={blob4Ref}
        className="absolute top-[30%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-emerald-600/10 blur-[90px] md:blur-[130px]"
      />

      {/* Decorative starry background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle bottom-to-top glowing gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/80" />

      {/* Modern interactive mouse-glow effect */}
      <div 
        ref={glowRef}
        id="mouse-glow"
        className="hidden md:block fixed top-0 left-0 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-screen opacity-40 blur-[70px] transition-transform duration-300"
        style={{
          background: isHoveringClickable 
            ? 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(109,40,217,0.1) 50%, rgba(0,0,0,0) 70%)'
            : 'radial-gradient(circle, rgba(109,40,217,0.25) 0%, rgba(249,115,22,0.05) 50%, rgba(0,0,0,0) 70%)',
          transform: `translate3d(-50%, -50%, 0) scale(${isHoveringClickable ? 1.5 : 1})`,
        }}
      />
    </div>
  );
}
