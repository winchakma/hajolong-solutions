"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer
      className="border-t py-12 sm:py-14"
      style={{
        backgroundColor: "var(--bg-deep)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid: Brand Column + 4 Link Columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <BrandLogo className="transition-transform duration-200 group-hover:scale-[1.02]" />
            </Link>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Custom web platforms, autonomous 24/7 AI bots, and legacy system modernization engineered for real business growth.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xs font-heading font-bold text-[var(--accent-highlight)] uppercase tracking-wider mb-3">
                Navigation
              </h5>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
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
                <li><Link href="/solutions" className="hover:text-[var(--text-primary)] transition-colors">API Integration</Link></li>
                <li><Link href="/solutions" className="hover:text-[var(--text-primary)] transition-colors">Data Management</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-heading font-bold text-[var(--accent-highlight)] uppercase tracking-wider mb-3">
                Services
              </h5>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li><Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">IT Consulting</Link></li>
                <li><Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">Digital Strategy</Link></li>
                <li><Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">Audience Growth</Link></li>
                <li><Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">Business Automation</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-heading font-bold text-[var(--accent-highlight)] uppercase tracking-wider mb-3">
                Direct Contact
              </h5>
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                <li>
                  <a
                    href="mailto:contact@hajolong.com"
                    className="hover:text-[var(--text-primary)] transition-colors font-mono"
                  >
                    contact@hajolong.com
                  </a>
                </li>
                <li className="text-[var(--text-muted)]">
                  Response SLA: &lt; 2 Hours
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/hajolong-solution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0A66C2] transition-colors inline-flex items-center gap-2 font-medium"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#0A66C2" />
                      <path
                        d="M7.4 19H4.3V9.5h3.1V19zM5.85 8.2c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8 1 0 1.8.8 1.8 1.8 0 1-.8 1.8-1.8 1.8zM19.7 19h-3.1v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H9.9V9.5h3v1.3h0c.4-.8 1.5-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.9V19z"
                        fill="white"
                      />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[var(--accent-highlight)] hover:underline inline-flex items-center gap-1 font-semibold pt-0.5"
                  >
                    Start a Conversation &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-sans">
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
