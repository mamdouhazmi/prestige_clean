"use client"
import Image from "next/image" // Added import for Image component

export function FixedContactButtons() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966582807319", "_blank") // Updated WhatsApp number
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+966582807319" // Updated phone number
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 flex justify-between z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-xl transition-colors duration-200 flex items-center justify-center w-16 h-16" // Enhanced UI
        aria-label="تواصل معنا واتساب"
      >
        <Image src="/icons/icons8-whatsapp-logo-100.png" alt="WhatsApp Icon" width={40} height={40} /> {/* Replaced Lucide icon with Image */}
      </button>
      <button
        onClick={handlePhoneClick}
        className="bg-[#3F72AF] hover:bg-[#112D4E] text-white rounded-full p-4 shadow-xl transition-colors duration-200 flex items-center justify-center w-16 h-16" // Enhanced UI
        aria-label="اتصل الان"
      >
        <Image src="/icons/phone.png" alt="Phone Icon" width={40} height={40} /> {/* Replaced Lucide icon with Image */}
      </button>
    </div>
  )
}
