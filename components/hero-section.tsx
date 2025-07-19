"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Star, Shield, Clock } from "lucide-react"
import { OptimizedImage } from "./optimized-image"
import { motion } from "framer-motion"

export function HeroSection() {
  const primaryPhoneNumber = "0560280857"
  const newPhoneNumber = "0582807319"
  const whatsappLink = "http://wa.me/966582807319"

  const features = [
    { icon: Star, text: "أفضل أنواع المنظفات" },
    { icon: Shield, text: "أحدث الأجهزة المستخدمة" },
    { icon: Clock, text: "خدمة سريعة ومضمونة" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/Background.jpg"
          alt="خدمات غسيل وتلميع السيارات بالبخار - Prestige Clean"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B]/65 via-[#1E293B]/50 to-[#1E40AF]/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              الشركة الأولى بالرياض
              <span className="block text-[#F59E0B] mt-2">لخدمات غسيل وتلميع السيارات بالبخار</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 px-4"
          >
            خدمة متنقلة احترافية • تنظيف عميق • نتائج مضمونة
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4"
              >
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Special Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-[#1E293B] rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 shadow-2xl mx-4"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">عرض خاص!</h3>
            <p className="text-base sm:text-lg md:text-xl">خصم 30% لفترة محدودة + ضمان شامل على كافة أعمالنا</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20B358] text-white w-full sm:min-w-[250px] h-12 sm:h-14 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
              تواصل معنا واتساب
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:min-w-[250px] h-12 sm:h-14 text-base sm:text-lg font-bold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#1E293B] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              onClick={() => (window.location.href = `tel:+966${primaryPhoneNumber}`)}
            >
              <Phone className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">اتصل الآن: {primaryPhoneNumber}</span>
              <span className="sm:hidden">اتصل الآن</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:min-w-[250px] h-12 sm:h-14 text-base sm:text-lg font-bold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#1E293B] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              onClick={() => (window.location.href = `tel:+966${newPhoneNumber}`)}
            >
              <Phone className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">اتصل الآن: {newPhoneNumber}</span>
              <span className="sm:hidden">اتصل الآن</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 sm:top-20 right-6 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#F59E0B]/20 rounded-full animate-bounce" />
      <div className="absolute bottom-16 sm:bottom-20 left-6 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#1E40AF]/20 rounded-full animate-pulse" />
    </section>
  )
}
