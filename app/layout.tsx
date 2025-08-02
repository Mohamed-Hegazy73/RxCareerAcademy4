import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "RxCareerAcademy - E-Learning Platform",
  description: "Professional pharmaceutical sales and English training academy - From Graduation to Career elevation!",
  keywords: "pharmaceutical sales, medical training, English courses, career development, pharmacy education",
  authors: [{ name: "RxCareerAcademy" }],
  creator: "RxCareerAcademy",
  publisher: "RxCareerAcademy",
  robots: "index, follow",
  openGraph: {
    title: "RxCareerAcademy - E-Learning Platform",
    description:
      "Transform your career with our comprehensive training programs designed for pharmaceutical professionals and English learners.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>RxCareerAcademy - E-Learning Platform</title>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
