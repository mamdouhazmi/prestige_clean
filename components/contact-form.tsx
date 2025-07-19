"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { sendEmail } from "@/app/actions/send-email"


export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-[#3F72AF]" />,
      title: "عنوان الشركة",
      content: ["الرياض خدمة متنقلة في", "جميع مناطق الرياض"]
    },
    {
      icon: <Phone className="h-6 w-6 text-[#3F72AF]" />,
      title: "رقم الهاتف",
      content: ["0560280857"]
    },
    {
      icon: <Mail className="h-6 w-6 text-[#3F72AF]" />,
      title: "اتصل بنا",
      content: ["اترك رسالتك وسنصل اليك"]
    }
  ]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    const formData = new FormData(event.currentTarget)

    try {
      const result = await sendEmail(formData)
      setIsSuccess(result.success)
      setMessage(result.message)
    } catch  {
      setIsSuccess(false)
      setMessage('حدث خطأ أثناء إرسال الرسالة')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-[#DBE2EF]" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#112D4E]">تواصل معنا للشكاوي والاستفسارات</h2>
        <p className="text-center mb-8 text-[#3F72AF]">جميع الشكاوي تخضع لرقابة مباشرة من الإدارة العامة</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-full mb-4">
                {info.icon}
              </div>
              <h3 className="font-semibold mb-2 text-[#112D4E]">{info.title}</h3>
              {info.content.map((line, lineIndex) => (
                <p key={lineIndex} className="text-sm text-[#3F72AF]">{line}</p>
              ))}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-[#F9F7F7] p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-[#112D4E] mb-2">سجل رقمك</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="سجل رقمك"
                className="w-full px-3 py-2 bg-gray-100 text-[#112D4E] rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-[#112D4E] mb-2">نوع الطلب</label>
              <input
                id="type"
                name="type"
                type="text"
                placeholder="شكوى"
                className="w-full px-3 py-2 bg-gray-100 text-[#112D4E] rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#112D4E] mb-2">اكتب رسالتك</label>
              <textarea
                id="message"
                name="message"
                placeholder="وصف الشكوى"
                className="w-full px-3 py-2 h-32 bg-gray-100 text-[#112D4E] rounded-md"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`w-full bg-[#3F72AF] hover:bg-[#112D4E] text-[#F9F7F7] py-2 px-4 rounded-md transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? "جاري الإرسال..." : "إرسال"}
            </button>
          </div>
        </form>

        {message && (
          <div className={`mt-4 p-2 rounded text-center ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message}
          </div>
        )}

        <div className="fixed bottom-6 left-6 flex flex-col gap-4">
          <a
            href="https://wa.me/0560280857"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
