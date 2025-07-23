import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { FAQSection } from "./components/faq-section"
import { FixedContactButtons } from "@/components/fixed-contact-buttons"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import DetailedSection from "./components/detailedsection"
import ServicesProvide from "./components/services-provide"
import CallSection from "./components/call-section"
import { LoadingSpinner } from "@/components/loading-spinner"
import { PerformanceMonitor } from "@/components/performance-monitor"

export const metadata: Metadata = {
  title: "غسيل مراتب السيارة بالبخار بالرياض - تنظيف عميق وتعقيم | Ghaseloo",
  description:
    "أفضل خدمة غسيل مراتب السيارة بالبخار في الرياض. تنظيف عميق، إزالة البقع الصعبة، تعقيم شامل. خدمة متنقلة احترافية. اتصل الآن 0560280857",
  keywords:
    "غسيل مراتب السيارة بالبخار, تنظيف مراتب السيارة الرياض, غسيل مقاعد السيارة, تعقيم مراتب السيارة, إزالة بقع المراتب",
  openGraph: {
    title: "غسيل مراتب السيارة بالبخار بالرياض | Ghaseloo",
    description: "تنظيف عميق وتعقيم شامل لمراتب السيارة بالبخار. إزالة البقع الصعبة، خدمة متنقلة احترافية.",
    url: "https://steamcares.com/steam-seat-cleaning",
    images: [{ url: "/services/seat-cleaning-og.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://steamcares.com/steam-seat-cleaning",
  },
}

export default function SteamSeatCleaning() {
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
          <DetailedSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ServicesProvide />
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
