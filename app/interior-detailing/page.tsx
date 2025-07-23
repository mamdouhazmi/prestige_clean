import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { FAQSection } from "./components/faq-section"
import { FixedContactButtons } from "@/components/fixed-contact-buttons"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import DetailedSection from "./components/detailedsection"
import CallSection from "./components/call-section"
import ServicesCar from "./components/services-car"
import CarDetailingAd from "./components/car-detailing-ad"
import { LoadingSpinner } from "@/components/loading-spinner"
import { PerformanceMonitor } from "@/components/performance-monitor"

export const metadata: Metadata = {
  title: "تلميع سيارات متنقل الرياض - خدمة تلميع داخلي وخارجي في موقعك | Ghaseloo",
  description:
    "أفضل شركة تلميع سيارات متنقل بالرياض. خدمة تلميع داخلي وخارجي في موقعك، تنظيف المقاعد، تلميع الديكورات. متاح 24/7 - اتصل 0560280857",
  keywords:
    "تلميع سيارات متنقل الرياض, تلميع سيارات في البيت, تلميع سيارات داخلي متنقل, شركة تلميع متنقلة, تلميع سيارات عند البيت",
  openGraph: {
    title: "تلميع سيارات متنقل الرياض - خدمة في موقعك | Ghaseloo",
    description: "خدمة تلميع سيارات متنقلة احترافية في الرياض. تلميع داخلي وخارجي في موقعك، نتائج مضمونة.",
    url: "https://steamcares.com/interior-detailing",
    images: [{ url: "/services/mobile-detailing-og.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://steamcares.com/interior-detailing",
  },
}

export default function InteriorDetailing() {
  return (
    <div className="min-h-screen bg-[#F9F7F7]" dir="rtl">
      <PerformanceMonitor />
      <SiteHeader />

      <main>
        <HeroSection />

        <Suspense fallback={<LoadingSpinner />}>
          <CarDetailingAd />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <DetailedSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ServicesCar />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <CallSection />
        </Suspense>
      </main>

      <Footer />
      <FixedContactButtons />
    </div>
  )
}
