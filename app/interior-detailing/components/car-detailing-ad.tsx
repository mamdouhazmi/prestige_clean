'use client'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

export default function CarDetailingAd() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9660560280857', '_blank')
  }

  return (
    <div className="bg-[#F9F7F7] p-4 min-h-screen flex items-center justify-center" dir="rtl">
      <Card className="w-full max-w-5xl overflow-hidden border-[#DBE2EF]">
        <CardContent className="p-0 flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="flex-1 p-6 space-y-4 bg-[#F9F7F7]">
            <h1 className="text-4xl font-bold text-right text-[#112D4E]">
              افضل شركة تلميع سيارات بالرياض
            </h1>
            <p className="text-right text-base text-[#112D4E]">
              إذا كنت تبحث عن شركة متخصصة في <span className="bg-[#DBE2EF] px-1">تلميع سيارات</span> فنحن
              شركة تلميع سيارات بالرياض نقدم العديد من الخدمات
              المختلفة، لكي تحصل على خدمتك. كذلك تحت إشراف فريق
              من الخبراء المتخصصين في هذا المجال. أيضا نضمن لك
              الحصول على جودة عالية ودقيقة، بالإعتماد على الأساليب
              والتقنيات الحديثة التي تصل إلى أدق الأماكن.
            </p>
            <p className="text-right text-base text-[#112D4E]">
              بالإضافة إلى ذلك نسعى جاهدين لتلبية كافة احتياجاتك.
              لذلك نوفر لك أسعار رمزية مقابل جودة عالية للتناسب مع
              جميع الفئات. فإذا كنت تريد الحصول على أفضل خدمة
              تلميع سيارات بالرياض، فيمكنك الآن التواصل معنا فسوف
              يقوم أحد من ممثلي خدمة العملاء بالرد على استفساراتك.
              ولمعرفة المزيد تابع هذا المقال.
            </p>
          </div>

          {/* Image and Contact Info */}
          <div className="bg-[#112D4E] flex-1 p-6 flex flex-col justify-between">
            <div className="text-right mb-4">
              <Button 
                size="lg"
                className="bg-[#3F72AF] hover:bg-[#112D4E] text-white min-w-[200px]"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="ml-2" />
                تواصل معنا واتساب
              </Button>
            </div>
            <div className="space-y-2 text-right mb-4">
              <h2 className="text-3xl font-bold text-[#F9F7F7]">Steam Care</h2>
              <p className="text-2xl font-semibold text-[#F9F7F7]">0560280857</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/services/9B.jpg?height=100&width=225"
                alt="Before car seat cleaning"
                width={225}
                height={300}
                className="w-full h-auto object-cover rounded-lg border-2 border-[#DBE2EF]"
              />
              <Image
                src="/services/9A.jpg?height=100&width=225"
                alt="After car seat cleaning"
                width={225}
                height={300}
                className="w-full h-auto object-cover rounded-lg border-2 border-[#DBE2EF]"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
