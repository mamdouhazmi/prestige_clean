"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

// Services Data
const services = [
  {
    title: "غسيل سيارات بالبخار متنقل بالرياض",
    description: `
-مقدمةعن غسيل السيارة بالبخار
-غسيل سيارات بالبخار
-خدمات غسيل السيارات بالبخار المتنقلة
-غسيل السيارات بالبخار في الرياض
-كيفية اختيار شركة غسيل سيارات بالبخار
-افضل شركات غسيل السيارات بالبخار
-ارخص شركة غسيل سيارات بالبخار
-غسيل سيارات متنقل بالرياض
-غسيل سيارات متنقل الرياض رخيص
-غسيل سيارات
-غسيل سيارات عند البيت
-مغسلة سيارات متنقلة
-مغسلة سيارات
-شركة غسيل سيارات
-غسيل سياره
-غسيل سياره متنقل
-غسيل متنقل الرياض
-افضل مغسلة سيارات في الرياض
-ارخص غسيل سيارات متنقل
   

`,
    image: "/services/11.jpg",
  },
  {
    title: "ما هو غسيل السيارات بالبخار المتنقل؟",
    description: `هو خدمة تنظيف سيارات حديثة توفر لك الراحة القصوى، حيث تأتي مغسلة السيارات إليك أينما كنت، سواء في المنزل أو العمل أو أي مكان آخر، وتقوم بتنظيف سيارتك بالكامل باستخدام تقنية البخار الساخن.

كيف يعمل غسيل السيارات بالبخار المتنقل؟
1.التواصل مع الشركة: تبدأ العملية بالتواصل مع شركة غسيل سيارات بالبخار المتنقلة لحجز موعد يناسبك.

2.وصول وحدة التنظيف: في الموعد المحدد، تأتي وحدة التنظيف المتنقلة إلى المكان الذي تريده.

3.التحضير: يتم تغطية أي أجزاء حساسة في السيارة، مثل الإطارات والمصابيح، لحمايتها من بخار الماء.

4.غسيل السيارة الخارجي: يتم استخدام بخار الماء الساخن لغسل جميع أنحاء السيارة الخارجية، بما في ذلك الهيكل والزجاج والمصابيح.




`,
    image: "/services/4.jpg",
  },
  {
    title: "ما هي خدمات غسيل السيارات بالبخار المتنقل؟",
    description: `
    غسيل خارجي: تنظيف الهيكل الخارجي بالكامل، بما في ذلك الإطارات والعجلات.

تنظيف داخلي: تنظيف المقصورة الداخلية، بما في ذلك المقاعد، والسجاد، واللوحة الأمامية.

تلميع: إضفاء لمعان ولمسة نهائية جذابة على طلاء سيارتك.

تعقيم: القضاء على الجراثيم والبكتيريا في جميع أنحاء السيارة.

نصائح للحصول على أفضل نتيجة:

اختيار الشركة المناسبة: تأكد من اختيار شركة ذات سمعة طيبة وخبرة في مجال غسيل السيارات بالبخار.

تحديد الخدمات المطلوبة: حدد الخدمات التي تحتاجها لسيارتك قبل طلب الخدمة.

إعداد السيارة: قم بإزالة الأشياء الشخصية من السيارة قبل بدء عملية التنظيف
`,
    image: "/services/6.jpg",
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
                  Prestige Clean
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
