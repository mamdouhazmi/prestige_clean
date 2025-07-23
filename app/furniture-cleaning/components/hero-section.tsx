"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Home, Sparkles, Shield, Award } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { motion } from "framer-motion"

export function HeroSection() {
  const primaryPhoneNumber = "0560280857"
  const newPhoneNumber = "0582807319"
  const whatsappLink = "https://wa.me/9660560280857"

  const furnitureServices = [
    { icon: Home, text: "تنظيف المجالس", color: "text-blue-500" },
    { icon: Sparkles, text: "غسيل الكنب", color: "text-purple-500" },
    { icon: Shield, text: "تعقيم الأقمشة", color: "text-green-500" },
    { icon: Award, text: "إزالة البقع", color: "text-red-500" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <OptimizedImage
          src="/Background7.jpg"
          alt="تنظيف المجالس والكنب بالرياض - Ghaseloo"
          fill
          priority
          className="object-cover w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#112D4E]/70 via-[#3F72AF]/50 to-[#112D4E]/65" />

        {/* Furniture Cleaning Animation */}
        <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-lg animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-green-400/20 rounded-lg animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-purple-400/30">
              <Home className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-semibold">تنظيف المفروشات المنزلية</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">شركة تنظيف المجالس</span>
              <span className="block text-[#DDA0DD] mt-2">والكنب والسجاد</span>
              <span className="block text-[#FFD700] mt-2 text-2xl md:text-4xl">والمفروشات</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
              عائد استثمار مرئي ونتائج مستمرة لجميع أنواع المفروشات
            </p>
          </motion.div>

          {/* Furniture Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {furnitureServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <service.icon className={`w-10 h-10 ${service.color} mx-auto mb-3`} />
                <span className="text-sm md:text-base font-medium block">{service.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Cleaning Types */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-pink-400" />
              خدماتنا الشاملة
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-base md:text-lg">
              <div>المجالس العربية • الكنب الحديث</div>
              <div>السجاد والموكيت • الستائر</div>
              <div>المراتب • الوسائد</div>
            </div>
          </motion.div>

          {/* Steam Benefits */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#112D4E] rounded-2xl p-6 mb-8 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">مميزات التنظيف بالبخار</h3>
            <div className="grid md:grid-cols-3 gap-4 text-base md:text-lg font-semibold">
              <div>• تعقيم طبيعي 100%</div>
              <div>• إزالة البقع العنيدة</div>
              <div>• آمن على الأطفال</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white min-w-[280px] h-16 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="ml-2 w-6 h-6" />
              تواصل معنا واتساب
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[280px] h-16 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#112D4E] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              onClick={() => (window.location.href = `tel:+966${primaryPhoneNumber}`)}
            >
              <Phone className="ml-2 w-6 h-6" />
              اتصل الآن: {primaryPhoneNumber}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[280px] h-16 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#112D4E] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              onClick={() => (window.location.href = `tel:+966${newPhoneNumber}`)}
            >
              <Phone className="ml-2 w-6 h-6" />
              اتصل الآن: {newPhoneNumber}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
