"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer
      className="border-t py-16"
      style={{
        backgroundColor: "var(--bg-deep)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Brand & Trust Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b" style={{ borderColor: "var(--border-subtle)" }}>
          <Link href="/" className="inline-block group">
            <BrandLogo className="transition-transform duration-200 group-hover:scale-[1.02]" />
          </Link>
          <a
            href="https://www.linkedin.com/company/hajolong-solution/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#0A66C2] transition-all"
            style={{
              backgroundColor: "var(--bg-surface-elevated)",
              borderColor: "var(--border-glass)",
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#0A66C2" />
              <path
                d="M7.4 19H4.3V9.5h3.1V19zM5.85 8.2c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8 1 0 1.8.8 1.8 1.8 0 1-.8 1.8-1.8 1.8zM19.7 19h-3.1v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H9.9V9.5h3v1.3h0c.4-.8 1.5-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.9V19z"
                fill="white"
              />
            </svg>
            <span>Follow on LinkedIn</span>
          </a>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b" style={{ borderColor: "var(--border-subtle)" }}>
          <div>
            <h5 className="text-xs font-heading font-bold text-[var(--accent-highlight)] uppercase tracking-wider mb-3">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link></li>
              <li><Link href="/solutions" className="hover:text-[var(--text-primary)] transition-colors">Solutions & AI</Link></li>
              <li><Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">Services & Consulting</Link></li>
              <li><Link href="/about" className="hover:text-[var(--text-primary)] transition-colors">About Us & Team</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--text-primary)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-heading font-bold text-[var(--accent-highlight)] uppercase tracking-wider mb-3">
              Solutions
            </h5>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><Link href="/solutions" className="hover:text-[var(--text-primary)] transition-colors">Custom Web Platforms</Link></li>
              <li><Link href="/solutions" className="hover:text-[var(--text-primary)] transition-colors">Autonomous AI Bots</Link></li>
              <li><Link href="/solutions" className="hover:text-[var(--text-primary)] transition-colors">System Redesign</Link></li>
              <li><Link href="/solutions" className="hover:text-[var(--text-primary)] transition-colors">API & Software Integration</Link></li>
              <li><Link href="/solutions" className="hover:text-[var(--text-primary)] transition-colors">Data Management</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-heading font-bold text-[var(--accent-highlight)] uppercase tracking-wider mb-3">
              Services
            </h5>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">IT Consulting</Link></li>
              <li><Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">Digital Marketing Strategy</Link></li>
              <li><Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">Audience Growth Architecture</Link></li>
              <li><Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">Business Automation</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-heading font-bold text-[var(--accent-highlight)] uppercase tracking-wider mb-3">
              Direct Contact
            </h5>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li>
                <a
                  href="mailto:contact@hajolong.com"
                  className="hover:text-[var(--text-primary)] transition-colors font-mono"
                >
                  contact@hajolong.com
                </a>
              </li>
              <li className="text-[var(--text-muted)]">
                Response SLA: Within 2 Hours
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/hajolong-solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="4" fill="#0A66C2" />
                    <path
                      d="M7.4 19H4.3V9.5h3.1V19zM5.85 8.2c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8 1 0 1.8.8 1.8 1.8 0 1-.8 1.8-1.8 1.8zM19.7 19h-3.1v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H9.9V9.5h3v1.3h0c.4-.8 1.5-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.9V19z"
                      fill="white"
                    />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--accent-highlight)] hover:underline inline-flex items-center gap-1 font-semibold mt-1"
                >
                  Start a Conversation &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-sans">
          <div>
            &copy; 2026 HAJOLONG Solutions Inc. All rights reserved.
          </div>
          <div>
            Enterprise Engineering • Custom AI Bots • Modern Systems
          </div>
        </div>
      </div>
    </footer>
  );
}
