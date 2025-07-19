'use client'

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from 'lucide-react'
import Image from "next/image"

export function PromotionSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9660560280857', '_blank')
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+9660560280857'
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/off20.png"
              alt="20% خصم على تلميع السيارات"
              width={600}
              height={600}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[#112D4E]">عروض وخصومات لفترة محدودة</h2>
          <p className="text-[#3F72AF] mb-8">عائد استثمار مرئي ونتائج مستمرة</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#3F72AF] hover:bg-[#112D4E] text-white min-w-[200px]"
              onClick={handlePhoneClick}
            >
              <Phone className="ml-2" />
              اتصل الآن
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="min-w-[200px] bg-[#DBE2EF] hover:bg-[#F9F7F7] text-[#112D4E]"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="ml-2" />
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
