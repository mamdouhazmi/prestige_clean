'use client'

import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react'

export default function CallSection() {


  const handlePhoneClick = () => {
    window.location.href = 'tel:+9660560280857'
  }

  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="relative h-[200px] rounded-lg overflow-hidden" dir="rtl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Background6.jpg?height=200&width=600')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex flex-col items-start justify-center text-white px-6 md:px-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-right w-full">
            افضل شركة تنظيف مراتب
            <br />
            بالرياض
          </h1>
          <p className="text-lg mb-6 text-right w-full">
            متخصصون في تنظيف مراتب السيارة بالبخار
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button 
              size="lg"
              variant="secondary"
              className="min-w-[200px] bg-[#DBE2EF] hover:bg-[#F9F7F7] text-[#112D4E]"
              onClick={handlePhoneClick}
            >
              <Phone className="ml-2" />
              اتصل الان
            </Button>
   
          </div>
        </div>
      </div>
    </div>
  )
}
