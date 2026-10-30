"use client";

import React from "react";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";

export default function ConsultingSection() {
  const pillars = [
    {
      icon: "📈",
      title: "Audience & Customer Growth Strategy",
      desc: "We help you identify your highest-value audience, optimize your digital acquisition funnels, and build web platforms that convert visitors into paying clients.",
      accent: "var(--neon-cyan)",
    },
    {
      icon: "🏗️",
      title: "Technology Stack Evaluation & Auditing",
      desc: "Stop paying for overpriced, bloated SaaS tools. We review your current infrastructure to eliminate duplicate software costs and dramatically accelerate system speed.",
      accent: "var(--neon-rose)",
    },
    {
      icon: "🗺️",
      title: "Phased Digital Roadmapping",
      desc: "Avoid spending months without seeing results. We structure your software development into 2-week milestones so you see tangible progress from day one.",
      accent: "var(--neon-cyan)",
    },
    {
      icon: "🤝",
      title: "Dedicated Long-Term Advisory",
      desc: "Consider us your virtual Chief Technology Officer. We provide ongoing engineering guidance, code reviews, and scaling support as your business expands.",
      accent: "var(--neon-rose)",
    },
  ];

  return (
    <section id="consulting" className="py-24 relative overflow-hidden bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-lg backdrop-blur-xl transition-all hover:scale-105"
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)]">
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
          className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden mb-16 border shadow-2xl group transition-all"
          style={{
            borderColor: "var(--neon-cyan)",
            boxShadow: "0 0 35px -6px var(--neon-spotlight), 0 20px 40px rgba(0,0,0,0.5)",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 border shadow-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: "var(--bg-surface-elevated)",
                    borderColor: item.accent,
                    boxShadow: `0 0 20px -3px ${item.accent}`,
                  }}
                >
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

        {/* Luminous Neon Action Banner */}
        <div
          className="rounded-3xl p-8 sm:p-12 border text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden transition-all hover:scale-[1.01]"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--neon-rose)",
            boxShadow: "0 0 35px -8px var(--neon-rose), 0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Ambient blurred orbs */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--neon-rose)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 w-64 h-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--neon-blue)" }}
          />

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-4 relative z-10">
            Need a Clear Plan Before Writing Any Code?
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 font-normal relative z-10">
            Schedule a 30-minute discovery call with our principal directors. We will
            audit your current systems and outline a step-by-step transformation roadmap.
          </p>
          <div className="relative z-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm btn-primary shadow-lg"
            >
              <span>Book an Executive Discovery Call &rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
