"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Star, Shield, Clock, Award } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { motion } from "framer-motion"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9660560280857", "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+9660560280857"
  }

  const features = [
    { icon: Star, text: "تلميع احترافي", color: "text-yellow-500" },
    { icon: Shield, text: "ضمان شامل", color: "text-green-500" },
    { icon: Clock, text: "خدمة سريعة", color: "text-blue-500" },
    { icon: Award, text: "جودة عالية", color: "text-purple-500" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/Background3.jpg"
          alt="تلميع سيارات احترافي بالرياض - Prestige Clean"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#112D4E]/90 via-[#3F72AF]/70 to-[#112D4E]/80" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#FFD700]/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#3F72AF]/20 rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <span className="text-lg font-semibold">تقييم 5 نجوم</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">تلميع داخلي عميق</span>
              <span className="block text-[#FFD700] mt-2">غسيل خارجي احترافي</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              تلميع داخلي للسيارة يشمل مقاعد السيارة والسقف وفرشات وديكورات السيارة
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-2`} />
                <span className="text-sm md:text-base font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Special Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#112D4E] rounded-2xl p-6 mb-8 shadow-2xl border-4 border-white/20"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-8 h-8" />
              <h3 className="text-2xl md:text-3xl font-bold">عرض خاص!</h3>
            </div>
            <p className="text-lg md:text-xl font-semibold">خصم 30% لفترة محدودة</p>
            <p className="text-base mt-2">عائد استثمار مرئي ونتائج مستمرة</p>
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

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>ضمان شامل</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>متاح 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>+1000 عميل راضي</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
