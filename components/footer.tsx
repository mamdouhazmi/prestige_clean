"use client"

import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const primaryPhoneNumber = "0560280857"
  const newPhoneNumber = "0582807319"
  const whatsappLink = "http://wa.me/966582807319"
  const tiktokLink = "https://www.tiktok.com/@prestige_clean1?_t=ZS-8y6wpZRJdzx&_r=1"
  const instagramLink = "https://www.instagram.com/prestige_clean172000?igsh=dXVscjdja3A2dXhz&utm_source=qr"

  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-[#112D4E] text-white py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-2">
              <a
                href={`tel:+966${primaryPhoneNumber}`}
                className="flex items-center justify-center gap-2 text-lg hover:text-gray-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{primaryPhoneNumber}</span>
              </a>
              <a
                href={`tel:+966${newPhoneNumber}`}
                className="flex items-center justify-center gap-2 text-lg hover:text-gray-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{newPhoneNumber}</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-lg hover:text-gray-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors" onClick={handleLinkClick}>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/car-polishing" className="hover:text-gray-300 transition-colors" onClick={handleLinkClick}>
                  تلميع سيارات
                </Link>
              </li>
              <li>
                <Link
                  href="/steam-seat-cleaning"
                  className="hover:text-gray-300 transition-colors"
                  onClick={handleLinkClick}
                >
                  غسيل مراتب بالبخار
                </Link>
              </li>
              <li>
                <Link
                  href="/interior-detailing"
                  className="hover:text-gray-300 transition-colors"
                  onClick={handleLinkClick}
                >
                  تلميع متنقل
                </Link>
              </li>
              <li>
                <Link
                  href="/mobile-steam-cleaning"
                  className="hover:text-gray-300 transition-colors"
                  onClick={handleLinkClick}
                >
                  غسيل بالبخار متنقل
                </Link>
              </li>
              <li>
                <Link
                  href="/furniture-cleaning"
                  className="hover:text-gray-300 transition-colors"
                  onClick={handleLinkClick}
                >
                  تنظيف المجالس
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex justify-center gap-6">
              <a
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/icons/tiktok.png" alt="TikTok" className="w-8 h-8" />
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            حقوق النشر © من 2010 الي 2024 جميع الحقوق محفوظة شركة ستيم كير لخدمات التنظيف والتعقيم
          </p>
        </div>
      </div>
    </footer>
  )
}
