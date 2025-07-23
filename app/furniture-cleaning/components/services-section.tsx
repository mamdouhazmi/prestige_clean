"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

// Services Data
const services = [
  {
    title: "تنظيف الكنب",
    description: `متخصصون في تنظيف الكنب وازالة اصعب البقع من الكنب الماكينات الحديثة والمواد الاصلية التي تحافظ علي الكنب بشكل دوري
    
    `,
    image: "/services/Coutch0.jpg",
  },
  {
    title: "ما هو غسيل مراتب السيارة بالبخارغسيل السجاد والموكيت",
    description: `بدءًا من التنظيف العميق إلى معالجة البقع الخاصة. فريقنا المدرب يستخدم أحدث التقنيات والمعدات لضمان تقديم نتائج متميزة. كما نقدم خدمات تنظيف للسجاد الطبيعي والاصطناعي، مما يضمن اهتمامًا خاصًا بكل نوع من السجاد`,
    image: "/services/Coutch1.jpg",
  },
  {
    title: "غسيل الستائر بالبخار",
    description: `إذا كنت تبحث عن طريقة فعالة وآمنة لتنظيف ستائرك، فإن خدمة شركة غسيل ستائر بالبخار بالرياض هي الخيار المثالي لك. تستخدم هذه الشركة تقنيات متقدمة لتنظيف الستائر بالبخار، مما يضمن القضاء على الأوساخ والبقع دون إلحاق أي ضرر بالنسيج`,
    image: "/services/Coutch2.jpg",
  },
  {
    title: "تنظيف المجالس وفرش البيت",
    description: `تقدم شركات التنظيف في الرياض خدمات متنوعة تشمل تنظيف المفروشات، وتعقيم المجالس، وإزالة البقع، بالإضافة إلى تقنيات تنظيف الهواء للحفاظ على جو صحي داخل المنزل. إن استخدام مواد وخدمات احترافية يعني أن لديك الفرصة للاستمتاع بمساحة نظيفة وخالية من الجراثيم.`,
    image: "/services/Coutch2.jpg",
  },
]

export function ServicesSection() {
  // Handle WhatsApp Click Event
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9660560280857", "_blank")
  }

  return (
    <section className="py-16 bg-[#DBE2EF]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#112D4E]">فريقنا</h2>
        <p className="text-center text-[#3F72AF] mb-16 max-w-2xl mx-auto">
          يقودنا فريق لا يتوقف عن التفكير والإبداع. ويحرص دومًا على دفعنا إلى الأمام.
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
                <p className="text-[#3F72AF] mb-4 whitespace-pre-wrap">{service.description}</p>
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
