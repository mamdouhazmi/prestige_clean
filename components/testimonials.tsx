import Image from "next/image"

const testimonials = [
  {
    name: "امير الشهري",
    role: "عميل",
    content: "تم التعامل مع الشركة التواصل ممتاز ممتاز ممتاز مبدعين ماشاء الله👍",
    image: "/testimonials/testimonial-1.jpg",
  },
  {
    name: "احمد العنزي",
    role: "عميل",
    content: "افضل شركة تنظيف بالرياض الله يعطيهم العافيه رجعوا سيارتي وكاله",
    image: "/testimonials/testimonial-2.jpg",
  },
  {
    name: "د.معتز",
    role: "عميل",
    content:
      "شركة رائده .. اتوقع لها مستقبل بالمنافسه بالسوق .. اثق بها وبجودتها .. كل الشكر للقائمين عليها .. يتميزون بالتنسيق الاداري فيما بينهم بالمواعيد والجوده",
    image: "/testimonials/testimonial-3.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {" "}
        {/* Added mx-auto px-4 for consistent centering and padding */}
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">ماذا يقول عملاؤنا</h2>
        <p className="mb-12 text-center">مئات يعتمدون على خدماتنا ..</p>
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {" "}
          {/* Added max-w-4xl mx-auto to center the grid */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
