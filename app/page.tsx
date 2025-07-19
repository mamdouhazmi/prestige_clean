import type { Metadata } from "next"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ServiceCardsSection } from "@/components/service-cards-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FixedContactButtons } from "@/components/fixed-contact-buttons"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { LoadingSpinner } from "@/components/loading-spinner"
import { PerformanceMonitor } from "@/components/performance-monitor"

export const metadata: Metadata = {
  title: "Prestige Clean - أفضل شركة غسيل وتلميع السيارات بالبخار في الرياض",
  description:
    "شركة Prestige Clean الرائدة في خدمات غسيل وتلميع السيارات بالبخار في الرياض. خدمة متنقلة احترافية، تنظيف المراتب، تلميع داخلي وخارجي. اتصل الآن 0560280857",
  keywords:
    "غسيل سيارات بالبخار الرياض, تلميع سيارات متنقل, غسيل مراتب السيارة, تنظيف السيارات الداخلي, شركة تلميع سيارات الرياض",
  openGraph: {
    title: "Prestige Clean - أفضل شركة غسيل وتلميع السيارات بالبخار في الرياض",
    description: "خدمة متنقلة احترافية لغسيل وتلميع السيارات بالبخار. تنظيف المراتب، تلميع داخلي وخارجي، نتائج مضمونة.",
    url: "https://steamcares.com",
    siteName: "Prestige Clean",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prestige Clean - خدمات غسيل السيارات بالبخار",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Clean - أفضل شركة غسيل وتلميع السيارات بالبخار في الرياض",
    description: "خدمة متنقلة احترافية لغسيل وتلميع السيارات بالبخار. اتصل الآن 0560280857",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://steamcares.com",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F7F7]" dir="rtl">
      <PerformanceMonitor />
      <SiteHeader />

      <main>
        <HeroSection />

        <Suspense fallback={<LoadingSpinner />}>
          <ServiceCardsSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <PortfolioSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ContactForm />
        </Suspense>
      </main>

      <Footer />
      <FixedContactButtons />
    </div>
  )
}
