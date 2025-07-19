'use server'

import { ContactFormData } from '@/types/form'

export async function sendWhatsAppMessage(formData: ContactFormData) {
  const { phone, type, message } = formData

  const whatsappMessage = `رقم الهاتف: ${phone}\nنوع الطلب: ${type}\nالرسالة: ${message}`
  const whatsappNumber = '+9660560280857'

  try {
    // This is a placeholder for the actual WhatsApp Business API call
    // You would need to replace this with the actual API call to send a message
    // This might involve using a library like axios to make an HTTP request
    console.log(`Sending message to ${whatsappNumber}: ${whatsappMessage}`)

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    return { success: true, message: 'تم إرسال الرسالة بنجاح' }
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    return { success: false, message: 'حدث خطأ أثناء إرسال الرسالة' }
  }
}
