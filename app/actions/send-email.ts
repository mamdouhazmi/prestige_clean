'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const phone = formData.get('phone')
  const type = formData.get('type')
  const messageContent = formData.get('message')

  if (!phone || !type || !messageContent) {
    return { success: false, message: 'الرجاء ملء جميع الحقول المطلوبة' }
  }

  const emailUser = 'mamdouhazmi35@gmail.com'
  const emailPass = 'M0501047410'

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: emailUser,
      pass: emailPass
    }
  })

  const mailOptions: nodemailer.MailOptions = {
    from: emailUser,
    to: 'steamclean092@gmail.com',
    subject: `شكوى جديدة - ${type}`,
    text: `
      نوع الطلب: ${type}
      رقم الهاتف: ${phone}
      الرسالة:
      ${messageContent}
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: false, message: 'حدث خطأ أثناء إرسال الرسالة' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: true, message: 'تم إرسال الشكوى بنجاح' }
  }
}
