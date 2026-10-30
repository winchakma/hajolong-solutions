"use client";

import React from "react";
import TiltCard from "@/components/TiltCard";

export default function OurStory() {
  const principles = [
    {
      num: "01",
      title: "Plain English, No Tech Jargon",
      desc: "We explain everything clearly. You should always know exactly what we are building, why we are building it, and how it benefits your bottom line.",
    },
    {
      num: "02",
      title: "Direct Access to Senior Builders",
      desc: "You never get shuffled between junior account managers. You collaborate directly with principal architects and developers who write your code.",
    },
    {
      num: "03",
      title: "You Own 100% of Your IP",
      desc: "All source code, design assets, and database architecture belong exclusively to your company from day one. Zero proprietary lock-in.",
    },
    {
      num: "04",
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
              <div className="flex items-start gap-3.5">
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 rounded border shrink-0 mt-0.5"
                  style={{
                    backgroundColor: "var(--bg-surface-elevated)",
                    borderColor: "var(--neon-rose)",
                    color: "var(--neon-rose)",
                  }}
                >
                  {item.num}
                </span>
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
