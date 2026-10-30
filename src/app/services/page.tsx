"use client";

import React from "react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import ConsultingSection from "@/components/ConsultingSection";

export default function ServicesPage() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Architecture Audit",
      desc: "We analyze your current operations, user feedback, and software bottlenecks to identify high-leverage opportunities.",
    },
    {
      step: "02",
      title: "Growth & Roadmap Planning",
      desc: "We formulate a clear step-by-step strategy for digital marketing, audience expansion, and software deployment.",
    },
    {
      step: "03",
      title: "Agile Production & Sprints",
      desc: "We execute in focused 2-week milestones with live demo previews, keeping you informed at every phase.",
    },
    {
      step: "04",
      title: "Launch, Scale & Dedicated Support",
      desc: "We deploy to production, train your team, and provide ongoing maintenance to guarantee 99.99% system availability.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-sm backdrop-blur-xl transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--bg-surface-elevated)",
              borderColor: "var(--neon-cyan)",
              boxShadow: "0 0 16px var(--neon-spotlight)",
              color: "var(--accent-highlight)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-dot"
              style={{ backgroundColor: "var(--neon-cyan)" }}
            />
            <span>STRATEGY & ADVISORY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 text-[var(--text-primary)]">
            Consulting, Marketing &{" "}
            <span className="neon-text-sweep">Business Growth.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed">
            We partner with business leaders to align technology with measurable
            commercial outcomes—growing audience reach, streamlining workflows, and
            increasing profitability.
          </p>
        </div>

        {/* Consulting Section Component */}
        <ConsultingSection />

        {/* 4-Step Process with 3D TiltCards */}
        <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[var(--neon-cyan)] uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[var(--text-primary)]">
              A Proven 4-Step Engagement Process
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Transparent, milestone-driven, and designed for predictable velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <TiltCard
                key={idx}
                maxTilt={6}
                className="p-8 border flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-extrabold text-[var(--neon-cyan)] font-mono mb-3">
                    {s.step}
                  </div>
                  <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">Phase 0{idx + 1}</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Luminous Consultation Banner */}
        <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div
            className="p-10 sm:p-14 rounded-3xl border text-center relative overflow-hidden transition-all hover:scale-[1.01]"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-glass)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--neon-cyan)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--neon-blue)" }}
            />

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-3 text-[var(--text-primary)] relative z-10">
              Ready to Accelerate Your Digital Growth?
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-8 max-w-xl mx-auto font-normal relative z-10">
              Book a 30-minute discovery call with our principal directors to evaluate your current architecture.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <Link href="/contact" className="px-8 py-3.5 rounded-xl font-bold text-sm btn-primary shadow-lg">
                <span>Book an Advisory Discovery Session &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
