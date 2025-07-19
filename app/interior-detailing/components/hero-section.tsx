"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, MapPin, Clock, Car, Award } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { motion } from "framer-motion"

export function HeroSection() {
  const primaryPhoneNumber = "0560280857"
  const newPhoneNumber = "0582807319"
  const whatsappLink = "https://wa.me/9660560280857"

  const mobileFeatures = [
    { icon: MapPin, text: "خدمة في موقعك", color: "text-red-500" },
    { icon: Clock, text: "متاح 24/7", color: "text-blue-500" },
    { icon: Car, text: "جميع أنواع السيارات", color: "text-green-500" },
    { icon: Award, text: "فريق محترف", color: "text-purple-500" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/Background6.jpg"
          alt="تلميع سيارات متنقل بالرياض - Prestige Clean"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#112D4E]/70 via-[#3F72AF]/50 to-[#112D4E]/65" />

        {/* Mobile Service Animation */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-green-400/20 rounded-full animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-400/30">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold">خدمة متنقلة في جميع أنحاء الرياض</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">شركة تلميع سيارات</span>
              <span className="block text-[#87CEEB] mt-2">متنقل بالرياض</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
              عائد استثمار مرئي ونتائج مستمرة - نأتي إليك أينما كنت
            </p>
          </motion.div>

          {/* Mobile Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {mobileFeatures.map((feature, index) => (
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

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-green-600/80 to-blue-600/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8 text-green-400" />
              نخدم جميع مناطق الرياض
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-base md:text-lg">
              <div>شمال الرياض • جنوب الرياض</div>
              <div>شرق الرياض • غرب الرياض</div>
              <div>وسط الرياض • الضواحي</div>
            </div>
          </motion.div>

          {/* Booking Process */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#112D4E] rounded-2xl p-6 mb-8 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">كيف تحجز الخدمة؟</h3>
            <div className="grid md:grid-cols-3 gap-4 text-base md:text-lg font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#112D4E] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <span>اتصل أو راسل واتساب</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#112D4E] text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <span>حدد الموقع والوقت</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#112D4E] text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <span>نأتي إليك ونبدأ العمل</span>
              </div>
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
              احجز عبر واتساب
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
