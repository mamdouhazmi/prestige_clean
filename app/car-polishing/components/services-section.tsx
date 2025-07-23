"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "تلميع سيارات بالرياض",
    description: "تقديم خدمات تلميع السيارات في الرياض مجموعة متنوعة من الخيارات التي تلبي احتياجات عملاء السيارات",
    image: "/services/service-4.jpg",
  },
  {
    title: "تلميع سيارات متنقل",
    description: "خدمة تلميع السيارات المتنقلة هي خدمة تقدم لك فريق من المحترفين مجهزون بأحدث الأدوات",
    image: "/services/service-2.jpg",
  },
  {
    title: "تلميع سيارات داخلي بالرياض",
    description: "تلميع السيارات الداخلي في الرياض هو عملية ضرورية للحفاظ على جمال السيارة",
    image: "/services/service-3.jpg",
  },
]

export function ServicesSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9660560280857", "_blank")
  }

  return (
    <section className="py-16 bg-[#DBE2EF]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#112D4E]">خدماتنا</h2>
        <p className="text-center text-[#3F72AF] mb-16 max-w-2xl mx-auto">
          نمتلك خبرة طويلة في مجالنا ولذلك نستطيع تقديم خدمات متميزة لك.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#3F72AF] text-white px-3 py-1 rounded-full text-xs">
                  Ghaseloo
                </div>
                <div className="absolute top-4 left-4 bg-[#112D4E] text-white px-3 py-1 rounded-full text-xs mb-1">
                  0560280857
                </div>
                <div className="absolute top-12 left-4 bg-[#112D4E] text-white px-3 py-1 rounded-full text-xs">
                  0582807319
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#112D4E]">{service.title}</h3>
                <p className="text-[#3F72AF] mb-4">{service.description}</p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#3F72AF] hover:bg-[#112D4E] text-white flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  تواصل معنا
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
