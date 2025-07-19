"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle, Star } from "lucide-react"
import { useScreenSize } from "@/hooks/useScreenSize"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isDesktop = useScreenSize()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false)
    }
  }, [isDesktop])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navigationItems = [
    { href: "/", label: "الرئيسية", shortLabel: "الرئيسية", icon: "🏠" },
    { href: "/car-polishing", label: "تلميع سيارات", shortLabel: "تلميع سيارات", icon: "✨" },
    { href: "/steam-seat-cleaning", label: "غسيل مراتب بالبخار", shortLabel: "غسيل مراتب", icon: "🧽" },
    { href: "/interior-detailing", label: "تلميع متنقل", shortLabel: "تلميع متنقل", icon: "🚗" },
    { href: "/mobile-steam-cleaning", label: "غسيل بالبخار متنقل", shortLabel: "غسيل بالبخار", icon: "🚿" },
    { href: "/furniture-cleaning", label: "تنظيف المجالس", shortLabel: "تنظيف المجالس", icon: "🛋️" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
              <div className="relative">
                <Image
                  src="/SteamCaresLogo.png"
                  alt="Steam Care Logo"
                  width={40}
                  height={40}
                  className="sm:w-[45px] sm:h-[45px] rounded-full transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#10B981] rounded-full animate-pulse" />
              </div>

              <div className="flex items-center">
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors whitespace-nowrap">
                  Prestige Clean
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1 flex-1 justify-center max-w-4xl mx-8">
              {navigationItems.map((item) => (
                <NavLink key={item.href} href={item.href} isActive={pathname === item.href}>
                  <span className="ml-2 text-sm">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Compact Desktop Navigation for smaller screens */}
            <nav className="hidden lg:flex xl:hidden items-center space-x-1 flex-1 justify-center max-w-3xl mx-4">
              {navigationItems.map((item) => (
                <NavLink key={item.href} href={item.href} isActive={pathname === item.href} compact>
                  <span className="ml-1 text-xs">{item.icon}</span>
                  <span className="text-xs font-medium">{item.shortLabel}</span>
                </NavLink>
              ))}
            </nav>

            {/* Contact Buttons & Mobile Menu */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Contact Buttons - Desktop Only */}
              <div className="hidden md:flex items-center gap-2 lg:gap-3">
                <Button
                  size="sm"
                  className="bg-[#25D366] hover:bg-[#20B358] text-white shadow-md hover:shadow-lg transition-all duration-200 text-xs lg:text-sm px-2 lg:px-3"
                  onClick={() => window.open("https://wa.me/9660560280857", "_blank")}
                >
                  <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4 ml-1" />
                  <span className="hidden lg:inline">واتساب</span>
                  <span className="lg:hidden">واتس</span>
                </Button>
                <Button
                  size="sm"
                  className="bg-[#1E40AF] hover:bg-[#1D4ED8] text-white shadow-md hover:shadow-lg transition-all duration-200 text-xs lg:text-sm px-2 lg:px-3"
                  onClick={() => (window.location.href = "tel:+9660560280857")}
                >
                  <Phone className="w-3 h-3 lg:w-4 lg:h-4 ml-1" />
                  <span className="hidden lg:inline">اتصل</span>
                  <span className="lg:hidden">📞</span>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-[#1E40AF] rounded-md transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl z-50 lg:hidden border-l border-[#E2E8F0]"
            >
              <div className="p-4 sm:p-6 h-full overflow-y-auto">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/SteamCaresLogo.png"
                      alt="Steam Care"
                      width={35}
                      height={35}
                      className="sm:w-[40px] sm:h-[40px] rounded-full"
                    />
                    <div>
                      <h2 className="font-bold text-[#1E293B] text-sm sm:text-base">Prestige Clean</h2>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button onClick={closeMenu} className="p-2 hover:bg-[#F1F5F9] rounded-full transition-colors">
                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-[#64748B]" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                          pathname === item.href
                            ? "bg-[#1E40AF] text-white shadow-md"
                            : "hover:bg-[#F1F5F9] text-[#475569] hover:text-[#1E40AF]"
                        }`}
                      >
                        <span className="text-lg sm:text-xl">{item.icon}</span>
                        <span className="font-medium text-sm sm:text-base leading-tight">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Contact Buttons */}
                <div className="space-y-3">
                  <Button
                    className="w-full bg-[#25D366] hover:bg-[#20B358] text-white h-11 sm:h-12 shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                    onClick={() => {
                      window.open("https://wa.me/9660560280857", "_blank")
                      closeMenu()
                    }}
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    تواصل معنا واتساب
                  </Button>
                  <Button
                    className="w-full bg-[#1E40AF] hover:bg-[#1D4ED8] text-white h-11 sm:h-12 shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                    onClick={() => {
                      window.location.href = "tel:+9660560280857"
                      closeMenu()
                    }}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    اتصل الآن: 0560280857
                  </Button>
                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#E2E8F0] text-center">
                  <p className="text-xs sm:text-sm text-[#64748B]">متاح 24/7 لخدمتكم</p>
                  <p className="text-xs text-[#94A3B8] mt-1">الرياض - خدمة متنقلة</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({
  href,
  children,
  isActive,
  compact = false,
}: {
  href: string
  children: React.ReactNode
  isActive: boolean
  compact?: boolean
}) {
  return (
    <Link
      href={href}
      className={`relative px-2 lg:px-3 py-2 font-medium rounded-lg transition-all duration-200 hover:bg-[#F1F5F9] whitespace-nowrap ${
        compact ? "text-xs" : "text-sm"
      } ${isActive ? "text-[#1E40AF] bg-[#EFF6FF]" : "text-[#475569] hover:text-[#1E40AF]"}`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E40AF] rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  )
}
