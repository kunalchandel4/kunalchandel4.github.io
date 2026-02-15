"use client"

import { useEffect, useState } from "react"

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    const increment = 100 / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        setTimeout(() => {
          setIsExiting(true)
          setTimeout(() => {
            onComplete()
          }, 800)
        }, 300)
      }
      setProgress(Math.min(current, 100))
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div
      className={`preloader transition-all duration-700 ${
        isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <h1 className="text-3xl font-light tracking-[0.3em] text-foreground md:text-4xl">
            KUNAL CHANDEL
          </h1>
          <p className="mt-2 text-center text-xs font-light tracking-[0.5em] text-muted-foreground">
            INVESTMENT BANKING
          </p>
        </div>

        <div className="relative h-[1px] w-64 overflow-hidden bg-border md:w-80">
          <div
            className="absolute inset-y-0 left-0 bg-primary transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute inset-y-0 left-0 bg-primary opacity-50 blur-sm transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  )
}
