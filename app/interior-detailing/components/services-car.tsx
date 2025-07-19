"use client"

import { Monitor, Wine, Rocket } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardContent className="flex flex-col items-center p-8 text-center">
        <div className="mb-6 text-[#3F72AF] transition-colors duration-300 group-hover:text-[#112D4E]">
          {icon}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-[#112D4E]">{title}</h3>
        <p className="text-base leading-relaxed text-[#3F72AF] rtl">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function ServicesCar() {
  const services = [
    {
      icon: <Monitor className="h-16 w-16" />,
      title: "تلميع سيارات الشفا",
      description: "أصبحت التقنيات الحديثة في تلميع السيارات تشكل نقلة نوعية في العناية بالمركبات. التلميع بالليزر يزيل الخدوش السطحية بفعالية، بينما يوفر التلميع بالنانو تكنولوجي سطحًا أملس وبراقًا. أما تلميع السيراميك فيضيف طبقة حماية قوية ضد الخدوش والعوامل البيئية."
    },
    {
      icon: <Wine className="h-16 w-16" />,
      title: "تلميع سيارات متنقل شمال الرياض",
      description: "للحفاظ على لمعان السيارة، يجب غسلها بمنظفات مخصصة واستخدام الشموع والعوازل لحماية الطلاء. تجنب التعرض المباشر لأشعة الشمس والوقوف تحت الأشجار. نظف السيارة من الداخل بانتظام واستخدم المنظفات المناسبة للأسطح الداخلية."
    },
    {
      icon: <Rocket className="h-16 w-16" />,
      title: "كيفية اختيار شركة تلميع سيارات محترفة بالرياض",
      description: "عند اختيار شركة تلميع سيارات في الرياض، انظر إلى خبرتها المهنية وجودة المواد المستخدمة. راجع تقييمات العملاء السابقين واستخدم الإنترنت للبحث عن الشركات وقراءة المراجعات. قارن العروض والأسعار قبل اتخاذ القرار النهائي لضمان الحصول على خدمة عالية الجودة."
    }
  ]

  return (
    <section className="bg-[#F9F7F7] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-[#112D4E]">خدماتنا</h2>
          <p className="text-xl text-[#3F72AF]">نمتلك خبرة طويلة في مجالنا وبذلك نستطيع تقديم خدمات متميزة لك</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
