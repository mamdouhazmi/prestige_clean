export function ServicesSection() {
  const services = [
    "شفط الاتربه والغبار من داخل السيارة",
    "تنظيف وتلميع ديكورات السيارة",
    "تنظيف وتلميع الطبلون بافضل المواد",
    "تنظيف وتلميع فتحات المكيف",
    "تنظيف وتلميع الابواب وشنطة السيارة",
    "تنظيف وتلميع الجدران والسقف",
    "غسيل المراتب وفرشات السيارة بالبخار وازالة اصعب البقع منها",
    "تنظيف وتلميع وتعقيم وتعطير كامل للسيارة",
    "تلميع الكفرات والجنوط",
    'غسيل خارجي بالبخار وشامبو"wax"',
    "غسيل وتنظيف شنطة السيارة بالبخار",
    "تلميع خارجي بالصاروخ والمواد الايطالية",
    "تنظيف المجالس والكنب والسجاد بالبخار",
    "غسيل سيارات بالبخار"
  ]

  return (
    <section className="py-16 bg-[#DBE2EF]" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#112D4E]">خدمات الشركة</h2>
        <h3 className="text-2xl text-center mb-12 text-[#3F72AF]">باقة تناسب احتياجك</h3>
        <p className="text-center mb-8 text-[#112D4E]">
          لدينا باقات متنوعة وشاملة لتلميع سيارات متنقل بالرياض تناسب احتياجك فنحن مختصون بالتنظيف وتلميع داخلي للسيارة كلها من المراتب - غسيل الفرش - السقف - شنطة السيارة - الديكورات الداخلية. خلي مهمة تلميع سيارتك علينا
        </p>
        <div className="grid gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-start gap-2">
              <span className="font-bold text-xl text-[#3F72AF] ml-2 min-w-[2ch]" dir="ltr">-{(index + 1).toString().padStart(2, '0')}</span>
              <span className="text-[#112D4E] text-lg">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
