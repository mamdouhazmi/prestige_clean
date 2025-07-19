import { Card } from "@/components/ui/card"
import { Bed } from 'lucide-react'

export default function ServicesProvide() {
  const services = [
    "غسيل مجالس بالرياض",
    "تنظيف كنب بالبخار",
    "اسعار غسيل السجاد بالرياض",
    "تنظيف فرش",
    "تنظيف كنب",
    "تنظيف كنبات",
    "جهاز غسيل الفرش",
    "شركة تنظيف كنب",
    "شركة غسيل سجاد",
    "شركة تنظيف الكنب المتنقل",
    "غسيل المفارش",
    "غسيل الكنب",
    "غسيل سجاد",
    "ماكينة تنظيف الكنب",
    "مغسلة سجاد",
    "ارخص شركة تنظيف كنب بالرياض",
    "اسعار تنظيف الكنب",
    "افضل منظف للكنب",
    "تجاربكم مع تنظيف الكنب",
    "تنظيف الزربي في المنزل",
    "تنظيف السجاد على الناشف",
    "تنظيف الصوف",
    "تنظيف الكنب المتسخ",
    "تنظيف الموكيت",
    "غسيل الموكيت",
    "تنظيف الكنبات",
    "تنظيف سجادات",
    "تنظيف قماش الكنب",
    "تنظيف موكيت الرياض",
    "رقم شركة تنظيف كنب",
    "شركات غسيل السجاد",
    "شركة تنظيف المساجد",
    "شركة غسيل المساجد",
    "شركة تنظيف ستائر",
    "شركة تنظيف كنب بالبخار عمالة فلبينية",
    "طرق تنظيف الكنب في المنزل",
    "شركة تنظيف الكنب شرق الرياض",
    "طريقة تنظيف ستائر الرول",
    "غسالة سجاد",
    "غسيل سجاد البيت"
  ]

  return (
    <section className="py-16 bg-[#F9F7F7]" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#112D4E]">خدماتنا</h2>
        <p className="text-center text-[#3F72AF] mb-8 text-lg">
          نمتلك خبرة طويلة في مجالنا ولذلك نستطيع تقديم خدمات متميزة لك
        </p>
        <Card className="p-8 bg-white shadow-lg">
          <div className="flex items-center justify-start mb-6">
            <Bed className="w-6 h-6 text-[#3F72AF] ml-2" />
            <h3 className="text-2xl font-bold text-[#112D4E]">الكلمات المفتاحية</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-right">
            {services.map((service, index) => (
              <li
                key={index}
                className="text-[#112D4E] hover:text-[#3F72AF] transition-colors cursor-pointer text-lg"
              >
                {service}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
