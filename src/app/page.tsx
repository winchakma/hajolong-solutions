"use client";

import React from "react";
import Hero from "@/components/Hero";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";

export default function HomePage() {
  const pillars = [
    {
      icon: "🌐",
      title: "Custom Web & Platform Development",
      desc: "Fast, responsive web applications, client portals, and e-commerce built from scratch with modern technologies.",
      link: "/solutions",
    },
    {
      icon: "🤖",
      title: "Custom AI Bots & Workflow Agents",
      desc: "24/7 intelligent customer support bots, automated lead qualification, and task automation trained on your company data.",
      link: "/solutions",
      highlight: true,
    },
    {
      icon: "✨",
      title: "System Redesign & Modernization",
      desc: "Transforming slow, outdated, clunky legacy software into clean, intuitive, modern interfaces your team enjoys using.",
      link: "/solutions",
    },
    {
      icon: "📈",
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
      <section className="py-20 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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
                  <div className="text-3xl mb-4">{item.icon}</div>
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
      <section className="py-20 bg-mesh border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TiltCard maxTilt={5} className="p-8 border">
              <div className="text-3xl mb-4">💬</div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                Plain English Collaboration
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                No confusing developer jargon. You always understand exactly what we
                are building, how it works, and how it impacts your business.
              </p>
            </TiltCard>

            <TiltCard maxTilt={5} className="p-8 border">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                100% Intellectual Property
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                You own all source code, databases, and assets. We build with clean,
                modern open standards with zero proprietary lock-in.
              </p>
            </TiltCard>

            <TiltCard maxTilt={5} className="p-8 border">
              <div className="text-3xl mb-4">⚡</div>
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
      <section className="py-20 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="p-10 sm:p-14 rounded-3xl border text-center shadow-2xl relative overflow-hidden transition-all hover:scale-[1.01]"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--neon-cyan)",
              boxShadow: "0 0 30px var(--neon-spotlight), 0 20px 40px rgba(0,0,0,0.4)",
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
