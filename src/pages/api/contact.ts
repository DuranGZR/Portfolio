import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../services/emailService';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Sadece POST isteklerini kabul et
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body as ContactFormData;

    // Form verilerinin doğruluğunu kontrol et
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Tüm alanlar doldurulmalıdır' 
      });
    }

    // E-posta formatını kontrol et
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Geçerli bir e-posta adresi giriniz' 
      });
    }

    // E-posta gönderme işlemini gerçekleştir
    const emailResult = await sendEmail({
      name,
      email,
      subject,
      message
    });
    
    // E-posta gönderme sonucuna göre yanıt döndür
    return res.status(emailResult.success ? 200 : 500).json({ 
      success: emailResult.success, 
      message: emailResult.message 
    });

  } catch (error) {
    console.error('İletişim formu hatası:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Sunucu hatası, lütfen daha sonra tekrar deneyin' 
    });
  }
}