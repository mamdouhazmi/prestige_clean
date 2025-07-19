"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

// Services Data
const services = [
  {
    title: "تلميع سيارات متنقل الرياض",
    description: `
-مقدمة عن اهمية تلميع السيارات
-خدمات تلميع السيارت في الرياض
-مميزات التلميع المتنقل للسيارات
-تلميع السيارات الداخلي
-مميزات افضل شركات التلميع في الرياض
-نصائح لاختيار افضل شركة تلميع بالرياض
-خطوات تلميع السيارة بالرياض
-طريقة الحفاظ علي السيارة
-تلميع سيارات متنقل
-تلميع سيارات الرياض
-تلميع داخلي
-التلميع الساطع
-تلميع سيارات متنقل الرياض
-تلميع داخلي متنقل
-تلميع سيارات داخلي 
-التلميع الساطع الرياض
-تلميع سيارات خارجي
-عروض تلميع السيارات
    `,
    image: "/services/11.jpg",
  },
  {
    title: "شركة تلميع سيارات بالرياض",
    description: `خدمة تلميع السياره بالرياض 
تشمل تنظيف المقاعد والارضيات والسقف والشنطة والدعاسات وجميع الديكورات الداخلية .
-تلميع متنقل في الرياض
-تلميع داخلي للسيارات
-تلميع داخلي وخارجي الرياض
-افضل تلميع داخلي بالرياض
-تلميع سيارات في الرياض












`,
    image: "/services/4.jpg",
  },
  {
    title: "افضل شركة تلميع سيارات بالرياض",
    description: `إذا كنت تبحث عن شركة متخصصة في تلميع سيارات، فنحن شركة تلميع سيارات بالرياض نقدم العديد من الخدمات المختلفة، لكس تحصل على خدمتك. كذلك تحت إشراف فريق من الخبراء المتخصصين في هذا المجال. أيضًا نضمن لك الحصول على جودة عالية ودقيقة، بالإعتماد على الأساليب والتقنسات الحديثة التص تصل إلى أدق الأماكن.

بالإضافة إلى ذلك نسعي جاهدين لتلبية كافة احتياجاتك، لذلك نوفر لك أسعار رمزية مقابل جودة عالية، للتناسب مع جميع الفئات. فإذا كنت تريد الحصول على أفضل خدمة تلميع سيارات بالرياض، فيمكنك الآن التواصل معنا فسوف يقوم أحد من ممثلي خدمة العملاء بالرد على استفساراتك،








`,
    image: "/services/6.jpg",
  },
];

export function ServicesSection() {
  // Handle WhatsApp Click Event
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9660560280857", "_blank");
  };

  return (
    <section className="py-16 bg-[#DBE2EF]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#112D4E]">
          فريقنا
        </h2>
        <p className="text-center text-[#3F72AF] mb-12">
          يقودنا فريق لا يتوقف عن التفكير والإبداع. ويحرص دومًا على دفعنا إلى
          الأمام.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#3F72AF] text-white px-3 py-1 rounded-full">
                  Steam Care
                </div>
                <div className="absolute top-4 left-4 bg-[#112D4E] text-white px-3 py-1 rounded-full">
                  0560280857
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#112D4E]">
                  {service.title}
                </h3>
                <p className="text-[#3F72AF] mb-4 whitespace-pre-wrap">
                  {service.description}
                </p>
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
  );
}
