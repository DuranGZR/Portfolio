import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type ResponseData = {
  success: boolean;
  message?: string;
  translations?: Record<string, any>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { locale = 'tr' } = req.query;
  
  // Geçerli dil kontrolü
  const validLocales = ['tr', 'en'];
  if (!validLocales.includes(locale as string)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Geçersiz dil kodu' 
    });
  }

  try {
    // Dil dosyasının yolunu belirle
    const filePath = path.join(
      process.cwd(),
      'public',
      'locales',
      locale as string,
      'common.json'
    );
    
    // Dosyanın varlığını kontrol et
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ 
        success: false, 
        message: 'Dil dosyası bulunamadı' 
      });
    }
    
    // Dosyayı oku ve JSON olarak parse et
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const translations = JSON.parse(fileContent);
    
    return res.status(200).json({ 
      success: true, 
      translations 
    });
    
  } catch (error) {
    console.error('Çeviri API hatası:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Sunucu hatası, lütfen daha sonra tekrar deneyin' 
    });
  }
}