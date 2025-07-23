"use client"

import { ServiceCard } from "./service-card"

export function ServiceCardsSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#1E293B]">خدماتنا</h1>
          <h3 className="text-lg sm:text-xl md:text-2xl text-[#64748B] max-w-4xl mx-auto leading-relaxed px-4">
            جميع خدمات التلميع الداخلي للسيارات بكل احترافية و إزالة البقع والتنظيف الداخلي
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          <ServiceCard
            title="غسيل سيارات بالبخار متنقل"
            description="غسيل السيارات عند البيت هو خدمة متاحة تتيح لك الحصول على سيارتك نظيفة دون الحاجة إلى الخروج من منزلك. هذه الخدمة تتضمن تنظيف السيارة من الداخل والخارج باستخدام معدات ومنتجات عالية الجودة. هذا النوع من الخدمة أصبح شائعًا بشكل متزايد بسبب الراحة التي نقدمها"
            beforeImage="/services/5B.jpg"
            afterImage="/services/5A.jpg"
            servicePageUrl="/mobile-steam-cleaning"
          />
          <ServiceCard
            title="تلميع سيارات متنقل الرياض"
            description="تعتبر عملية تلميع السيارات الداخلية في الرياض من الخطوات الهامة للحفاظ على جمالية ومظهر السيارة. فمع مرور الزمن، تتعرض السيارات لعوامل طبيعية تغير مظهرها الداخلي، مما يستدعي الحاجة إلى عملية تلميع فعالة. يساعد التلميع في إزالة البقع، والغبار، والشوائب التي تتجمع في المساحات الداخلية للسيارة."
            beforeImage="/services/9B.jpg"
            afterImage="/services/9A.jpg"
            servicePageUrl="/interior-detailing"
          />
          <ServiceCard
            title="تنظيف المجالس والكنب بالبخار"
            description="باستخدام البخار كعامل اساسي في عملية التنظيف ستحصل علي النظافة والحماية من الجراثيم استخدام واتباع افضل الطرق والاساليب في تنظيف المجالس والكنب للوصول لاعلي درجات الدقة"
            beforeImage="/services/10B.jpg"
            afterImage="/services/10A.jpg"
            servicePageUrl="/furniture-cleaning"
          />
        </div>
      </div>
    </section>
  )
}
