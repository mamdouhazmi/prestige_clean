"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneIcon as WhatsApp, ArrowLeft, Star } from "lucide-react"
import { OptimizedImage } from "./optimized-image"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  beforeImage: string
  afterImage: string
  servicePageUrl: string
  rating?: number
  price?: string
}

export function ServiceCard({
  title,
  description,
  beforeImage,
  afterImage,
  servicePageUrl,
  rating = 5,
  price,
}: ServiceCardProps) {
  const router = useRouter()

  const handleLearnMore = () => {
    router.push(servicePageUrl)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card
        className="bg-white border-[#DBE2EF] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
        dir="rtl"
      >
        <CardHeader className="pb-4 bg-gradient-to-r from-[#112D4E] to-[#3F72AF] text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="text-right text-xl md:text-2xl font-bold">{title}</CardTitle>
            {price && (
              <div className="bg-[#FFD700] text-[#112D4E] px-3 py-1 rounded-full text-sm font-bold">{price}</div>
            )}
          </div>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
            ))}
            <span className="text-sm mr-2">({rating}.0)</span>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Before/After Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative group/image">
              <OptimizedImage
                src={beforeImage}
                alt={`قبل ${title}`}
                width={300}
                height={200}
                className="w-full h-48 rounded-lg overflow-hidden"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">قبل التنظيف</span>
              </div>
              <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                قبل
              </span>
            </div>

            <div className="relative group/image">
              <OptimizedImage
                src={afterImage}
                alt={`بعد ${title}`}
                width={300}
                height={200}
                className="w-full h-48 rounded-lg overflow-hidden"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">بعد التنظيف</span>
              </div>
              <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                بعد
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-[#112D4E] text-right text-sm md:text-base leading-relaxed line-clamp-4">{description}</p>

            {/* Contact Info */}
            <div className="flex items-center justify-between p-3 bg-[#F9F7F7] rounded-lg">
              <a
                href="https://wa.me/+9660560280857"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <WhatsApp className="w-5 h-5" />
                <span dir="ltr" className="font-bold">
                  0560280857
                </span>
              </a>
              <div className="text-[#3F72AF] font-semibold">متاح 24/7</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="w-full bg-gradient-to-r from-[#3F72AF] to-[#112D4E] hover:from-[#112D4E] hover:to-[#3F72AF] text-white text-lg font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
            onClick={handleLearnMore}
          >
            <span>اعرف أكثر واحجز الآن</span>
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
