import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { PromotionSection } from "./components/promotion-section"
import { ProcessSection } from "./components/process-section"
import { FixedContactButtons } from "@/components/fixed-contact-buttons"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import ServicesProvide from "./components/services-provide"
import CarDetailingFAQ from "./components/faq-section"
import { LoadingSpinner } from "@/components/loading-spinner"
import { PerformanceMonitor } from "@/components/performance-monitor"

export const metadata: Metadata = {
  title: "تلميع سيارات بالرياض - خدمة تلميع داخلي وخارجي احترافية | Prestige Clean",
  description:
    "أفضل شركة تلميع سيارات بالرياض. خدمة تلميع داخلي وخارجي احترافية، إزالة الخدوش، تلميع المقاعد والديكورات. خصم 30% - اتصل الآن 0560280857",
  keywords:
    "تلميع سيارات الرياض, تلميع سيارات داخلي, تلميع سيارات خارجي, شركة تلميع سيارات, تلميع مقاعد السيارة, إزالة خدوش السيارة",
  openGraph: {
    title: "تلميع سيارات بالرياض - خدمة احترافية | Prestige Clean",
    description: "أفضل شركة تلميع سيارات بالرياض. تلميع داخلي وخارجي، إزالة الخدوش، نتائج مضمونة. خصم 30%",
    url: "https://steamcares.com/car-polishing",
    images: [{ url: "/services/service-polishing-og.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://steamcares.com/car-polishing",
  },
}

export default function CarPolishing() {
  return (
    <div className="min-h-screen bg-[#F9F7F7]" dir="rtl">
      <PerformanceMonitor />
      <SiteHeader />

      <main>
        <HeroSection />

        <Suspense fallback={<LoadingSpinner />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <PromotionSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ProcessSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <CarDetailingFAQ />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ServicesProvide />
        </Suspense>
      </main>

      <Footer />
      <FixedContactButtons />
    </div>
  )
}
