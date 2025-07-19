import { Rocket, Wine, MonitorSmartphone } from 'lucide-react'

export function FAQSection() {
  return (
    <section className="py-16" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#112D4E]">اسئلة واجابات عن تنظيف الكنب</h2>
        <p className="text-center text-[#3F72AF] mb-12 text-xl">نمتلك خبرة طويلة في مجالنا ولذلك نستطيع تقديم خدمات متميزة لك</p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-6 mb-4">
              <Rocket className="w-8 h-8 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#112D4E]">ما هي الخدمات التي تقدمها شركات تنظيف الكنب في الرياض؟</h3>
                <p className="text-lg text-[#3F72AF] mb-4">شركات تنظيف الكنب في الرياض تقدم مجموعة متكاملة من الخدمات المتخصصة للحفاظ على جودة الأثاث وضمان نظافته الدائمة. تركز هذه الخدمات على عدة مجالات رئيسية:</p>
                <ul className="space-y-3 text-lg text-[#3F72AF]">
                  <li>تشمل تنظيف الكنب، إزالة البقع، التعقيم والتطهير.</li>
                  <li>استخدام تقنيات التنظيف بالبخار وتجديد مظهر الأثاث.</li>
                  <li>إزالة تنظيف الكنب يعتبر أساسياً في خدمات هذه الشركات.</li>
                  <li>يتضمن هذا التنظيف إزالة الأتربة والغبار المتراكم على سطح الكنب وفي الأقمشة الداخلية.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-6 mb-4">
              <Wine className="w-8 h-8 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#112D4E]">كيف يتم تنظيف السجاد بشكل احترافي؟</h3>
                <p className="text-lg text-[#3F72AF] mb-4">تشمل عملية تنظيف السجاد بشكل احترافي مجموعة من الخطوات المدروسة التي تهدف إلى إزالة الأوساخ والبقع بكفاءة عالية:</p>
                <ul className="space-y-3 text-lg text-[#3F72AF]">
                  <li>أول وأهم خطوة هي تحديد نوع السجاد حيث تختلف أنواع السجاد في نسيجها وتركيبها، مما يحدد الطريقة المناسبة لتنظيفها.</li>
                  <li>نستخدم تقنيات متعددة لتنظيف السجاد بشكل احترافي، ومن أبرزها التنظيف بالبخار.</li>
                  <li>يتم استخدام جهاز بخار السجاد الماء إلى درجات حرارة عالية ثم يضخ البخار في ألياف السجاد.</li>
                  <li>هناك أيضاً طريقة التنظيف الجاف، والتي تكون مناسبة للسجاد الحساس.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-6 mb-4">
              <MonitorSmartphone className="w-8 h-8 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#112D4E]">ما هي المعايير المهمة في اختيار شركة تنظيف محترفة؟</h3>
                <p className="text-lg text-[#3F72AF] mb-4">عند البحث عن شركة تنظيف كنب محترفة في الرياض، من المهم النظر في عدة معايير لضمان الحصول على خدمة عالية الجودة:</p>
                <ul className="space-y-3 text-lg text-[#3F72AF]">
                  <li>ثانياً: الخبرة تعتبر عاملاً حاسماً في تحديد كفاءة الشركة.</li>
                  <li>الشركات التي لديها سنوات من الخبرة في تنظيف الكنب والسجاد والفرش والمجالس تمتلك القدرة على التعامل مع مختلف أنواع الأقمشة.</li>
                  <li>التراخيص والشهادات تعتبر مؤشر آخر على احترافية الشركة.</li>
                  <li>يجب التأكد من أن الشركة تمتلك التراخيص اللازمة للعمل في هذا المجال.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
