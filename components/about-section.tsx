"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import {
  ArrowRightLeft,
  FileCheck,
  Building2,
  ShieldCheck,
  Database,
  BarChart3,
  FileSpreadsheet,
} from "lucide-react"

const skills = [
  { icon: ArrowRightLeft, label: "Trade Operations" },
  { icon: FileCheck, label: "Reconciliation" },
  { icon: Building2, label: "Corporate Actions" },
  { icon: ShieldCheck, label: "KYC / AML" },
  { icon: Database, label: "SQL" },
  { icon: BarChart3, label: "Power BI" },
  { icon: FileSpreadsheet, label: "Excel" },
]

export default function AboutSection() {
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
      { threshold: 0.15 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24 md:py-32"
    >
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <span className="reveal mb-4 inline-block text-xs font-medium tracking-[0.2em] text-primary opacity-0 transition-all delay-100 duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:tracking-[0.3em]">
            ABOUT ME
          </span>
          <h2 className="reveal text-2xl font-bold tracking-tight text-foreground opacity-0 transition-all delay-200 duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:text-3xl md:text-4xl text-balance">
            Driving Operational Excellence
          </h2>
        </div>

        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Profile image */}
          <div className="reveal flex justify-center opacity-0 transition-all delay-300 duration-700 [&.animate-in]:translate-x-0 [&.animate-in]:opacity-100 -translate-x-8">
            <div className="group relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-primary/10 opacity-60 blur-sm transition-opacity group-hover:opacity-100" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-primary/20 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(0,210,211,0.15)] sm:h-72 sm:w-72 md:h-80 md:w-80">
                <Image
                  src="/images/profile.jpg"
                  alt="Kunal Chandel - Investment Banking Associate"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bio & skills */}
          <div className="reveal opacity-0 transition-all delay-500 duration-700 [&.animate-in]:translate-x-0 [&.animate-in]:opacity-100 translate-x-8">
            <p className="mb-4 text-sm font-light leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Investment Banking Operations professional with strong expertise in
              back-office functions, including trade life cycle management, reconciliation,
              corporate actions, and regulatory compliance.
            </p>
            <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground sm:mb-8 sm:text-base md:text-lg">
              Demonstrates a meticulous approach to data accuracy and process efficiency,
              ensuring seamless post-trade operations and effective risk mitigation across
              complex financial instruments.
            </p>

            {/* Skill icons */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
              {skills.map((skill, i) => (
                <div
                  key={skill.label}
                  className="reveal group flex items-center gap-2.5 rounded-lg border border-border/50 bg-secondary/30 px-3 py-2.5 opacity-0 transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4"
                  style={{ transitionDelay: `${600 + i * 80}ms` }}
                >
                  <skill.icon className="h-4 w-4 shrink-0 text-primary transition-colors" />
                  <span className="text-xs font-medium text-foreground">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
