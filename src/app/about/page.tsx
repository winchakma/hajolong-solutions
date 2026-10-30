"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import OurStory from "@/components/OurStory";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Win Chakma",
      role: "Founder & Lead Technical Architect",
      image: "/images/team_win_chakma.jpg",
      tag: "Founder",
      initials: "WC",
      accent: "var(--neon-rose)",
    },
    {
      name: "Simon Chakma",
      role: "Co-Founder & Head of Operations",
      image: "/images/team_simon_chakma.jpg",
      tag: "Co-Founder",
      initials: "SC",
      accent: "var(--neon-cyan)",
    },
    {
      name: "Tushar Chakma",
      role: "Co-Founder & Strategic Investment Partner",
      image: "/images/team_tushar_chakma.jpg",
      tag: "Co-Founder",
      initials: "TC",
      accent: "var(--neon-blue)",
    },
    {
      name: "Bhoumik Chakma",
      role: "Project Manager & Growth Marketing",
      image: "/images/team_bhoumik_chakma.jpg",
      tag: "Project & Marketing",
      initials: "BC",
      accent: "var(--neon-cyan)",
    },
    {
      name: "Durnibar Chakma",
      role: "Technical Co-Founder & Head of UI/UX Systems",
      image: "/images/team_durnibar_chakma.jpg",
      tag: "Technical Co-Founder",
      initials: "DC",
      accent: "var(--neon-rose)",
    },
    {
      name: "Jasmin Chakma",
      role: "Technical Lead & Backend Architecture",
      image: "",
      tag: "Technical Lead",
      initials: "JC",
      accent: "var(--neon-blue)",
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

        {/* Core Leadership & Engineering Team */}
        <div className="mt-24 pt-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-[var(--neon-rose)] uppercase tracking-wider">
              The Leadership & Engineering Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[var(--text-primary)]">
              Meet Our Leadership Team
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              You collaborate directly with principal leaders and engineers building your systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member, idx) => (
              <TiltCard
                key={idx}
                maxTilt={5}
                className="p-5 border flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Portrait Photo Container */}
                  <div
                    className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 border flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.01]"
                    style={{
                      backgroundColor: "var(--bg-surface-elevated)",
                      borderColor: "var(--border-glass)",
                    }}
                  >
                    {member.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          priority={idx < 2}
                        />
                      </div>
                    ) : (
                      <div className="text-center p-4 relative z-10">
                        <div
                          className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center text-xl font-bold font-mono border"
                          style={{
                            backgroundColor: "var(--bg-surface)",
                            borderColor: member.accent,
                            color: member.accent,
                          }}
                        >
                          {member.initials}
                        </div>
                        <span className="text-[11px] font-mono text-[var(--text-muted)] block">
                          Photo Coming Soon
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center mb-2">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                      style={{
                        backgroundColor: "var(--bg-surface-elevated)",
                        borderColor: "var(--border-subtle)",
                        color: member.accent,
                      }}
                    >
                      {member.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                    {member.name}
                  </h3>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: member.accent }}
                  >
                    {member.role}
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border-subtle)" }}>
                  <span className="text-[10px] text-[var(--text-muted)] font-mono">
                    Hajolong Solutions
                  </span>
                  <span
                    className="text-xs font-bold transition-transform group-hover:translate-x-1"
                    style={{ color: member.accent }}
                  >
                    Team &rarr;
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Luminous Consultation Banner */}
        <div className="mt-20 pt-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div
            className="p-10 sm:p-14 rounded-3xl border text-center relative overflow-hidden transition-all hover:scale-[1.01]"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-glass)",
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
