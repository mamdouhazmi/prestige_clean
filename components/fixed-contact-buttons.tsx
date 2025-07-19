'use client'

import { Phone, MessageCircle } from 'lucide-react'

export function FixedContactButtons() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9660560280857', '_blank')
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+966560280857'
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 flex justify-between z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        aria-label="تواصل معنا واتساب"
      >
        <MessageCircle size={40} />
      </button>
      <button
        onClick={handlePhoneClick}
        className="bg-[#3F72AF] hover:bg-[#112D4E] text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        aria-label="اتصل الان"
      >
        <Phone size={40} />
      </button>
    </div>
  )
}
