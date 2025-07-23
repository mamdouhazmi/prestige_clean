"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

// Services Data
const services = [
  {
    title: "غسيل مراتب السيارة بالبخار بالرياض",
    description: `غسيل مراتب السيارة بالبخار
اهمية غسيل مراتب السيارة بالبخار
طرق غسيل مراتب السيارة
افضل شركة غسيل مراتب السيارة بالبخار
كيفية تنظيف المراتب مع البقع الصعبة
نصائح للحفاظ علي مراتب السيارة
الخطوات الاساسية لتنظيف مراتب السيارة بالبخار
غسيل مراتب السيارة الرياض
تلميع مراتب السيارة
تنظيف مراتب السيارة القماش
تنظيف مراتب السيارة الجلد





`,
    image: "/services/Coutch0.jpg",
  },
  {
    title: "ما هو غسيل مراتب السيارة بالبخار",
    description: `هو تقنية حديثة لتنظيف مراتب السيارة باستخدام بخار الماء الساخن. يُعدّ هذا النوع من التنظيف بديلًا فعالًا للطرق التقليدية التي تستخدم المواد الكيميائية القاسية، حيث يوفر العديد من الفوائد، منها:

    التنظيف العميق:
    يتغلغل البخار الساخن في جميع أنحاء المراتب، بما في ذلك الأماكن التي يصعب الوصول إليها بالطرق التقليدية، مما يزيل الأوساخ والبقع بشكل عميق، حتى العلامات العنيدة من الطعام والشراب.

    التعقيم الفعال:
    يقتل البخار الجراثيم والبكتيريا والفطريات المتراكمة على المراتب، مما يحافظ على صحة ركاب السيارة ويمنع انتشار الأمراض.
     `,
    image: "/services/Coutch1.jpg",
  },
  {
    title: "خطوات غسيل مراتب السيارة بالبخار",
    description: `إزالة الأوساخ السائبة: يتم استخدام مكنسة كهربائية لشفط أي أوساخ أو غبار سائب على سطح المراتب.

    التبخير: يتم تمرير جهاز بخار خاص على جميع أنحاء المراتب، مع التركيز على المناطق المتسخة بشكل خاص.

    التجفيف: يتم استخدام مكنسة كهربائية ذات قدرة عالية لامتصاص الماء المتبخر من المراتب.

    التعقيم: يتم استخدام جهاز تعقيم خاص لتعقيم المراتب والقضاء على أي بقايا من الجراثيم أو البكتيريا.
    
    
    
    
    `,
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
        <h2 className="text-4xl font-bold text-center mb-6 text-[#112D4E]">خدماتنا</h2>
        <p className="text-center text-[#3F72AF] mb-16 max-w-2xl mx-auto">خدمة غسيل إحترافية لسيارتك</p>

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
