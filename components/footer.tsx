"use client"

import { Linkedin, ExternalLink } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 py-8 sm:py-12">
      {/* Floating particles */}
      <div className="absolute left-[20%] top-4 h-1 w-1 animate-pulse-glow rounded-full bg-primary/30" />
      <div className="absolute right-[30%] top-8 h-1.5 w-1.5 animate-float rounded-full bg-primary/20" />
      <div className="absolute bottom-6 left-[60%] h-1 w-1 animate-float-slow rounded-full bg-primary/25" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div>
            <span className="text-lg font-semibold tracking-wide text-foreground">
              KC
            </span>
            <span className="ml-2 text-xs font-light tracking-[0.2em] text-muted-foreground">
              PORTFOLIO
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/kunal-chandel-5210ba236/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-secondary/30 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.naukri.com/mnjuser/profile?id=&altresid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-secondary/30 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              aria-label="Naukri"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/20 pt-6 text-center">
          <p className="text-xs font-light text-muted-foreground">
            {"© 2026 Kunal Chandel. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
