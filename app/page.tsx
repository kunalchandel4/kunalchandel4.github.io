"use client"

import { useState, useCallback } from "react"
import Preloader from "@/components/preloader"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CaseStudiesSection from "@/components/case-studies-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading && <Preloader onComplete={handleLoadingComplete} />}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <CaseStudiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
