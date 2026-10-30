import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Outfit,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const fontHeading = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HAJOLONG SOLUTIONS | Custom Software, AI Bots & System Integration",
  description: "Hajolong Solutions engineers custom web platforms, intelligent AI bots, legacy software redesigns, and enterprise systems that scale businesses.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontHeading.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("hajolong-theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.setAttribute("data-theme","dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-blue-500 selection:text-white bg-[var(--bg-deep)] text-[var(--text-primary)] font-sans relative">
        {/* Global Ambient Low Background Neon Lights */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
          {/* Top-Left Low Neon Cyan Light */}
          <div
            className="ambient-neon-orb-1 absolute -top-[10%] left-[8%] w-[620px] h-[620px] rounded-full blur-[140px] opacity-15 transition-all duration-700"
            style={{ background: "var(--neon-cyan)" }}
          />
          {/* Mid-Right Low Neon Blue Light */}
          <div
            className="ambient-neon-orb-2 absolute top-[36%] -right-[8%] w-[680px] h-[680px] rounded-full blur-[160px] opacity-12 transition-all duration-700"
            style={{ background: "var(--neon-blue)" }}
          />
          {/* Bottom-Left Low Neon Secondary Light */}
          <div
            className="ambient-neon-orb-3 absolute bottom-[8%] left-[12%] w-[580px] h-[580px] rounded-full blur-[150px] opacity-10 transition-all duration-700"
            style={{ background: "var(--accent-secondary)" }}
          />
        </div>

        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
