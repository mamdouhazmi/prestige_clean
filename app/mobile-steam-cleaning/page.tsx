import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "./components/hero-section"
import { PromotionSection } from "./components/promotion-section"
import { ProcessSection } from "./components/process-section"
import { FixedContactButtons } from "@/components/fixed-contact-buttons"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import ServicesProvide from "./components/services-provide"
import CarDetailingFAQ from "./components/faq-section"
import DetailedSection from "./components/detailedsection"
import { ServicesSection } from "./components/services-section"
import CarWashServices from "./components/car-wash-services"
import { LoadingSpinner } from "@/components/loading-spinner"
import { PerformanceMonitor } from "@/components/performance-monitor"

export const metadata: Metadata = {
  title: "غسيل سيارات بالبخار متنقل بالرياض - خدمة في موقعك | Ghaseloo",
  description:
    "أفضل خدمة غسيل سيارات بالبخار متنقل في الرياض. تنظيف داخلي وخارجي، تعقيم شامل، خدمة في موقعك. متاح 24/7 - اتصل 0560280857",
  keywords:
    "غسيل سيارات بالبخار متنقل, غسيل سيارات عند البيت, مغسلة سيارات متنقلة الرياض, غسيل سيارات بالبخار الرياض, تنظيف سيارات متنقل",
  openGraph: {
    title: "غسيل سيارات بالبخار متنقل بالرياض | Ghaseloo",
    description: "خدمة غسيل سيارات بالبخار متنقلة احترافية. تنظيف داخلي وخارجي، تعقيم شامل في موقعك.",
    url: "https://steamcares.com/mobile-steam-cleaning",
    images: [{ url: "/services/mobile-wash-og.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://steamcares.com/mobile-steam-cleaning",
  },
}

export default function MobileSteamCleaning() {
  return (
    <div className="min-h-screen bg-[#F9F7F7]" dir="rtl">
      <PerformanceMonitor />
      <SiteHeader />

      <main>
        <HeroSection />

        <Suspense fallback={<LoadingSpinner />}>
          <CarWashServices />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <PromotionSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <DetailedSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <CarDetailingFAQ />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ServicesProvide />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ProcessSection />
        </Suspense>
      </main>

      <Footer />
      <FixedContactButtons />
    </div>
  )
}
