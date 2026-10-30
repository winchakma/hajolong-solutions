"use client";

import React from "react";
import Hero from "@/components/Hero";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";

export default function HomePage() {
  const pillars = [
    {
      badgeClass: "icon-blue",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2.5" />
          <path d="M8 21h8M12 17v4M6 8h4m-4 3h8" />
        </svg>
      ),
      title: "Custom Web & Platform Development",
      desc: "Fast, responsive web applications, client portals, and e-commerce built from scratch with modern technologies.",
      link: "/solutions",
    },
    {
      badgeClass: "icon-lilac",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect x="4" y="6" width="16" height="12" rx="3" />
          <path d="M12 2v4M8 2h8M9 11v2m6-2v2M9 15h6" />
        </svg>
      ),
      title: "Custom AI Bots & Workflow Agents",
      desc: "24/7 intelligent customer support bots, automated lead qualification, and task automation trained on your company data.",
      link: "/solutions",
      highlight: true,
    },
    {
      badgeClass: "icon-peach",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      title: "System Redesign & Modernization",
      desc: "Transforming slow, outdated, clunky legacy software into clean, intuitive, modern interfaces your team enjoys using.",
      link: "/solutions",
    },
    {
      badgeClass: "icon-mint",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M15 7h6v6" />
        </svg>
      ),
      title: "Strategic Consulting & Growth Planning",
      desc: "Digital roadmapping, audience acquisition funnels, and technical advisory to ensure your software drives revenue.",
      link: "/services",
    },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Core Solutions Overview */}
      <section className="py-12 sm:py-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-[var(--accent-highlight)] uppercase tracking-wider">
                Our Core Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[var(--text-primary)]">
                Everything Your Business Needs to{" "}
                <span className="text-gradient neon-text-sweep">Thrive Digitally.</span>
              </h2>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-highlight)] hover:underline shrink-0"
            >
              <span>View All Solutions & AI Bots &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => (
              <TiltCard
                key={idx}
                maxTilt={7}
                highlight={item.highlight}
                className="p-6 border flex flex-col justify-between"
              >
                <div>
                  <div className={`icon-badge ${item.badgeClass} mb-5`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="text-xs font-bold text-[var(--accent-highlight)] hover:underline flex items-center gap-1.5 pt-4 border-t"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <span>Learn More &rarr;</span>
                </Link>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Why Hajolong Solutions */}
      <section className="py-12 sm:py-16 bg-mesh border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold text-[var(--accent-highlight)] uppercase tracking-wider">
              The Hajolong Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[var(--text-primary)]">
              Enterprise Discipline. <span className="text-gradient neon-text-sweep">Startup Velocity.</span>
            </h2>
            <p className="text-base text-[var(--text-secondary)] mt-4">
              We operate with the reliability of established technology leaders, but
              execute with modern agility so you see working results in weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <TiltCard maxTilt={5} className="p-8 border">
              <div className="icon-badge icon-peach mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                Plain English Collaboration
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                No confusing developer jargon. You always understand exactly what we
                are building, how it works, and how it impacts your business.
              </p>
            </TiltCard>

            <TiltCard maxTilt={5} className="p-8 border">
              <div className="icon-badge icon-mint mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                100% Intellectual Property
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                You own all source code, databases, and assets. We build with clean,
                modern open standards with zero proprietary lock-in.
              </p>
            </TiltCard>

            <TiltCard maxTilt={5} className="p-8 border">
              <div className="icon-badge icon-blue mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                Direct Senior Engineering
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                Work directly with experienced architects. No junior handoffs, no
                middlemen, just transparent and rapid execution.
              </p>
            </TiltCard>
          </div>

        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="py-12 sm:py-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="p-10 sm:p-14 rounded-3xl border text-center relative overflow-hidden transition-all hover:scale-[1.01]"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-glass)",
            }}
          >
            {/* Ambient neon decorative background light */}
            <div
              className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--neon-cyan)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--neon-blue)" }}
            />

            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-[var(--text-primary)] mb-4 relative z-10">
              Ready to Upgrade Your Company’s Software?
            </h3>
            <p className="text-base text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 font-normal relative z-10">
              Tell us about your project goals. We will provide a clear, plain-English
              technical assessment and realistic timeline within 2 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-sm btn-primary shadow-lg"
              >
                <span>Contact Our Team &rarr;</span>
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 rounded-xl font-bold text-sm btn-secondary"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
