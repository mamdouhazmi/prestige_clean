'use client'

import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react'

export function CallButton() {
  return (
    <Button
      className="fixed bottom-20 right-4 z-50 h-12 w-12 rounded-full p-0"
      variant="outline"
      onClick={() => window.open('tel:0548139168')}
    >
      <Phone className="h-6 w-6" />
      <span className="sr-only">اتصل بنا</span>
    </Button>
  )
}
