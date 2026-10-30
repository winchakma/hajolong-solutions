"use client";

import React, { useState } from "react";
import TiltCard from "@/components/TiltCard";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Website / Web App",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-mesh">
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
            <span>DIRECT ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)]">
            Let’s Build Something{" "}
            <span className="text-gradient neon-text-sweep">Exceptional Together.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Ready to build a custom website, deploy an AI bot, or modernize your
            company’s software? Send us a message and our technical directors will
            respond within 2 hours.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                Speak Directly with Senior Architects.
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-normal leading-relaxed mb-6">
                No pushy sales reps. When you reach out, you speak directly with
                senior engineers who understand system design, budget planning, and
                realistic execution timelines.
              </p>

              {/* 3 Contact Info Cards with 3D TiltCard */}
              <div className="space-y-4">
                <TiltCard maxTilt={5} className="p-4 border">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg shrink-0 border"
                      style={{
                        backgroundColor: "var(--bg-surface-elevated)",
                        borderColor: "var(--neon-rose)",
                        color: "var(--neon-rose)",
                        boxShadow: "0 0 14px -3px var(--neon-rose)",
                      }}
                    >
                      ✉️
                    </div>
                    <div>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono uppercase tracking-wider">
                        Direct Email
                      </div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">
                        contact@hajolong.com
                      </div>
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxTilt={5} className="p-4 border">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg shrink-0 border"
                      style={{
                        backgroundColor: "var(--bg-surface-elevated)",
                        borderColor: "var(--neon-cyan)",
                        color: "var(--neon-cyan)",
                        boxShadow: "0 0 14px -3px var(--neon-cyan)",
                      }}
                    >
                      ⚡
                    </div>
                    <div>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono uppercase tracking-wider">
                        Response SLA
                      </div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">
                        Within 2 Business Hours
                      </div>
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxTilt={5} className="p-4 border">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg shrink-0 border"
                      style={{
                        backgroundColor: "var(--bg-surface-elevated)",
                        borderColor: "var(--neon-blue)",
                        color: "var(--neon-blue)",
                        boxShadow: "0 0 14px -3px var(--neon-blue)",
                      }}
                    >
                      🛡️
                    </div>
                    <div>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono uppercase tracking-wider">
                        Client Confidentiality
                      </div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">
                        Mutual NDA on Request
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>

            {/* Satisfaction Commitment with TiltCard */}
            <TiltCard
              maxTilt={5}
              className="p-6 border"
              highlight={true}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--neon-rose)] mb-2">
                <span>⭐</span>
                <span>SATISFACTION COMMITMENT</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                We deliver weekly working demos and milestone sign-offs. You only
                approve work when it matches your exact business expectations.
              </p>
            </TiltCard>
          </div>

          {/* Right Form with Vivid Luminous Neon Glow */}
          <div className="lg:col-span-7 relative">
            {/* Ambient High-Luminance Neon Light Blooms */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-45 blur-3xl animate-pulse"
              style={{ background: "radial-gradient(circle, var(--neon-rose) 0%, transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-35 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)" }}
            />

            <div
              className="p-8 sm:p-10 rounded-3xl relative overflow-hidden backdrop-blur-2xl transition-all border"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-glass)",
              }}
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4 relative z-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto border shadow-lg"
                    style={{
                      backgroundColor: "var(--bg-surface-elevated)",
                      borderColor: "var(--border-accent)",
                      color: "var(--neon-rose)",
                    }}
                  >
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--text-primary)]">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                    Thank you, {formData.name || "Client"}. A principal technical
                    architect has been assigned to review your inquiry and will email
                    you at {formData.email || "your address"} within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold btn-secondary"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-[13px] font-sans font-semibold mb-2"
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Michael Vance"
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          backgroundColor: "var(--bg-surface-elevated)",
                          border: "1px solid var(--border-glass)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-accent)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-glass)";
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[13px] font-sans font-semibold mb-2"
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          backgroundColor: "var(--bg-surface-elevated)",
                          border: "1px solid var(--border-glass)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-accent)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-glass)";
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-[13px] font-sans font-semibold mb-2"
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your Company / Brand"
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          backgroundColor: "var(--bg-surface-elevated)",
                          border: "1px solid var(--border-glass)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-accent)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-glass)";
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[13px] font-sans font-semibold mb-2"
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        Primary Need *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          backgroundColor: "var(--bg-surface-elevated)",
                          border: "1px solid var(--border-glass)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-accent)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-glass)";
                        }}
                      >
                        <option>Custom Website / Web App</option>
                        <option>AI Bot & Intelligent Automation</option>
                        <option>System Redesign & Modernization</option>
                        <option>Software & API Integration</option>
                        <option>Data Control & Analytics</option>
                        <option>Growth & Tech Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[13px] font-sans font-semibold mb-2"
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      Project Details / Goals
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us what you want to build or what problem your business is facing..."
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        backgroundColor: "var(--bg-surface-elevated)",
                        border: "1px solid var(--border-glass)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-accent)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-glass)";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm btn-primary flex items-center justify-center gap-2 tracking-wide transition-all duration-300"
                  >
                    <span>Submit Consultation Request &rarr;</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
