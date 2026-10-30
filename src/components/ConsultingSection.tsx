"use client";

import React from "react";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";

export default function ConsultingSection() {
  const pillars = [
    {
      badgeClass: "icon-mint",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M15 7h6v6" />
        </svg>
      ),
      title: "Audience & Customer Growth Strategy",
      desc: "We help you identify your highest-value audience, optimize your digital acquisition funnels, and build web platforms that convert visitors into paying clients.",
      accent: "var(--neon-cyan)",
    },
    {
      badgeClass: "icon-peach",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 12 12 17 22 12" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
      ),
      title: "Technology Stack Evaluation & Auditing",
      desc: "Stop paying for overpriced, bloated SaaS tools. We review your current infrastructure to eliminate duplicate software costs and dramatically accelerate system speed.",
      accent: "var(--neon-rose)",
    },
    {
      badgeClass: "icon-blue",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M9 6h6.5a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 0 0 5H15" />
        </svg>
      ),
      title: "Phased Digital Roadmapping",
      desc: "Avoid spending months without seeing results. We structure your software development into 2-week milestones so you see tangible progress from day one.",
      accent: "var(--neon-cyan)",
    },
    {
      badgeClass: "icon-lilac",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Dedicated Long-Term Advisory",
      desc: "Consider us your virtual Chief Technology Officer. We provide ongoing engineering guidance, code reviews, and scaling support as your business expands.",
      accent: "var(--neon-rose)",
    },
  ];

  return (
    <div id="consulting" className="relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
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
          <span>BUSINESS & STRATEGY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 text-[var(--text-primary)]">
          Strategic Consulting.{" "}
          <span className="text-gradient neon-text-sweep">Beyond Just Writing Code.</span>
        </h2>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
          Great software is useless if nobody uses it. We combine top-tier software
          engineering with practical marketing and business consulting to make sure
          your technology drives real company revenue.
        </p>
      </div>

      {/* Featured Strategy & Command Center Visual */}
      <div
        className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden mb-10 sm:mb-12 border group transition-all"
        style={{
          borderColor: "var(--border-glass)",
        }}
      >
        <Image
          src="/images/tech_consulting_command.jpg"
          alt="Hajolong Strategic Growth and Technology Command Center"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-[var(--neon-cyan)] uppercase tracking-wider block mb-1">
              ENGINEERING & GROWTH ADVISORY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Data-Driven Digital Strategy & Audience Funnels
            </h3>
          </div>
          <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 text-white backdrop-blur-md shrink-0 shadow-lg">
            Bi-Weekly Milestone Governance
          </span>
        </div>
      </div>

      {/* 4 Pillars Grid with 3D TiltCards and Vivid Neon Accents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {pillars.map((item, idx) => (
          <TiltCard
            key={idx}
            maxTilt={6}
            className="p-8 border flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Ambient Glow Line */}
            <div
              className="pointer-events-none absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
              style={{
                background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
              }}
            />

            <div>
              <div className={`icon-badge ${item.badgeClass} mb-5 group-hover:scale-105`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                {item.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t flex items-center justify-between" style={{ borderColor: "var(--border-subtle)" }}>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Pillar 0{idx + 1}
              </span>
              <span
                className="text-xs font-bold transition-transform group-hover:translate-x-1"
                style={{ color: item.accent }}
              >
                Strategic Focus &rarr;
              </span>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
