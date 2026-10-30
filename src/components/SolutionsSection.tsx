"use client";

import React, { useState } from "react";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";

export default function SolutionsSection() {
  const [filter, setFilter] = useState<"all" | "web" | "ai" | "systems">("all");

  const solutions = [
    {
      id: "web",
      num: "01",
      category: "web",
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
      link: "/contact",
      linkText: "Build Your Website &rarr;",
      image: "/images/cloud_dashboard_ui.jpg",
    },
    {
      id: "ai",
      num: "02",
      category: "ai",
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
      link: "/solutions#ai-bots",
      linkText: "See AI Bot Capabilities &rarr;",
      featured: true,
      image: "/images/ai_agent_interface.jpg",
    },
    {
      id: "redesign",
      num: "03",
      category: "systems",
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
      link: "/contact",
      linkText: "Modernize Your System &rarr;",
      image: "/images/system_architecture_core.jpg",
    },
    {
      id: "integration",
      num: "04",
      category: "systems",
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
      link: "/contact",
      linkText: "Connect Your Systems &rarr;",
      image: "/images/tech_consulting_command.jpg",
    },
    {
      id: "data",
      num: "05",
      category: "systems",
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
      link: "/contact",
      linkText: "Organize Your Data &rarr;",
      image: "/images/cloud_dashboard_ui.jpg",
    },
    {
      id: "consulting",
      num: "06",
      category: "web",
      title: "Strategic Consulting & Growth Planning",
      description:
        "Technical roadmapping and digital marketing strategy to help you attract the right audience, scale your digital footprint, and outpace competitors.",
      highlights: [
        "Digital Product Strategy",
        "Audience Growth Architecture",
        "Technology Stack Audits",
        "Long-Term Scaling Guidance",
      ],
      badge: "Consulting",
      link: "/services",
      linkText: "Explore Consulting &rarr;",
      image: "/images/tech_consulting_command.jpg",
    },
  ];

  const filteredSolutions =
    filter === "all"
      ? solutions
      : solutions.filter((s) => s.category === filter);

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-mesh">
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
            <span>WHAT WE DELIVER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)]">
            Complete IT Solutions.{" "}
            <span className="text-gradient neon-text-sweep">Engineered to Perform.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Whether you need a custom website, an intelligent AI bot, or a full
            redesign of an outdated platform, we engineer reliable digital tools
            that anyone can use and understand.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "all"
                  ? "btn-neon-active shadow-[0_0_12px_var(--neon-spotlight)]"
                  : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--neon-cyan)]/40 hover:shadow-[0_0_8px_var(--neon-spotlight)]"
              }`}
            >
              All Solutions (6)
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "web"
                  ? "btn-neon-active shadow-[0_0_12px_var(--neon-spotlight)]"
                  : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--neon-cyan)]/40 hover:shadow-[0_0_8px_var(--neon-spotlight)]"
              }`}
            >
              Web & Growth
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "ai"
                  ? "btn-neon-active shadow-[0_0_12px_var(--neon-spotlight)]"
                  : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--neon-cyan)]/40 hover:shadow-[0_0_8px_var(--neon-spotlight)]"
              }`}
            >
              AI Bots & Agents
            </button>
            <button
              onClick={() => setFilter("systems")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "systems"
                  ? "btn-neon-active shadow-[0_0_12px_var(--neon-spotlight)]"
                  : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--neon-cyan)]/40 hover:shadow-[0_0_8px_var(--neon-spotlight)]"
              }`}
            >
              Systems & Redesign
            </button>
          </div>
        </div>

        {/* 6 Solutions Cards Grid with TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((sol) => (
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
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 border shadow-inner" style={{ borderColor: "var(--border-glass)" }}>
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

                {/* Highlights list */}
                <ul className="space-y-2 mb-8 border-t pt-4" style={{ borderColor: "var(--border-subtle)" }}>
                  {sol.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-[var(--text-secondary)] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--neon-cyan)" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <a
                  href={sol.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[var(--neon-rose)] hover:underline"
                >
                  <span dangerouslySetInnerHTML={{ __html: sol.linkText }} />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
