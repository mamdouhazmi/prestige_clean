'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProcessSection() {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+9660560280857'
  }

  return (
    <section className="py-16 bg-[#DBE2EF]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4 text-[#112D4E]">يعد تلميع السيارات الداخلي عملية تحتاج إلى</h2>
            <p className="mb-4 text-[#3F72AF]">مجموعة من الأدوات والمواد المختارة بعناية لضمان</p>
            <p className="mb-4 text-[#3F72AF]">تحقيق النتائج المرجوة والحفاظ على نظافة وتألق مقصورة سيارتك</p>
            <p className="mb-6 text-[#3F72AF]">عائد استثمار مرئي ونتائج مستمرة</p>
            <Button 
              size="lg"
              className="bg-[#3F72AF] hover:bg-[#112D4E] text-white"
              onClick={handlePhoneClick}
            >
              اتصل الآن
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/Background4.jpg"
              alt="تلميع داخلي للسيارة"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
