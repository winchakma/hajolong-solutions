"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme, Theme } from "@/context/ThemeContext";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themes: { id: Theme; label: string; color: string }[] = [
    { id: "charcoal", label: "Neo Rose", color: "from-[#ff2d95] via-[#ffffff] to-[#007ba7]" },
    { id: "sapphire", label: "Sapphire Mint", color: "from-[#0066ff] via-[#00e5ff] to-[#00f5a0]" },
    { id: "violet", label: "Cyber Violet", color: "from-[#7c3aed] via-[#ec4899] to-[#00f5ff]" },
    { id: "light", label: "Luxe Cream", color: "from-[#f6f3ed] via-[#0052cc] to-[#ea580c]" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-md backdrop-blur-xl border-b" : "py-5"
      }`}
      style={{
        backgroundColor: "var(--nav-bg)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="inline-flex items-center group">
          <BrandLogo className="transition-transform duration-200 group-hover:scale-[1.02]" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-[var(--accent-highlight)] font-bold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent-primary)] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Multi-Color Theme Switcher & Contact Button */}
        <div className="flex items-center gap-4">
          {/* Multi-Color Switcher */}
          <div
            className="flex items-center gap-1 p-1 rounded-full border shadow-sm"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-glass)",
            }}
            role="group"
            aria-label="Color Palette Switcher"
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                title={`Switch to ${t.label} palette`}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  theme === t.id
                    ? "btn-neon-active shadow-[0_0_12px_var(--neon-spotlight)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]"
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${t.color}`}
                />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold btn-primary tracking-wide"
          >
            <span>Get in Touch</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b px-6 py-4 flex flex-col gap-3 mt-2"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border-glass)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold py-1.5 text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center py-2.5 rounded-xl font-bold text-xs btn-primary mt-2"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
