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
  title: "تنظيف المجالس والكنب بالرياض - غسيل بالبخار وإزالة البقع | Ghaseloo",
  description:
    "أفضل شركة تنظيف المجالس والكنب والسجاد بالرياض. غسيل بالبخار، إزالة البقع الصعبة، تعقيم شامل. خدمة متنقلة احترافية - اتصل 0560280857",
  keywords:
    "تنظيف المجالس بالرياض, غسيل الكنب بالبخار, تنظيف السجاد والموكيت, شركة تنظيف مفروشات, غسيل الستائر بالبخار",
  openGraph: {
    title: "تنظيف المجالس والكنب بالرياض - غسيل بالبخار | Ghaseloo",
    description: "خدمة تنظيف المجالس والكنب والسجاد بالبخار. إزالة البقع الصعبة، تعقيم شامل، نتائج مضمونة.",
    url: "https://steamcares.com/furniture-cleaning",
    images: [{ url: "/services/furniture-cleaning-og.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://steamcares.com/furniture-cleaning",
  },
}

export default function FurnitureCleaning() {
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
