'use client'

import { AlertTriangle, MonitorSmartphone, Clock, Rocket, Sparkles, ShieldCheck } from 'lucide-react'

export default function CarDetailingFAQ() {
  return (
    <div className="py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#112D4E]">اسئلة واجوبة عن تلميع السيارات</h1>
        <p className="text-center mb-12 text-[#3F72AF]">شركة تلميع سيارات بالرياض</p>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <Rocket className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4 text-[#112D4E]">نصائح لاختيار شركة تلميع سيارات متنقل في الرياض:</h2>
                <ul className="space-y-2 text-[#3F72AF]">
                  <li>ابحث عن شركة ذو سمعة جيدة واسأل اصدقائك وصلاتك عن أفضل شركات التلميع في الرياض</li>
                  <li>قارن الأسعار: اطلب عروض أسعار من عدة محلات قبل اتخاذ القرار</li>
                  <li>تأكد من استخدام مواد تنظيف عالية الجودة: يجب أن يكون المحل يستخدم مواد تنظيف آمنة وموثوقة</li>
                  <li>اطلب ضمان على الخدمة: يجب ان تقدم الشركة ضمانا على عمله</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
              <h2 className="text-xl font-bold mb-4 text-[#112D4E]">ما هي خطوات عملية تلميع السيارة من الداخل؟</h2>
                <p className="text-[#3F72AF]">
                  تبدأ عملية التلميع بإزالة الأتربة والأوساخ المستخدم. ثم تنظيف المقاعد والسجاد والكونسول الأمامية. وتلميع الأسطح البلاستيكية. وتنظيف الزجاج وتعقيم فتحات التكييف. وتعطير السيارة
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <MonitorSmartphone className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
              <h2 className="text-xl font-bold mb-4 text-[#112D4E]">ما هي تكلفة تلميع السيارة من الداخل في الرياض؟</h2>
                <p className="text-[#3F72AF] mb-4">
                  تختلف الأسعار حسب نوع السيارة وحجمها والمواد المستخدمة والشركة التي تقدم الخدمة. ولكن بشكل عام تبدأ الأسعار تبدأ من 200 ريال سعودي
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4 text-[#112D4E]">ما هي المواد المستخدمة في تلميع السيارات من الداخل؟</h2>
                <p className="text-[#3F72AF]">
                  تستخدم مواد تنظيف وتلميع خاصة بالسيارات وهي آمنة على جميع انواع المفروشات والأسطح الداخلية وتعمل بفعالية على إزالة الأوساخ والبقع دون إتلاف السطح.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4 text-[#112D4E]">ما هي المدة التي تستغرقها عملية تلميع السيارة من الداخل؟</h2>
                <p className="text-[#3F72AF]">
                  تختلف المدة حسب حجم السيارة ودرجة الاتساخ. ولكن بشكل عام تستغرق العملية من ساعة إلى ساعتين
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-4 text-[#112D4E]">ما هي أهمية تلميع السيارة من الداخل؟</h2>
                <p className="text-[#3F72AF]">
                  تلميع السيارة من الداخل يحافظ على مظهرها الجديد ويطيل عمر المفروشات ويعقم الأسطح ويحميها من التراكم ويحسن من جودة الهواء داخل السيارة ويضيف قيمة جمالية للسيارة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
