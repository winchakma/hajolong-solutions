"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  const dimensions = {
    sm: {
      emblem: "w-7 h-8",
      title: "text-base tracking-[0.14em]",
      sub: "text-[8px] tracking-[0.26em]",
      line: "h-[1px] w-2.5",
      gap: "gap-2.5",
    },
    md: {
      emblem: "w-9 h-10 sm:w-10 sm:h-11",
      title: "text-lg sm:text-xl tracking-[0.16em]",
      sub: "text-[9px] sm:text-[10px] tracking-[0.32em]",
      line: "h-[1.5px] w-3 sm:w-4",
      gap: "gap-3",
    },
    lg: {
      emblem: "w-12 h-14 sm:w-14 sm:h-16",
      title: "text-2xl sm:text-3xl tracking-[0.18em]",
      sub: "text-[11px] sm:text-xs tracking-[0.36em]",
      line: "h-[2px] w-5 sm:w-6",
      gap: "gap-4",
    },
  }[size];

  return (
    <div className={`inline-flex items-center ${dimensions.gap} select-none transition-all duration-300 ${className}`}>
      {/* Dynamic Themed Emblem */}
      <div
        className={`relative ${dimensions.emblem} shrink-0 transition-all duration-500`}
        style={{ filter: "hue-rotate(0deg) saturate(1.1)" }}
      >
        <Image
          src="/images/hajolong_emblem.png"
          alt="Hajolong Solutions Emblem"
          fill
          priority
          sizes="64px"
          className="object-contain"
        />
      </div>

      {/* Dynamic Themed Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-black font-heading transition-colors duration-300 ${dimensions.title} text-[var(--text-primary)]`}
        >
          HAJOLONG
        </span>

        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`${dimensions.line} rounded-full transition-all duration-300`}
            style={{ backgroundColor: "var(--accent-secondary)" }}
          />
          <span
            className={`font-mono font-extrabold uppercase transition-all duration-300 ${dimensions.sub}`}
            style={{ color: "var(--accent-secondary)" }}
          >
            SOLUTIONS
          </span>
          <span
            className={`${dimensions.line} rounded-full transition-all duration-300`}
            style={{ backgroundColor: "var(--accent-secondary)" }}
          />
        </div>
      </div>
    </div>
  );
}
