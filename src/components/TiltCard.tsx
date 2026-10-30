"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  highlight?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  highlight = false,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = -((y - centerY) / centerY) * maxTilt;
    const ry = ((x - centerX) / centerX) * maxTilt;

    setRotX(rx);
    setRotY(ry);
    setSpotlightPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      className="relative rounded-2xl h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative h-full rounded-2xl transition-all duration-200 ease-out overflow-hidden ${className} ${
          isHovered ? "shadow-2xl" : ""
        }`}
        style={{
          transform: `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) ${
            isHovered ? "translateZ(12px) scale3d(1.02, 1.02, 1.02)" : "translateZ(0px) scale3d(1, 1, 1)"
          }`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "var(--glow-neon)"
            : "none",
          borderColor: isHovered
            ? "var(--border-accent)"
            : highlight
            ? "var(--border-accent)"
            : "var(--border-glass)",
        }}
      >
        {/* Dynamic Specular Neon Cursor Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 280px at ${spotlightPos.x}% ${spotlightPos.y}%, var(--neon-spotlight), transparent 80%)`,
          }}
        />

        {/* Ambient Neon Top Accent Glow */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 z-10"
          style={{
            background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
            opacity: isHovered ? 1 : highlight ? 0.6 : 0,
          }}
        />

        {/* Card Content with 3D Depth */}
        <div className="relative z-20 h-full flex flex-col justify-between" style={{ transform: "translateZ(15px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
