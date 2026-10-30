"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  const { theme } = useTheme();

  // Emblem filter per theme (crisp, no bleeding neon glow)
  const getEmblemStyle = () => {
    switch (theme) {
      case "charcoal": // Neo Rose theme
        return {
          filter: "hue-rotate(115deg) saturate(1.3)",
        };
      case "violet": // Cyber Violet theme
        return {
          filter: "hue-rotate(45deg) saturate(1.25)",
        };
      case "light": // Luxe Cream theme
        return {
          filter: "hue-rotate(0deg) saturate(1.1)",
        };
      case "sapphire": // Sapphire Mint theme
      default:
        return {
          filter: "hue-rotate(-10deg) saturate(1.25)",
        };
    }
  };

  // "SOLUTIONS" subtitle color per theme (sharp letters, no textShadow bleed)
  const getSolutionsColor = () => {
    switch (theme) {
      case "charcoal": // Neo Rose
        return {
          color: "var(--neon-rose)",
        };
      case "violet": // Cyber Violet
        return {
          color: "var(--neon-rose)",
        };
      case "light": // Luxe Cream
        return {
          color: "var(--accent-secondary)", // Royal Azure
        };
      case "sapphire": // Sapphire Mint
      default:
        return {
          color: "var(--neon-cyan)",
        };
    }
  };

  const isLight = theme === "light";

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
        style={getEmblemStyle()}
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
          className={`font-black font-heading transition-colors duration-300 ${dimensions.title} ${
            isLight ? "text-[#181615]" : "text-white"
          }`}
        >
          HAJOLONG
        </span>

        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`${dimensions.line} rounded-full transition-all duration-300`}
            style={{ backgroundColor: getSolutionsColor().color }}
          />
          <span
            className={`font-mono font-extrabold uppercase transition-all duration-300 ${dimensions.sub}`}
            style={getSolutionsColor()}
          >
            SOLUTIONS
          </span>
          <span
            className={`${dimensions.line} rounded-full transition-all duration-300`}
            style={{ backgroundColor: getSolutionsColor().color }}
          />
        </div>
      </div>
    </div>
  );
}
