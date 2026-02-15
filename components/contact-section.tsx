"use client"

import { useState, useEffect, useRef } from "react"
import { Send, Mail, Phone, Linkedin, ExternalLink, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("sent")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32"
    >
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/3 left-0 h-64 w-64 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <span className="reveal mb-4 inline-block text-xs font-medium tracking-[0.2em] text-primary opacity-0 transition-all delay-100 duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:tracking-[0.3em]">
            GET IN TOUCH
          </span>
          <h2 className="reveal text-2xl font-bold tracking-tight text-foreground opacity-0 transition-all delay-200 duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:text-3xl md:text-4xl text-balance">
            {"Let's Work Together"}
          </h2>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-5 opacity-0 transition-all delay-300 duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground"
              >
                NAME
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-all focus:border-primary/50 focus:bg-secondary/50 focus:shadow-[0_0_20px_rgba(0,210,211,0.08)]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground"
              >
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-all focus:border-primary/50 focus:bg-secondary/50 focus:shadow-[0_0_20px_rgba(0,210,211,0.08)]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-all focus:border-primary/50 focus:bg-secondary/50 focus:shadow-[0_0_20px_rgba(0,210,211,0.08)]"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-8 py-3 text-sm font-medium tracking-wide text-primary transition-all hover:border-primary/80 hover:bg-primary/20 hover:shadow-[0_0_25px_rgba(0,210,211,0.15)] disabled:opacity-50 sm:w-auto"
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-xs text-destructive">
                Failed to send message. Please try again or email directly.
              </p>
            )}
          </form>

          {/* Contact info & socials */}
          <div className="reveal flex flex-col justify-center gap-8 opacity-0 transition-all delay-500 duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-8">
            <div>
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-secondary/30">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">kunal.chandel002@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-secondary/30">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">+91 9625336999</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Connect
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/kunal-chandel-5210ba236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-border/50 bg-secondary/30 px-4 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                  LinkedIn
                </a>
                <a
                  href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-border/50 bg-secondary/30 px-4 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4 text-primary" />
                  Naukri
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
