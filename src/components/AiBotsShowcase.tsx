"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";

export default function AiBotsShowcase() {
  const [selectedPrompt, setSelectedPrompt] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [displayedAnswer, setDisplayedAnswer] = useState<string>(
    "We build custom full-stack websites, mobile apps, intelligent AI customer service bots, and complete system redesigns. We handle everything from design to full deployment."
  );

  const demoScenarios = [
    {
      question: "What can Hajolong build for our business?",
      answer:
        "We engineer custom web platforms, 24/7 customer support AI bots, database management systems, and complete UI/UX overhauls of slow legacy software.",
    },
    {
      question: "How does a custom AI bot help our company save money?",
      answer:
        "Your AI bot instantly resolves up to 80% of routine customer questions 24/7, captures qualified sales leads while you sleep, and connects directly to your CRM.",
    },
    {
      question: "Can you redesign our old software without losing our data?",
      answer:
        "Yes! We specialize in safe system restructuring. We migrate all your existing records, rebuild the interface to modern speed, and guarantee zero downtime.",
    },
    {
      question: "How fast is the turnaround time?",
      answer:
        "Most enterprise websites, AI bot deployments, and platform redesigns are completed within 4 to 8 weeks with dedicated weekly milestones.",
    },
  ];

  const handleSelectPrompt = (index: number) => {
    setSelectedPrompt(index);
    setIsTyping(true);
    setDisplayedAnswer("");

    const fullText = demoScenarios[index].answer;
    let currentIdx = 0;

    const timer = setInterval(() => {
      currentIdx++;
      setDisplayedAnswer(fullText.slice(0, currentIdx));
      if (currentIdx >= fullText.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 18);
  };

  return (
    <section id="ai-bots" className="py-8 sm:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Section Header with Multi-Layer Specular Neon Glow */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 relative">
          {/* Ambient Neon Spotlight Glow Behind Header */}
          <div
            className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 w-[90%] sm:w-[500px] h-44 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(ellipse, var(--neon-cyan) 0%, transparent 70%)" }}
          />

          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border shadow-lg backdrop-blur-xl transition-all hover:scale-105 relative z-10"
            style={{
              backgroundColor: "var(--bg-surface-elevated)",
              borderColor: "var(--neon-cyan)",
              boxShadow: "0 0 18px var(--neon-spotlight)",
              color: "var(--accent-highlight)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-dot"
              style={{ backgroundColor: "var(--neon-cyan)" }}
            />
            <span>INTELLIGENT AUTOMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)] relative z-10">
            Build Custom AI Bots.{" "}
            <span className="text-gradient neon-text-sweep">Automate Your Operations.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed relative z-10">
            Stop losing leads to slow response times. We build and integrate custom
            AI bots trained specifically on your company’s products, services, and
            workflows.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <TiltCard
              maxTilt={5}
              className="p-6 border transition-all duration-300"
            >
              <div className="text-2xl mb-3">💬</div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                24/7 Smart Customer Support Bots
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                Trained on your company manuals, FAQs, and product catalogs. It
                answers technical inquiries instantly and escalates complex issues to
                your staff with full context.
              </p>
            </TiltCard>

            <TiltCard
              maxTilt={5}
              className="p-6 border transition-all duration-300"
            >
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                Lead Capture & Automated Scheduling
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                Interviews incoming website visitors, qualifies their budget and
                needs, and automatically books consultation slots straight into
                your calendar.
              </p>
            </TiltCard>

            <TiltCard
              maxTilt={5}
              className="p-6 border transition-all duration-300"
            >
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                Multi-Channel Deployment
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                One centralized intelligence engine deployed across your Website,
                WhatsApp Business, Slack workspace, or internal CRM dashboard.
              </p>
            </TiltCard>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm btn-primary"
              >
                <span>Request Custom AI Bot Consultation &rarr;</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Interactive AI Bot Simulator */}
          <div className="lg:col-span-6">
            <div
              className="rounded-3xl border p-6 sm:p-8 backdrop-blur-2xl relative overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-glass)",
              }}
            >
              {/* 3D Neural Agent Interface Visual */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden mb-6 border" style={{ borderColor: "var(--border-glass)" }}>
                <Image
                  src="/images/ai_agent_interface.jpg"
                  alt="Hajolong Neural AI Bot Interface"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white">
                    ⚡ AXIOM Neural Runtime v4.2
                  </span>
                  <span className="text-[10px] font-mono text-[var(--neon-cyan)] bg-black/70 px-2 py-0.5 rounded backdrop-blur-md border border-white/10">
                    Live Telemetry
                  </span>
                </div>
              </div>

              {/* Bot Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-lg">
                    🤖
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      Hajolong Assistant Bot
                    </h4>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live AI Agent • Online
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-1 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  Simulated Demo
                </span>
              </div>

              {/* Chat Messages Simulation */}
              <div className="py-6 space-y-4 min-h-[220px]">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                    {demoScenarios[selectedPrompt].question}
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-start items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600/30 text-xs flex items-center justify-center shrink-0 mt-0.5">
                    🤖
                  </div>
                  <div
                    className="text-xs sm:text-sm px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%] border shadow-sm"
                    style={{
                      backgroundColor: "var(--bg-surface-elevated)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <p className="leading-relaxed">{displayedAnswer}</p>
                    {isTyping && (
                      <span className="inline-block w-1.5 h-3 bg-blue-400 ml-1 animate-pulse" />
                    )}
                  </div>
                </div>
              </div>

              {/* Interactive Prompt Selector */}
              <div className="pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2.5">
                  Click a test question to test the bot:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {demoScenarios.map((demo, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectPrompt(idx)}
                      disabled={isTyping}
                      className={`text-left text-xs p-2.5 rounded-xl border transition-all ${
                        selectedPrompt === idx
                          ? "btn-neon-active shadow-[0_0_12px_var(--neon-spotlight)]"
                          : "bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--neon-cyan)]/40 hover:shadow-[0_0_8px_var(--neon-spotlight)]"
                      }`}
                    >
                      {demo.question}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
