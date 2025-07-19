import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Suspense } from "react"
import GoogleAnalytics from "@/components/google-analytics"
import JsonLd from "@/components/json-ld"

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://steamcares.com"),
  title: {
    default: "Prestige Clean - أفضل شركة غسيل وتلميع السيارات بالبخار في الرياض",
    template: "%s | Prestige Clean",
  },
  description:
    "شركة Prestige Clean الرائدة في خدمات غسيل وتلميع السيارات بالبخار في الرياض. خدمة متنقلة احترافية، تنظيف المراتب، تلميع داخلي وخارجي. اتصل الآن 0560280857",
  keywords: [
    "غسيل سيارات بالبخار الرياض",
    "تلميع سيارات متنقل",
    "غسيل مراتب السيارة",
    "تنظيف السيارات الداخلي",
    "شركة تلميع سيارات الرياض",
    "غسيل سيارات عند البيت",
    "تنظيف المجالس والكنب",
    "Prestige Clean",
  ],
  authors: [{ name: "Prestige Clean" }],
  creator: "Prestige Clean",
  publisher: "Prestige Clean",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://steamcares.com",
    siteName: "Prestige Clean",
    title: "Prestige Clean - أفضل شركة غسيل وتلميع السيارات بالبخار في الرياض",
    description:
      "شركة Prestige Clean الرائدة في خدمات غسيل وتلميع السيارات بالبخار في الرياض. خدمة متنقلة احترافية، تنظيف المراتب، تلميع داخلي وخارجي.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prestige Clean - خدمات غسيل السيارات بالبخار",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Clean - أفضل شركة غسيل وتلميع السيارات بالبخار في الرياض",
    description: "شركة Prestige Clean الرائدة في خدمات غسيل وتلميع السيارات بالبخار في الرياض. خدمة متنقلة احترافية.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://steamcares.com",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta name="theme-color" content="#112D4E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
