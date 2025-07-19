import Image from "next/image"

export default function CarWashServices() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 lg:p-8 bg-[#F9F7F7]" dir="rtl">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-right text-[#112D4E]">
            خدمات غسيل سيارات بالبخار
          </h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-[#3F72AF]">غسيل السيارات الخارجي:</h3>
              <p className="text-[#112D4E]">
                نقوم بغسل سيارتك من الخارج باستخدام أفضل أنواع الشامبو والملمعات للحصول على لمعة براقة.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-[#3F72AF]">غسيل السيارات الداخلي:</h3>
              <p className="text-[#112D4E]">
                نقدم خدمات تنظيف شاملة لداخل سيارتك بما في ذلك تنظيف المقاعد والأرضيات والزجاج ولوحة القيادة.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-[#3F72AF]">تلميع السيارات:</h3>
              <p className="text-[#112D4E]">
                نقوم بتلميع سيارتك لإزالة الخدوش والبقع للحصول على مظهر جديد ولامع.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-[#3F72AF]">تنظيف محرك السيارة:</h3>
              <p className="text-[#112D4E]">
                نستخدم معدات خاصة ومواد تنظيف فعالة وآمنة لتنظيف محرك سيارتك وإزالة الزيوت والأوساخ.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-[#DBE2EF] rounded-2xl p-8 shadow-lg">
            <Image
              src="/Background5.jpg"
              alt="Car wash service illustration"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
