"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Droplets, Shield, Sparkles, Award } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { motion } from "framer-motion"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9660560280857", "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+9660560280857"
  }

  const benefits = [
    { icon: Droplets, text: "تنظيف بالبخار", color: "text-blue-500" },
    { icon: Shield, text: "تعقيم شامل", color: "text-green-500" },
    { icon: Sparkles, text: "إزالة البقع", color: "text-purple-500" },
    { icon: Award, text: "نتائج مضمونة", color: "text-yellow-500" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/Background3.jpg"
          alt="غسيل مراتب السيارة بالبخار - Prestige Clean"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#112D4E]/95 via-[#3F72AF]/75 to-[#112D4E]/85" />

        {/* Animated Steam Effects */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-blue-400/10 rounded-full animate-bounce" />
        <div className="absolute top-1/2 right-1/2 w-20 h-20 bg-white/10 rounded-full animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-400/30">
              <Droplets className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold">تقنية البخار المتقدمة</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">غسيل وتنظيف المراتب</span>
              <span className="block text-[#87CEEB] mt-2">مع إزالة أصعب البقع</span>
              <span className="block text-[#FFD700] mt-2 text-2xl md:text-4xl">بالبخار والمواد الإيطالية</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
              تنظيف عميق وتعقيم شامل لمراتب السيارة باستخدام أحدث تقنيات البخار
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <benefit.icon className={`w-10 h-10 ${benefit.color} mx-auto mb-3`} />
                <span className="text-sm md:text-base font-medium block">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              عملية التنظيف المتقدمة
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-base md:text-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">1</div>
                <span>تحضير وفحص</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">2</div>
                <span>تنظيف بالبخار</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">3</div>
                <span>تعقيم وتجفيف</span>
              </div>
            </div>
          </motion.div>

          {/* Special Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#112D4E] rounded-2xl p-6 mb-8 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">عرض محدود!</h3>
            <p className="text-lg md:text-xl">عائد استثمار مرئي ونتائج مستمرة</p>
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
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="ml-2 w-6 h-6" />
              تواصل معنا واتساب
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[280px] h-16 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#112D4E] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              onClick={handlePhoneClick}
            >
              <Phone className="ml-2 w-6 h-6" />
              اتصل الآن: 0560280857
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
