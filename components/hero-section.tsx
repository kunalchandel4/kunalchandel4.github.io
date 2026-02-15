"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const headline = headlineRef.current
    const subtitle = subtitleRef.current
    const cta = ctaRef.current

    if (headline) {
      headline.style.opacity = "0"
      headline.style.transform = "translateY(40px)"
      headline.style.filter = "blur(8px)"
      setTimeout(() => {
        headline.style.transition = "all 1s cubic-bezier(0.22,1,0.36,1)"
        headline.style.opacity = "1"
        headline.style.transform = "translateY(0)"
        headline.style.filter = "blur(0)"
      }, 200)
    }

    if (subtitle) {
      subtitle.style.opacity = "0"
      subtitle.style.transform = "translateY(30px)"
      setTimeout(() => {
        subtitle.style.transition = "all 1s cubic-bezier(0.22,1,0.36,1)"
        subtitle.style.opacity = "1"
        subtitle.style.transform = "translateY(0)"
      }, 600)
    }

    if (cta) {
      cta.style.opacity = "0"
      cta.style.transform = "translateY(20px)"
      setTimeout(() => {
        cta.style.transition = "all 0.8s cubic-bezier(0.22,1,0.36,1)"
        cta.style.opacity = "1"
        cta.style.transform = "translateY(0)"
      }, 1000)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/cryptos-zTWSiTBtOemqV4prkhoVyY4i/"
          title="3D Background"
          className="h-full w-full border-none"
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute left-[10%] top-[20%] h-40 w-40 animate-float rounded-full bg-primary/5 blur-3xl md:h-64 md:w-64" />
      <div className="absolute bottom-[20%] right-[15%] h-32 w-32 animate-float-slow rounded-full bg-primary/8 blur-3xl md:h-48 md:w-48" />
      <div className="absolute left-[60%] top-[60%] h-24 w-24 animate-pulse-glow rounded-full bg-primary/10 blur-2xl md:h-32 md:w-32" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 sm:px-4 sm:py-1.5">
          <span className="text-[10px] font-medium tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.3em]">
            INVESTMENT BANKING OPERATIONS
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="mb-6 text-3xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-4xl md:text-6xl lg:text-7xl"
        >
          {"Hi, I'm "}
          <span className="text-glow text-primary">Kunal Chandel</span>
          <br />
          <span className="text-xl font-light text-muted-foreground sm:text-2xl md:text-3xl lg:text-4xl">
            Investment Banking Associate
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mb-8 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base md:mb-10 md:text-lg"
        >
          Specializing in back-office operations, trade reconciliation, corporate
          actions processing, and settlement risk analysis with precision and
          expertise.
        </p>

        <a
          ref={ctaRef}
          href="#contact"
          className="group relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium tracking-wide text-primary transition-all duration-300 hover:border-primary/80 hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(0,210,211,0.2)] sm:px-8 sm:py-3.5"
        >
          <span>Hire Me</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
