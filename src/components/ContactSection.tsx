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
    const subject = encodeURIComponent(
      `[Hajolong Solutions Inquiry] ${formData.service} — ${formData.company || formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nService Needed: ${formData.service}\n\nProject Details / Goals:\n${formData.message}`
    );
    window.location.href = `mailto:contact@hajolong.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div id="contact" className="relative">
      {/* 2-Column Contact Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl items-start">
        
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

              {/* Contact Info Cards with 3D TiltCard */}
              <div className="space-y-4">
                <a
                  href="mailto:contact@hajolong.com"
                  className="block group"
                >
                  <TiltCard maxTilt={5} className="p-4 border transition-all group-hover:border-[var(--accent-primary)]">
                    <div className="flex items-center gap-4">
                      <div className="icon-badge icon-peach">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                          <rect x="2" y="4" width="20" height="16" rx="2.5" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] text-[var(--text-muted)] font-mono uppercase tracking-wider">
                          Direct Email
                        </div>
                        <div className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-highlight)] transition-colors flex items-center justify-between">
                          <span>contact@hajolong.com</span>
                          <span className="text-xs">&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </a>

                <TiltCard maxTilt={5} className="p-4 border">
                  <div className="flex items-center gap-4">
                    <div className="icon-badge icon-blue">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
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
                    <div className="icon-badge icon-mint">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
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

                <a
                  href="https://www.linkedin.com/company/hajolong-solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <TiltCard maxTilt={5} className="p-4 border transition-all group-hover:border-[#0A66C2]">
                    <div className="flex items-center gap-4">
                      <div className="icon-badge icon-blue">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="4" fill="#0A66C2" />
                          <path
                            d="M7.4 19H4.3V9.5h3.1V19zM5.85 8.2c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8 1 0 1.8.8 1.8 1.8 0 1-.8 1.8-1.8 1.8zM19.7 19h-3.1v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H9.9V9.5h3v1.3h0c.4-.8 1.5-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.9V19z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] text-[var(--text-muted)] font-mono uppercase tracking-wider">
                          Corporate LinkedIn
                        </div>
                        <div className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#0A66C2] transition-colors flex items-center justify-between">
                          <span>linkedin.com/company/hajolong-solution</span>
                          <span className="text-xs">&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </a>
              </div>
            </div>

            {/* Satisfaction Commitment with TiltCard */}
            <TiltCard
              maxTilt={5}
              className="p-6 border"
              highlight={true}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--neon-rose)] mb-2">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
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
  );
}
