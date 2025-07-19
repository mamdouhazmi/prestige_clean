import { Rocket, MonitorSmartphone, Clock, Sparkles, ShieldCheck } from 'lucide-react'

export function FAQSection() {
  return (
    <section className="py-16" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#112D4E]">غسيل سيارات بالبخار</h2>
        <p className="text-center text-[#3F72AF] mb-12 text-xl">سؤال وجواب عن غسيل السيارات المتنقل</p>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <Rocket className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#112D4E]">ما هو غسيل مراتب السيارة بالبخار؟</h3>
                <p className="text-lg text-[#3F72AF] mb-4">
                  غسيل مراتب السيارة بالبخار هي تقنية حديثة لتنظيف عميق لمراتب السيارة باستخدام بخار الماء الساخن. تحت ضغط عالي يتم توجيه البخار إلى أعمق أجزاء المراتب لإزالة الأوساخ والبقع والروائح الكريهة والجراثيم والبكتيريا.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <Sparkles className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#112D4E]">ما هي فوائد غسيل مراتب السيارة بالبخار؟</h3>
                <ul className="space-y-3 text-lg text-[#3F72AF]">
                  <li>تنظيف عميق: يزيل البخار الأوساخ العالقة في أعمق أجزاء المراتب حتى تلك التي يصعب الوصول إليها بالطرق التقليدية.</li>
                  <li>تعقيم فعال: يقتل البخار الجراثيم والبكتيريا والفطريات التي قد تتسبب في الحساسية أو الأمراض.</li>
                  <li>إزالة الروائح الكريهة: يقضي البخار على الروائح الناتجة عن الطعام أو المشروبات أو الحيوانات الأليفة.</li>
                  <li>حماية المراتب: يطيل عمر المراتب ويحافظ على مظهرها الجديد.</li>
                  <li>صديق للبيئة: لا يستخدم في هذه الطريقة مواد كيميائية ضارة.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <MonitorSmartphone className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#112D4E]">ما هي خطوات غسيل مراتب السيارة بالبخار؟</h3>
                <ul className="space-y-3 text-lg text-[#3F72AF]">
                  <li>1. التحضير: يتم إزالة أي أغراض شخصية من المراتب.</li>
                  <li>2. التنظيف المبدئي: يتم إزالة الأتربة والبقع السطحية باستخدام المكنسة الكهربائية.</li>
                  <li>3. التبخير: يتم توجيه البخار الساخن إلى جميع أجزاء المراتب مع التركيز على المناطق الأكثر اتساخاً.</li>
                  <li>4. التجفيف: يتم استخدام مكنسة كهربائية قوية لامتصاص الرطوبة المتبقية.</li>
                  <li>5. التعقيم: في بعض الحالات، يتم استخدام معقم إضافي لضمان القضاء على الجراثيم.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <Clock className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#112D4E]">ما هي تكلفة غسيل مراتب السيارة بالبخار؟</h3>
                <p className="text-lg text-[#3F72AF]">
                  تختلف التكاليف حسب حجم السيارة ونوع المراتب ومدى الاتساخ. ولكن بشكل عام تكون الأسعار معقولة مقارنة بالفوائد التي تحصل عليها.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#3F72AF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#112D4E]">نصائح لاختيار شركة تنظيف مراتب السيارة بالبخار:</h3>
                <ul className="space-y-3 text-lg text-[#3F72AF]">
                  <li>السمعة: ابحث عن شركة ذات سمعة جيدة وتقييمات إيجابية من العملاء السابقين.</li>
                  <li>الخبرة: اختر شركة لديها خبرة جيدة في مجال تنظيف السيارات بالبخار.</li>
                  <li>المواد المستخدمة: تأكد من أن الشركة تستخدم مواد تنظيف آمنة وفعالة.</li>
                  <li>الضمان: اسأل عن الضمانات التي تقدمها الشركة على عملها.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
