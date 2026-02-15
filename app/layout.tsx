import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Kunal Chandel | Investment Banking Operations",
  description:
    "Portfolio of Kunal Chandel - Investment Banking Associate specializing in Back Office Operations, Trade Reconciliation, Corporate Actions, and Settlement Risk Analysis.",
  keywords: [
    "Kunal Chandel",
    "Investment Banking",
    "Operations",
    "Trade Reconciliation",
    "Corporate Actions",
    "Settlement Risk",
    "Back Office",
  ],
  authors: [{ name: "Kunal Chandel" }],
  openGraph: {
    title: "Kunal Chandel | Investment Banking Operations",
    description:
      "Investment Banking Associate specializing in Back Office Operations, Trade Reconciliation, Corporate Actions, and Settlement Risk Analysis.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
