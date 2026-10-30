"use client";

import React from "react";
import TiltCard from "@/components/TiltCard";

export default function OurStory() {
  const principles = [
    {
      num: "01",
      badgeClass: "icon-peach",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      ),
      title: "Plain English, No Tech Jargon",
      desc: "We explain everything clearly. You should always know exactly what we are building, why we are building it, and how it benefits your bottom line.",
    },
    {
      num: "02",
      badgeClass: "icon-blue",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Direct Access to Senior Builders",
      desc: "You never get shuffled between junior account managers. You collaborate directly with principal architects and developers who write your code.",
    },
    {
      num: "03",
      badgeClass: "icon-mint",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "You Own 100% of Your IP",
      desc: "All source code, design assets, and database architecture belong exclusively to your company from day one. Zero proprietary lock-in.",
    },
    {
      num: "04",
      badgeClass: "icon-lilac",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      ),
      title: "Predictable Timelines & Milestones",
      desc: "We break projects into clear, guaranteed bi-weekly deliverables so you see working prototypes continuously rather than waiting months for a big reveal.",
    },
  ];

  return (
    <div id="story" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Story narrative */}
        <div className="lg:col-span-6">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-sm backdrop-blur-xl transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--bg-surface-elevated)",
              borderColor: "var(--neon-rose)",
              boxShadow: "0 0 16px var(--neon-spotlight)",
              color: "var(--accent-highlight)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-dot"
              style={{ backgroundColor: "var(--neon-rose)" }}
            />
            <span>THE HAJOLONG DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5 text-[var(--text-primary)]">
            Built by Builders.{" "}
            <span className="text-gradient neon-text-sweep">Engineered for Scale.</span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
            <p>
              Too many businesses are stuck between sluggish consulting agencies that charge six figures before writing code, and fragmented freelancers who disappear when production bugs hit.
            </p>
            <p>
              <strong className="text-[var(--text-primary)] font-semibold">Hajolong Solutions</strong> was founded to deliver a better model: you work directly with principal engineers who architect, build, and deploy custom web platforms, autonomous AI bots, and modern cloud systems delivered in weeks, not years.
            </p>
          </div>

          {/* 3 Interactive Metric Badges */}
          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4 pt-5 border-t" style={{ borderColor: "var(--border-subtle)" }}>
            <TiltCard maxTilt={5} className="p-3 sm:p-4 border text-center">
              <div className="text-xl sm:text-2xl font-extrabold font-display text-[var(--neon-cyan)] mb-0.5">
                100%
              </div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-mono">Code Ownership</div>
            </TiltCard>
            <TiltCard maxTilt={5} className="p-3 sm:p-4 border text-center">
              <div className="text-xl sm:text-2xl font-extrabold font-display text-[var(--neon-rose)] mb-0.5">
                24/7
              </div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-mono">Support SLA</div>
            </TiltCard>
            <TiltCard maxTilt={5} className="p-3 sm:p-4 border text-center">
              <div className="text-xl sm:text-2xl font-extrabold font-display text-[var(--text-primary)] mb-0.5">
                0
              </div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-mono">Vendor Lock-In</div>
            </TiltCard>
          </div>
        </div>

        {/* Right Column: 4 Guarantees with 3D TiltCards */}
        <div className="lg:col-span-6 space-y-3">
          {principles.map((item, idx) => (
            <TiltCard
              key={idx}
              maxTilt={5}
              className="p-4 sm:p-4.5 border transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`icon-badge ${item.badgeClass} !w-10 !h-10 !rounded-xl shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </div>
  );
}
