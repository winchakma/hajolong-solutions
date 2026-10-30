"use client";

import React, { useState } from "react";

export default function ScopeEstimator() {
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "web",
    "ai",
  ]);

  const modules = [
    {
      id: "web",
      name: "Custom Web Platform / Web App",
      desc: "Fast, responsive web system built from scratch with Next.js & React.",
      icon: "🌐",
      weeks: 3,
    },
    {
      id: "ai",
      name: "Custom AI Bot & 24/7 Agent",
      desc: "Trained on your company docs to handle support and capture leads.",
      icon: "🤖",
      weeks: 2,
    },
    {
      id: "redesign",
      name: "System Redesign & Restructuring",
      desc: "Modernize slow legacy software into an intuitive, high-speed interface.",
      icon: "✨",
      weeks: 3,
    },
    {
      id: "integration",
      name: "Software & API Integrations",
      desc: "Sync your CRM, ERP, Stripe payments, and databases seamlessly.",
      icon: "🔗",
      weeks: 2,
    },
    {
      id: "data",
      name: "Data Control & Analytics Board",
      desc: "Organize company records with real-time visual executive dashboards.",
      icon: "📊",
      weeks: 2,
    },
    {
      id: "consulting",
      name: "Growth Consulting & Strategy",
      desc: "Digital marketing roadmap, audience acquisition, and scaling advisory.",
      icon: "📈",
      weeks: 1,
    },
  ];

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((m) => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  // Calculate estimated turnaround weeks
  const totalWeeks = Math.max(
    3,
    Math.min(
      8,
      selectedModules.reduce((acc, curr) => {
        const item = modules.find((m) => m.id === curr);
        return acc + (item ? item.weeks : 1);
      }, 0) - (selectedModules.length > 2 ? 2 : 0)
    )
  );

  return (
    <section id="scope" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-accent)",
              color: "var(--accent-highlight)",
            }}
          >
            <span>TRANSPARENT PLANNING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Calculate Your Project Scope.{" "}
            <span className="text-gradient">Zero Guesswork.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Select the digital solutions your business needs below to see instant
            projections on estimated delivery milestones and dedicated team
            composition.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Module Selector (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Select Required Solutions:
            </div>

            {modules.map((m) => {
              const active = selectedModules.includes(m.id);
              return (
                <div
                  key={m.id}
                  onClick={() => toggleModule(m.id)}
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center justify-between gap-4 ${
                    active
                      ? "border-blue-500 shadow-md ring-1 ring-blue-500/30"
                      : "border-[var(--border-subtle)] hover:border-blue-500/40"
                  }`}
                  style={{
                    backgroundColor: active
                      ? "var(--bg-surface-elevated)"
                      : "var(--bg-surface-glass)",
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl shrink-0">{m.icon}</span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                        {m.name}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] font-normal mt-0.5">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                      active
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "border-[var(--border-subtle)]"
                    }`}
                  >
                    {active && (
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Results Summary Box (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div
              className="p-8 rounded-3xl border shadow-2xl backdrop-blur-2xl"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-accent)",
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="text-xs font-mono font-bold text-[var(--accent-highlight)] uppercase tracking-wider">
                  Scope Summary
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-semibold">
                  {selectedModules.length} Modules Selected
                </span>
              </div>

              {/* Estimated Timeline */}
              <div className="py-6 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                  Estimated Delivery Timeline
                </span>
                <div className="text-4xl font-extrabold text-[var(--text-primary)] font-display mt-1">
                  {totalWeeks}–{totalWeeks + 2}{" "}
                  <span className="text-lg font-normal text-[var(--text-secondary)]">
                    Weeks
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Structured into bi-weekly production sprints with weekly review calls.
                </p>
              </div>

              {/* Dedicated Engineering Pod */}
              <div className="py-6 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                  Assigned Engineering Pod
                </span>
                <ul className="mt-3 space-y-2 text-xs text-[var(--text-primary)]">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> 1 Principal Technical Director
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> 2 Senior Full-Stack Engineers
                  </li>
                  {selectedModules.includes("ai") && (
                    <li className="flex items-center gap-2 text-[var(--accent-highlight)]">
                      <span className="text-blue-500">✓</span> 1 Dedicated AI Bot Specialist
                    </li>
                  )}
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> UI/UX Designer & QA Specialist
                  </li>
                </ul>
              </div>

              {/* CTA Action */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className="w-full py-4 rounded-xl font-bold text-sm btn-primary flex items-center justify-center gap-2 tracking-wide shadow-lg"
                >
                  <span>Lock In This Scope & Schedule Call &rarr;</span>
                </a>
                <p className="text-center text-[11px] text-[var(--text-muted)] mt-3">
                  No commitment required • Free technical review
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
