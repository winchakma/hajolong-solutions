"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [mascotMode, setMascotMode] = useState<"hi" | "ai">("hi");
  const [speech, setSpeech] = useState(
    "👋 Hello! I'm AXIOM, your digital guide at Hajolong Solutions. How can we help grow your business today?"
  );
  // Smoothly interpolated 3D body tilt (-1..1 normalized cursor tracking)
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  // Normalized gaze vector (-1..1) for live visor eye/mouth & hand tracking
  const [lookX, setLookX] = useState(0);
  const [lookY, setLookY] = useState(0);
  // Natural eye blinking & interactive wave burst state
  const [isBlinking, setIsBlinking] = useState(false);
  const [isExcited, setIsExcited] = useState(false);
  const [wavePhase, setWavePhase] = useState(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const targetLook = useRef({ x: 0, y: 0 });
  const currentLook = useRef({ x: 0, y: 0 });

  // Global mouse tracking + continuous animation loop for smooth 3D head/body, eyes & hand motion
  useEffect(() => {
    const onWindowMouseMove = (e: MouseEvent) => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.36; // Visor level

      // Normalize across viewport distance for natural full-page cursor tracking
      const rawX = (e.clientX - centerX) / (window.innerWidth * 0.42);
      const rawY = (e.clientY - centerY) / (window.innerHeight * 0.42);
      const clamp = (v: number) => Math.max(-1, Math.min(1, v));

      targetLook.current = {
        x: clamp(rawX),
        y: clamp(rawY),
      };
    };

    window.addEventListener("mousemove", onWindowMouseMove, { passive: true });

    let animId: number;
    let startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      // Smooth spring-like lerp toward mouse target
      currentLook.current.x += (targetLook.current.x - currentLook.current.x) * 0.12;
      currentLook.current.y += (targetLook.current.y - currentLook.current.y) * 0.12;

      const lx = currentLook.current.x;
      const ly = currentLook.current.y;

      setLookX(lx);
      setLookY(ly);
      setRotY(lx * 24);
      setRotX(-ly * 18);
      setWavePhase(elapsed);

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onWindowMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Natural periodic eye blinking
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const intervalId = setInterval(() => {
      setIsBlinking(true);
      timeoutId = setTimeout(() => setIsBlinking(false), 150);
    }, 3400);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const greetings = [
    "⚡ Want an AI bot for your business? We build 24/7 custom bots.",
    "🌐 Need a new website or system redesign? We build from scratch.",
    "🚀 Hajolong Solutions delivers IBM-grade reliability with modern speed.",
    "💡 Click below to start building your next-gen software platform!",
  ];

  const handleMascotClick = () => {
    const randomGreet = greetings[Math.floor(Math.random() * greetings.length)];
    setSpeech(randomGreet);
    setIsExcited(true);
    setTimeout(() => setIsExcited(false), 900);
  };

  // Full-body floating & swaying + cursor-driven 3D body translation & lean
  const floatY = Math.sin(wavePhase * 2.3) * 11;
  const floatSway = Math.cos(wavePhase * 1.7) * 2.5;
  const bodyShiftX = lookX * 26;
  const bodyShiftY = lookY * 18 + floatY;
  const bodyLeanZ = lookX * 7 + floatSway;

  // Independent head turn & nod on the neck joint
  const headRot = lookX * 9 + Math.sin(wavePhase * 2.3) * 2.5;
  const headShiftX = lookX * 10;
  const headShiftY = lookY * 8;

  // Articulated BOTH arms (Left + Right) waving & tracking mouse cursor
  const hiLeftArmAngle =
    Math.sin(wavePhase * (isExcited ? 11 : 4.2)) * (isExcited ? 20 : 13) +
    lookX * 16 -
    lookY * 14;

  const hiRightArmAngle =
    Math.cos(wavePhase * (isExcited ? 11 : 4.2)) * (isExcited ? 18 : 11) +
    lookX * 16 +
    lookY * 14;

  const aiLeftArmAngle =
    Math.sin(wavePhase * (isExcited ? 10 : 3.6)) * (isExcited ? 18 : 11) +
    lookX * 16 -
    lookY * 14;

  const aiRightArmAngle =
    -Math.sin(wavePhase * (isExcited ? 10 : 3.6)) * (isExcited ? 18 : 11) +
    lookX * 16 +
    lookY * 14;

  // Eye & mouth pixel offsets inside the 830x1100 visor coordinate space
  const hiEyeOffsetX = lookX * 34;
  const hiEyeOffsetY = lookY * 24;
  const aiEyeOffsetX = lookX * 30;
  const aiEyeOffsetY = lookY * 24;
  const eyeScaleY = isBlinking ? 0.1 : isExcited ? 1.14 : 1;

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-mesh"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border shadow-sm backdrop-blur-xl transition-all hover:scale-105"
              style={{
                backgroundColor: "var(--bg-surface-elevated)",
                borderColor: "var(--border-glass)",
                color: "var(--accent-highlight)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse-dot"
                style={{ backgroundColor: "var(--neon-cyan)" }}
              />
              <span>
                <span className="font-bold" style={{ color: "var(--neon-cyan)" }}>CUSTOM SOFTWARE</span>{" "}
                <span className="opacity-40">•</span>{" "}
                <span className="font-bold" style={{ color: "var(--accent-secondary)" }}>AI BOTS</span>{" "}
                <span className="opacity-40">•</span>{" "}
                <span className="font-bold" style={{ color: "var(--text-primary)" }}>SYSTEM RESTRUCTURING</span>
              </span>
            </div>

            {/* Main Headline with Animated 2026 Neon Sweep */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-[var(--text-primary)]">
              We Build, Modernize, and Scale Your{" "}
              <span className="neon-text-sweep">Business Software.</span>
            </h1>

            {/* Human-Friendly Subtitle */}
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl font-normal">
              Hajolong Solutions engineers custom web platforms, intelligent AI
              bots, and seamless software integrations. We replace slow, outdated
              tools with lightning-fast systems that simplify operations and
              accelerate your business growth.
            </p>

            {/* Call to Actions with Neon Hover Flares */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="/solutions"
                className="px-7 py-3.5 rounded-xl font-bold text-sm btn-primary flex items-center gap-2 tracking-wide group"
              >
                <span>Explore Solutions</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/solutions#ai-bots"
                className="px-6 py-3.5 rounded-xl font-bold text-sm btn-secondary flex items-center gap-2"
              >
                <span>🤖 Build an AI Bot</span>
              </Link>

              <Link
                href="/contact"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline transition-colors"
              >
                Contact Our Team &rarr;
              </Link>
            </div>

            {/* 4 Trust Metrics - Crisp Typography & Clean Borders (Zero Bleeding Glow) */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full pt-6 border-t"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div
                className="p-3.5 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden backdrop-blur-xl"
                style={{
                  backgroundColor: "var(--bg-surface-glass)",
                  borderColor: "var(--border-glass)",
                }}
              >
                <div
                  className="text-2xl lg:text-3xl font-extrabold font-display transition-all"
                  style={{
                    color: "var(--neon-cyan)",
                  }}
                >
                  100%
                </div>
                <div className="text-[11px] font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider mt-1.5">
                  Custom Built
                </div>
              </div>

              <div
                className="p-3.5 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden backdrop-blur-xl"
                style={{
                  backgroundColor: "var(--bg-surface-glass)",
                  borderColor: "var(--border-glass)",
                }}
              >
                <div
                  className="text-2xl lg:text-3xl font-extrabold font-display transition-all"
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  1–2 Mo
                </div>
                <div className="text-[11px] font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider mt-1.5">
                  Rapid Delivery
                </div>
              </div>

              <div
                className="p-3.5 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden backdrop-blur-xl"
                style={{
                  backgroundColor: "var(--bg-surface-glass)",
                  borderColor: "var(--border-glass)",
                }}
              >
                <div
                  className="text-2xl lg:text-3xl font-extrabold font-display transition-all"
                  style={{
                    color: "var(--neon-cyan)",
                  }}
                >
                  99.99%
                </div>
                <div className="text-[11px] font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider mt-1.5">
                  Uptime SLA
                </div>
              </div>

              <div
                className="p-3.5 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden backdrop-blur-xl"
                style={{
                  backgroundColor: "var(--bg-surface-glass)",
                  borderColor: "var(--border-glass)",
                }}
              >
                <div
                  className="text-2xl lg:text-3xl font-extrabold font-display transition-all"
                  style={{
                    color: "var(--accent-secondary)",
                  }}
                >
                  Zero
                </div>
                <div className="text-[11px] font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider mt-1.5">
                  Technical Debt
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Holographic Stage & Mascot Guide */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div
              ref={stageRef}
              className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center cursor-pointer select-none"
              style={{ perspective: "1000px" }}
              onClick={handleMascotClick}
            >
              {/* Dynamic Speech Bubble */}
              <div
                className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-[340px] px-4 py-3 rounded-2xl border shadow-xl backdrop-blur-xl transition-all duration-300"
                style={{
                  backgroundColor: "var(--bg-surface-glass)",
                  borderColor: "var(--border-glass)",
                }}
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0 animate-ping" />
                  <p className="text-xs sm:text-sm font-medium leading-snug text-[var(--text-primary)]">
                    {speech}
                  </p>
                </div>
              </div>

              {/* 3D Floating Parallax Badges */}
              <div
                className="absolute top-10 -right-4 sm:-right-8 z-20 px-3.5 py-2 rounded-xl border backdrop-blur-xl shadow-lg flex items-center gap-2.5"
                style={{
                  backgroundColor: "var(--bg-surface-glass)",
                  borderColor: "var(--border-glass)",
                  transform: `translateZ(30px) rotateY(${rotY * 0.6}deg)`,
                }}
              >
                <span className="text-base">⚡</span>
                <div>
                  <div className="text-[11px] font-bold text-[var(--text-primary)]">24/7 AI Automation</div>
                  <div
                    className="text-[9px] font-mono font-semibold"
                    style={{ color: "var(--neon-cyan)" }}
                  >
                    Trained on Your Data
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-16 -left-4 sm:-left-8 z-20 px-3.5 py-2 rounded-xl border backdrop-blur-xl shadow-lg flex items-center gap-2.5"
                style={{
                  backgroundColor: "var(--bg-surface-glass)",
                  borderColor: "var(--border-glass)",
                  transform: `translateZ(25px) rotateX(${rotX * 0.6}deg)`,
                }}
              >
                <span className="text-base">🛡️</span>
                <div>
                  <div className="text-[11px] font-bold text-[var(--text-primary)]">100% IP Ownership</div>
                  <div className="text-[9px] font-mono text-[var(--text-muted)]">Zero Lock-In</div>
                </div>
              </div>

              {/* 3D Rotating Holographic Orbital Ring */}
              <div className="holographic-orbital-ring" />

              {/* Subtle Pedestal Backdrop */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-35 blur-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, var(--glow-cyan) 0%, var(--glow-blue) 45%, transparent 75%)",
                }}
              />

              {/* 3D Interactive Full-Body Character Container */}
              <div
                className="relative w-full h-full flex items-center justify-center z-10"
                style={{
                  transform: `translate3d(${bodyShiftX}px, ${bodyShiftY}px, 0px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${bodyLeanZ}deg)`,
                }}
              >
                {/* Waving Mascot Character Rig (Hi Mode — Exact robot2_clean.png Character) */}
                <div
                  className={`relative w-[86%] aspect-[830/1100] drop-shadow-2xl ${
                    mascotMode === "hi" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none hidden"
                  }`}
                >
                  {/* 1. Torso & Legs Layer */}
                  <img
                    src="/images/robot_hi_torso.png"
                    alt="Hajolong Solutions Mascot AXIOM"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* 2. Articulated Viewer's Right Arm Layer (Pivots at Right Shoulder 72.53% 55.27%) */}
                  <img
                    src="/images/robot_hi_arm_right.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                    style={{
                      transformOrigin: "72.53% 55.27%",
                      transform: `rotate(${hiRightArmAngle}deg)`,
                    }}
                    draggable={false}
                  />

                  {/* 3. Articulated Viewer's Left Waving Arm Layer (Pivots at Left Shoulder 34.46% 49.64%) */}
                  <img
                    src="/images/robot_hi_arm.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                    style={{
                      transformOrigin: "34.46% 49.64%",
                      transform: `rotate(${hiLeftArmAngle}deg)`,
                    }}
                    draggable={false}
                  />

                  {/* 4. Independent Articulated Head + Live Visor (Pivots at Neck 56.0% 45.8%) */}
                  <div
                    className="absolute inset-0 w-full h-full pointer-events-none select-none"
                    style={{
                      transformOrigin: "56.0% 45.8%",
                      transform: `translate(${headShiftX}px, ${headShiftY}px) rotate(${headRot}deg)`,
                    }}
                  >
                    <img
                      src="/images/robot_hi_head.png"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                      draggable={false}
                    />

                    {/* Live Mouse-Tracking Eyes & Mouth inside Visor */}
                    <svg
                      viewBox="0 0 830 1100"
                      className="absolute inset-0 w-full h-full pointer-events-none select-none"
                    >
                      <defs>
                        <clipPath id="hiVisorClip">
                          <rect
                            x="315"
                            y="165"
                            width="365"
                            height="255"
                            rx="85"
                            transform="rotate(12.7 497 292)"
                          />
                        </clipPath>
                        <filter id="visorCyanGlow" x="-35%" y="-35%" width="170%" height="170%">
                          <feGaussianBlur stdDeviation="8" result="blur1" />
                          <feGaussianBlur stdDeviation="3" result="blur2" />
                          <feMerge>
                            <feMergeNode in="blur1" />
                            <feMergeNode in="blur2" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <g clipPath="url(#hiVisorClip)">
                        <g
                          transform={`translate(${hiEyeOffsetX}, ${hiEyeOffsetY}) translate(495, 305) scale(1, ${eyeScaleY}) translate(-495, -305)`}
                        >
                          {/* Left Happy Arc Eye */}
                          <path
                            d="M 362 280 Q 406 226 438 296"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="22"
                            strokeLinecap="round"
                            filter="url(#visorCyanGlow)"
                            opacity="0.85"
                          />
                          <path
                            d="M 362 280 Q 406 226 438 296"
                            fill="none"
                            stroke="#ecfeff"
                            strokeWidth="13"
                            strokeLinecap="round"
                          />

                          {/* Right Happy Arc Eye */}
                          <path
                            d="M 551 321 Q 596 268 630 340"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="22"
                            strokeLinecap="round"
                            filter="url(#visorCyanGlow)"
                            opacity="0.85"
                          />
                          <path
                            d="M 551 321 Q 596 268 630 340"
                            fill="none"
                            stroke="#ecfeff"
                            strokeWidth="13"
                            strokeLinecap="round"
                          />

                          {/* Curved Glowing Smile */}
                          <path
                            d={
                              isExcited
                                ? "M 438 340 Q 478 398 525 355"
                                : "M 443 342 Q 478 386 520 357"
                            }
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="18"
                            strokeLinecap="round"
                            filter="url(#visorCyanGlow)"
                            opacity="0.85"
                          />
                          <path
                            d={
                              isExcited
                                ? "M 438 340 Q 478 398 525 355"
                                : "M 443 342 Q 478 386 520 357"
                            }
                            fill="none"
                            stroke="#ecfeff"
                            strokeWidth="10"
                            strokeLinecap="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* AI Companion Mascot Character Rig (AI Mode — Exact robot.png Character with Full 3D Legs) */}
                <div
                  className={`relative w-[86%] aspect-[830/1100] drop-shadow-2xl ${
                    mascotMode === "ai" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none hidden"
                  }`}
                >
                  {/* 1. AI Torso & Legs Layer */}
                  <img
                    src="/images/robot_ai_torso.png"
                    alt="Hajolong Solutions AI Bot Assistant"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* 2. Articulated AI Left Claw Arm Layer (Pivots at Left Shoulder 30.36% 59.55%) */}
                  <img
                    src="/images/robot_ai_arm_left.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                    style={{
                      transformOrigin: "30.36% 59.55%",
                      transform: `rotate(${aiLeftArmAngle}deg)`,
                    }}
                    draggable={false}
                  />

                  {/* 3. Articulated AI Right Claw Arm Layer (Pivots at Right Shoulder 69.28% 58.36%) */}
                  <img
                    src="/images/robot_ai_arm.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                    style={{
                      transformOrigin: "69.28% 58.36%",
                      transform: `rotate(${aiRightArmAngle}deg)`,
                    }}
                    draggable={false}
                  />

                  {/* 4. Independent Articulated AI Head + Live Visor (Pivots at Neck 52.4% 52.0%) */}
                  <div
                    className="absolute inset-0 w-full h-full pointer-events-none select-none"
                    style={{
                      transformOrigin: "52.4% 52.0%",
                      transform: `translate(${headShiftX}px, ${headShiftY}px) rotate(${headRot}deg)`,
                    }}
                  >
                    <img
                      src="/images/robot_ai_head.png"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                      draggable={false}
                    />

                    {/* Live Mouse-Tracking Round Eyes & Smile inside AI Visor */}
                    <svg
                      viewBox="0 0 830 1100"
                      className="absolute inset-0 w-full h-full pointer-events-none select-none"
                    >
                      <defs>
                        <clipPath id="aiVisorClip">
                          <rect
                            x="220"
                            y="212"
                            width="320"
                            height="242"
                            rx="68"
                            transform="rotate(-2.9 380 333)"
                          />
                        </clipPath>
                        <filter id="aiEyeGlow" x="-45%" y="-45%" width="190%" height="190%">
                          <feGaussianBlur stdDeviation="11" result="blurOuter" />
                          <feGaussianBlur stdDeviation="4" result="blurInner" />
                          <feMerge>
                            <feMergeNode in="blurOuter" />
                            <feMergeNode in="blurInner" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <g clipPath="url(#aiVisorClip)">
                        <g
                          transform={`translate(${aiEyeOffsetX}, ${aiEyeOffsetY}) translate(380, 365) scale(1, ${eyeScaleY}) translate(-380, -365)`}
                        >
                          {/* Left Round Glowing Eye */}
                          <circle
                            cx="290"
                            cy="347"
                            r="32"
                            fill="#38bdf8"
                            filter="url(#aiEyeGlow)"
                            opacity="0.9"
                          />
                          <circle cx="290" cy="347" r="26" fill="#e0f2fe" />
                          {/* Directional Pupil Highlight */}
                          <circle
                            cx={290 + lookX * 9}
                            cy={347 + lookY * 7}
                            r="12"
                            fill="#ffffff"
                          />

                          {/* Right Round Glowing Eye */}
                          <circle
                            cx="471"
                            cy="338"
                            r="33"
                            fill="#38bdf8"
                            filter="url(#aiEyeGlow)"
                            opacity="0.9"
                          />
                          <circle cx="471" cy="338" r="27" fill="#e0f2fe" />
                          {/* Directional Pupil Highlight */}
                          <circle
                            cx={471 + lookX * 9}
                            cy={338 + lookY * 7}
                            r="12"
                            fill="#ffffff"
                          />

                          {/* Wide Glowing Smile */}
                          <path
                            d={
                              isExcited
                                ? "M 276 414 Q 366 462 464 404"
                                : "M 280 416 Q 366 450 460 406"
                            }
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="16"
                            strokeLinecap="round"
                            filter="url(#aiEyeGlow)"
                            opacity="0.9"
                          />
                          <path
                            d={
                              isExcited
                                ? "M 276 414 Q 366 462 464 404"
                                : "M 280 416 Q 366 450 460 406"
                            }
                            fill="none"
                            stroke="#e0f2fe"
                            strokeWidth="9"
                            strokeLinecap="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mascot Mode Controller Pill */}
            <div
              className="mt-4 flex items-center gap-2 p-1.5 rounded-full border shadow-md backdrop-blur-xl"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-glass)",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setMascotMode("hi");
                  setSpeech("👋 Hello! Welcome to Hajolong Solutions. Let's create something exceptional.");
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  mascotMode === "hi"
                    ? "btn-neon-active"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]"
                }`}
              >
                👋 Say Hi
              </button>
              <button
                type="button"
                onClick={() => {
                  setMascotMode("ai");
                  setSpeech("🤖 AI Bot Mode active! We build custom intelligent bots that automate your customer service & tasks.");
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  mascotMode === "ai"
                    ? "btn-neon-active"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]"
                }`}
              >
                🤖 Build AI Bot
              </button>
            </div>
            <span className="text-[11px] text-[var(--text-muted)] mt-2">
              Move your cursor over AXIOM or click to interact
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}
