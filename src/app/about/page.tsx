"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import OurStory from "@/components/OurStory";

export default function AboutPage() {
  const coreFounders = [
    {
      name: "Win Chakma",
      role: "Founder, CEO & Lead Technical Architect",
      focus: "Enterprise Systems Strategy & Executive Direction",
      bio: "Directs company vision, senior engineering governance, client enterprise architectures, and overall technical strategy across all customer deployments.",
      image: "/images/win chakma.jpeg",
      tag: "Founder & CEO",
      initials: "WC",
      accent: "var(--neon-rose)",
    },
    {
      name: "Simon Chakma",
      role: "Co-Founder & Head of Operations (COO)",
      focus: "Business Operations, Marketing Strategy & Consulting",
      bio: "Directs company operations, client consulting engagements, digital marketing acquisition funnels, and executive commercial accounts.",
      image: "/images/simon chakma.jpeg",
      tag: "Founding Partner",
      initials: "SC",
      accent: "var(--neon-cyan)",
    },
    {
      name: "Tushar Chakma",
      role: "Co-Founder & Strategic Investment Partner (CFO)",
      focus: "Strategic Investment, Banking & Capital Governance",
      bio: "Oversees capital governance, financial planning, commercial banking relationships, and corporate expansion investments.",
      image: "/images/tushar chakma.jpeg",
      tag: "Founding Partner",
      initials: "TC",
      accent: "var(--neon-blue)",
    },
    {
      name: "Bhoumik Chakma",
      role: "Technical Co-Founder, Deputy Technical Architect & Principal Full-Stack Engineer",
      focus: "Core Systems Architecture, Cloud Platforms & Technical Continuity",
      bio: "Co-leads senior engineering governance, client enterprise architectures, and overall technical execution. Directs mission-critical cloud backends, scalable platform delivery, and end-to-end full-stack software across customer deployments.",
      image: "/images/bhoumik chakma.JPG",
      tag: "Deputy Technical Lead",
      initials: "BC",
      accent: "var(--neon-cyan)",
    },
    {
      name: "Durnibar Chakma",
      role: "Technical Co-Founder, Systems Engineer & Head of 3D / UI/UX Systems",
      focus: "Systematic Engineering, 3D Computing & Interface Architecture",
      bio: "Bridges cutting-edge 3D interactive environments and modern UI/UX design systems with systematic full-stack software development and robust backend architectures.",
      image: "/images/durnibar_chakma_v2.png",
      tag: "Technical Co-Founder",
      initials: "DC",
      accent: "var(--neon-rose)",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
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
            <span>ABOUT HAJOLONG SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)]">
            Built by Engineers.{" "}
            <span className="text-gradient neon-text-sweep">Dedicated to Your Growth.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed">
            Hajolong Solutions was founded with a straightforward mission: eliminate
            sluggish legacy software and deliver modern, high-speed digital systems
            with institutional rigor.
          </p>
        </div>

        {/* Narrative & Guarantees */}
        <OurStory />

        {/* Core 5 Founding Members */}
        <div className="mt-24 pt-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-[var(--neon-rose)] uppercase tracking-wider">
              The Founders & Leadership (5 Core Members)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[var(--text-primary)]">
              Meet Our 5 Core Founding Leaders
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              You collaborate directly with the core founding partners engineering your
              systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFounders.map((founder, idx) => (
              <TiltCard
                key={idx}
                maxTilt={7}
                className="p-8 border flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Ambient Glow Line */}
                <div
                  className="pointer-events-none absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${founder.accent}, transparent)`,
                  }}
                />

                <div>
                  {/* Portrait Photo Container with 3D Holographic Border */}
                  <div
                    className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 border flex items-center justify-center shadow-inner group-hover:scale-[1.02] transition-transform duration-300"
                    style={{
                      backgroundColor: "var(--bg-surface-elevated)",
                      borderColor: founder.accent,
                      boxShadow: `0 0 25px -6px ${founder.accent}, inset 0 0 20px rgba(0,0,0,0.5)`,
                    }}
                  >
                    {founder.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          priority={idx < 2}
                        />
                      </div>
                    ) : (
                      <>
                        {/* Glowing ambient ring for placeholder */}
                        <div
                          className="absolute inset-0 opacity-25 pointer-events-none z-10"
                          style={{
                            background: `radial-gradient(circle at center, ${founder.accent} 0%, transparent 70%)`,
                          }}
                        />
                        <div className="text-center p-6 relative z-10">
                          <div
                            className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-extrabold font-mono border shadow-2xl transition-all duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: "var(--bg-surface)",
                              borderColor: founder.accent,
                              color: founder.accent,
                              boxShadow: `0 0 30px -4px ${founder.accent}`,
                            }}
                          >
                            {founder.initials}
                          </div>
                          <span className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] block mb-1">
                            LEADERSHIP TEAM
                          </span>
                          <span className="text-[11px] font-mono text-[var(--text-muted)] block">
                            Photo Placeholder Ready
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex items-center mb-3">
                    <span
                      className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border"
                      style={{
                        backgroundColor: "var(--bg-surface-elevated)",
                        borderColor: founder.accent,
                        color: founder.accent,
                        boxShadow: `0 0 12px -2px ${founder.accent}`,
                      }}
                    >
                      {founder.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                    {founder.name}
                  </h3>
                  <div
                    className="text-xs font-semibold mb-3"
                    style={{ color: founder.accent }}
                  >
                    {founder.role}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--text-muted)] mb-4">
                    Focus: {founder.focus}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {founder.bio}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t flex items-center justify-between" style={{ borderColor: "var(--border-subtle)" }}>
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">
                    Hajolong Solutions
                  </span>
                  <span
                    className="text-xs font-bold transition-transform group-hover:translate-x-1"
                    style={{ color: founder.accent }}
                  >
                    Executive Team &rarr;
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Luminous Consultation Banner */}
        <div className="mt-20 pt-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div
            className="p-10 sm:p-14 rounded-3xl border text-center shadow-2xl relative overflow-hidden transition-all hover:scale-[1.01]"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--neon-rose)",
              boxShadow: "0 0 35px -8px var(--neon-rose), 0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--neon-rose)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--neon-blue)" }}
            />

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-3 text-[var(--text-primary)] relative z-10">
              Ready to partner with an engineering firm that actually delivers?
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-8 max-w-xl mx-auto font-normal relative z-10">
              Let’s discuss your current systems and explore how we can modernize your
              company.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <Link href="/contact" className="px-8 py-3.5 rounded-xl font-bold text-sm btn-primary shadow-lg">
                <span>Schedule Discovery Call &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
