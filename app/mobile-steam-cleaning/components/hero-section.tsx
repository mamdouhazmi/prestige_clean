"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Droplets, Truck, Shield, Zap } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { motion } from "framer-motion"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9660560280857", "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+9660560280857"
  }

  const steamFeatures = [
    { icon: Droplets, text: "تقنية البخار المتقدمة", color: "text-blue-500" },
    { icon: Truck, text: "خدمة متنقلة", color: "text-green-500" },
    { icon: Shield, text: "تعقيم شامل", color: "text-purple-500" },
    { icon: Zap, text: "نتائج فورية", color: "text-yellow-500" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/Background3.jpg"
          alt="غسيل سيارات بالبخار متنقل - Prestige Clean"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#112D4E]/95 via-[#3F72AF]/75 to-[#112D4E]/90" />

        {/* Steam Animation Effects */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-blue-400/20 rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-400/30">
              <Droplets className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-lg font-semibold">تقنية البخار الاحترافية</span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">تنظيف وتلميع جميع أجزاء</span>
              <span className="block text-[#87CEEB] mt-2">المركبة الداخلية</span>
              <span className="block text-[#FFD700] mt-2 text-xl md:text-3xl">وإزالة البقع والأوساخ المتراكمة</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
              عائد استثمار مرئي ونتائج مستمرة بتقنية البخار المتطورة
            </p>
          </motion.div>

          {/* Steam Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {steamFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <feature.icon className={`w-10 h-10 ${feature.color} mx-auto mb-3`} />
                <span className="text-sm md:text-base font-medium block">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Steam Process */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Droplets className="w-8 h-8 text-cyan-400" />
              عملية الغسيل بالبخار
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-base md:text-lg">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">1</div>
                <span>تحضير السيارة</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">2</div>
                <span>تطبيق البخار</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">3</div>
                <span>إزالة الأوساخ</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">4</div>
                <span>تجفيف وتلميع</span>
              </div>
            </div>
          </motion.div>

          {/* Benefits Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#112D4E] rounded-2xl p-6 mb-8 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">لماذا البخار؟</h3>
            <div className="grid md:grid-cols-3 gap-4 text-base md:text-lg font-semibold">
              <div>• صديق للبيئة</div>
              <div>• لا يحتاج مواد كيميائية</div>
              <div>• تعقيم طبيعي 100%</div>
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
