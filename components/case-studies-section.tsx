"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const caseStudies = [
  {
    title: "Trade Reconciliation & Break Management",
    description:
      "Identified and resolved trade breaks across multiple asset classes using data comparison tools, reducing unmatched entries by 40% and improving STP rates.",
    image: "/images/project-1.jpg",
    link: "https://drive.google.com/drive/folders/19jHuRH-GCtsyCB527iaoWW_TRRtIGiS2?usp=sharing",
  },
  {
    title: "Corporate Actions Processing & Entitlement Impact",
    description:
      "Managed end-to-end corporate action lifecycle including dividends, mergers, and stock splits, ensuring accurate entitlement calculation and timely settlement.",
    image: "/images/project-2.jpg",
    link: "https://drive.google.com/drive/folders/16WqDzBK2fyts34M22LNv3Q0Tg4P-5eDz?usp=sharing",
  },
  {
    title: "Settlement Risk & Failed Trade Analysis",
    description:
      "Analyzed settlement failures and assessed counterparty risk exposure, implementing proactive monitoring that reduced failed trades by 30%.",
    image: "/images/project-3.jpg",
    link: "https://drive.google.com/drive/folders/1xYCcdVVGa1oVTKUpjECKfJ40HBZSQBr6?usp=sharing",
  },
]

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <span className="reveal mb-4 inline-block text-xs font-medium tracking-[0.2em] text-primary opacity-0 transition-all delay-100 duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:tracking-[0.3em]">
            CASE STUDIES
          </span>
          <h2 className="reveal text-2xl font-bold tracking-tight text-foreground opacity-0 transition-all delay-200 duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:text-3xl md:text-4xl text-balance">
            Featured Projects
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              className="reveal group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 opacity-0 transition-all duration-600 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,210,211,0.08)] [&.animate-in]:translate-y-0 [&.animate-in]:scale-100 [&.animate-in]:opacity-100 translate-y-10 scale-[0.95]"
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Card glow on hover */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-4 sm:p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {study.title}
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground">
                    {study.description}
                  </p>

                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-medium tracking-wide text-primary transition-all hover:border-primary/60 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(0,210,211,0.15)]"
                  >
                    View Case Study
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
