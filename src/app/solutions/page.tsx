"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import AiBotsShowcase from "@/components/AiBotsShowcase";

export default function SolutionsPage() {
  const solutions = [
    {
      id: "web",
      num: "01",
      title: "Custom Web & Platform Development",
      description:
        "We build fast, responsive, and beautiful websites and web applications tailored precisely to your business needs—no bloated off-the-shelf templates.",
      highlights: [
        "Modern Next.js & React Frameworks",
        "E-Commerce & Client Portals",
        "High-Speed Mobile Optimization",
        "Search Engine & SEO Friendly",
      ],
      badge: "Full-Stack Web",
      image: "/images/cloud_dashboard_ui.jpg",
    },
    {
      id: "ai",
      num: "02",
      title: "Custom AI Bots & Workflow Automation",
      description:
        "Deploy intelligent AI bots that handle customer inquiries 24/7, qualify incoming leads, and automate repetitive tasks across your team.",
      highlights: [
        "24/7 Customer Support Bots",
        "Trained on Your Business Documents",
        "Multi-Platform (Web, WhatsApp, Slack)",
        "Automated Lead Ingestion",
      ],
      badge: "AI Bots & Agents",
      featured: true,
      image: "/images/ai_agent_interface.jpg",
    },
    {
      id: "redesign",
      num: "03",
      title: "System Redesign & Modernization",
      description:
        "Is your software slow, confusing, or outdated? We completely restructure clunky legacy tools into intuitive, modern systems your team will love.",
      highlights: [
        "Intuitive UI/UX Overhauls",
        "Faster Page & Data Load Times",
        "Mobile-Responsive Interfaces",
        "Zero Loss of Existing Data",
      ],
      badge: "Restructuring",
      image: "/images/system_architecture_core.jpg",
    },
    {
      id: "integration",
      num: "04",
      title: "Software & API System Integration",
      description:
        "Eliminate manual data entry by connecting your CRM, ERP, Stripe payments, inventory, and internal databases into a single synchronized hub.",
      highlights: [
        "Seamless Third-Party API Connectors",
        "Payment & Stripe Integration",
        "ERP & CRM Synchronization",
        "Automated Error Notifications",
      ],
      badge: "Integration",
      image: "/images/tech_consulting_command.jpg",
    },
    {
      id: "data",
      num: "05",
      title: "Data Control & Analytics Dashboards",
      description:
        "Take complete command of your company data with clean database structuring, automated reports, and clear visual business intelligence dashboards.",
      highlights: [
        "Real-Time Executive Dashboards",
        "Automated Daily & Weekly Reports",
        "Safe Data Migration & Backups",
        "Clean Database Architecture",
      ],
      badge: "Data Management",
      image: "/images/cloud_dashboard_ui.jpg",
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
              borderColor: "var(--neon-cyan)",
              boxShadow: "0 0 16px var(--neon-spotlight)",
              color: "var(--accent-highlight)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-dot"
              style={{ backgroundColor: "var(--neon-cyan)" }}
            />
            <span>ENGINEERING EXCELLENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)]">
            Technology Solutions Designed for{" "}
            <span className="neon-text-sweep">Real Business Impact.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed">
            From custom web platforms to 24/7 AI bots and legacy system overhauls,
            we engineer robust digital infrastructure that eliminates operational
            bottlenecks.
          </p>
        </div>

        {/* 5 Solutions Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {solutions.map((sol) => (
            <TiltCard
              key={sol.id}
              maxTilt={6}
              highlight={sol.featured}
              className="p-8 border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-[var(--neon-cyan)]">
                    {sol.num}
                  </span>
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      backgroundColor: "var(--bg-surface-elevated)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {sol.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                  {sol.title}
                </h3>

                {sol.image && (
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 border shadow-inner" style={{ borderColor: "var(--border-glass)" }}>
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                )}

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {sol.description}
                </p>

                <ul className="space-y-2 mb-8 border-t pt-4" style={{ borderColor: "var(--border-subtle)" }}>
                  {sol.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs text-[var(--text-secondary)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--neon-cyan)" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--neon-cyan)] hover:underline"
                >
                  <span>Inquire About This Solution &rarr;</span>
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Dedicated Interactive AI Bots Showcase Section */}
        <div className="rounded-3xl border overflow-hidden p-2 sm:p-4 my-12" style={{ borderColor: "var(--border-glass)" }}>
          <AiBotsShowcase />
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
              style={{ background: "var(--neon-cyan)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--neon-blue)" }}
            />

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-3 text-[var(--text-primary)] relative z-10">
              Not sure which solution matches your current stage?
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-8 max-w-xl mx-auto font-normal relative z-10">
              We will review your company’s existing tech stack and provide an honest,
              plain-English roadmap within 2 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <Link href="/contact" className="px-8 py-3.5 rounded-xl font-bold text-sm btn-primary shadow-lg">
                <span>Schedule Free Technical Consultation &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
