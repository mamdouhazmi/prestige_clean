import { Card } from "@/components/ui/card"

export default function ServicesProvide() {
  const services = [
    "افضل شركة غسيل مراتب السيارة بالبخار",
    "شركة تنظيف مراتب",
    "غسيل مراتب السيارة",
    "تنظيف مراتب سيارات",
    "اسعار غسيل سيارات متنقل",
    "تطبيق غسيل سيارات الرياض",
    "غسيل سيارات السويدي",
    "غسيل سيارات بالبخار الصفا",
    "تطبيقات غسيل السيارات",
    "غسيل سيارات عند البيت",
    "ارخص غسيل سيارات متنقل",
    "سعر غسيل السيارة من الداخل",
    "غسيل مراتب السيارة الرياض",
    "��فضل منظف مقاعد السيارة القماش",
    "غسيل سيارات متنقل الرياض رخيص",
    "افضل مغسلة سيارات في الرياض",
    "غسيل سيارة",
    "ارخص محل غسيل سيارات بالرياض",
    "غسيل داخلي للسيارات",
    "غسيل متنقل",
    "مغسلة سيارات متنقلة",
    "غسيل السيارات",
    "افضل غسيل سيارات متنقل الرياض",
    "تلميع سيارات في بيتك",
    "غسيل مقاعد السيارة",
    "مغسلة بخار سيارات",
    "غسيل السيارات المتنقل",
    "car wash in riyadh",
    "شركات غسيل السيارات"
  ]

  return (
    <section className="py-16 bg-[#F9F7F7]" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#112D4E]">خدماتنا</h2>
        <p className="text-center text-[#3F72AF] mb-8">
          نمتلك خبرة طويلة في مجالنا ولذلك نستطيع تقديم خدمات متميزة لك
        </p>
        <Card className="p-6 bg-[#DBE2EF]">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <li
                key={index}
                className="text-[#112D4E] hover:text-[#3F72AF] transition-colors cursor-pointer flex items-center"
              >
                <span className="ml-2">•</span>
                {service}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
