'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+9660560280857'
  }

  return (
    <section className="py-16 bg-[#F9F7F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#112D4E]">اعمالنا</h2>
        <p className="text-center mb-12 text-[#3F72AF]">أمثلة حية رائعة لأعمالنا</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative group">
                  <Image
                    src={`/portfolio/before-${item}.jpg`}
                    alt="قبل التنظيف"
                    width={580}
                    height={1500}
                    className="rounded transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 bg-[#3F72AF] text-white px-2 py-1 rounded">قبل</span>
                </div>
                <div className="relative group">
                  <Image
                    src={`/portfolio/after-${item}.jpg`}
                    alt="بعد التنظيف"
                    width={580}
                    height={1500}
                    className="rounded transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 bg-[#3F72AF] text-white px-2 py-1 rounded">بعد</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button 
            onClick={handlePhoneClick}
            size="lg"
            className="bg-[#3F72AF] hover:bg-[#112D4E] text-white"
          >
            اتصل الان
          </Button>
        </div>
      </div>
    </section>
  )
}
