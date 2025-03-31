import * as nodemailer from 'nodemailer';

type EmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * E-posta gönderimi için servis
 */
export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string; messageId?: string }> {
  // Bu kısım gerçek bir e-posta servisi ile değiştirilmelidir
  // Örnek olarak Nodemailer kullanımı gösterilmiştir
  try {
    // Test için ethereal.email kullanılabilir
    // Gerçek uygulamada bu kısım bir SMTP servisi ile değiştirilmelidir
    // const testAccount = await nodemailer.createTestAccount();
    
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.ethereal.email',
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: testAccount.user,
    //     pass: testAccount.pass,
    //   },
    // });
    
    // Gmail SMTP servisi yapılandırması
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Sertifika hatalarını önlemek için
      }
    });
    
    // E-posta içeriği
    const mailOptions = {
      from: `"${data.name}" <${data.email}>`,
      to: process.env.EMAIL_RECIPIENT || 'recipient@example.com',
      subject: data.subject,
      text: data.message,
      html: `<div>
        <p><strong>İsim:</strong> ${data.name}</p>
        <p><strong>E-posta:</strong> ${data.email}</p>
        <p><strong>Konu:</strong> ${data.subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      </div>`,
    };
    
    // E-posta gönderimi
    const info = await transporter.sendMail(mailOptions);
    
    return {
      success: true,
      message: 'E-posta başarıyla gönderildi',
      messageId: info.messageId
    };
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return {
      success: false,
      message: 'E-posta gönderilirken bir hata oluştu',
    };
  }
}