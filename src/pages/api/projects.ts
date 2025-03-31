import type { NextApiRequest, NextApiResponse } from 'next';
import { Project, projects } from '../../services/projectService';

type ResponseData = {
  success: boolean;
  message?: string;
  projects?: Project[];
  project?: Project;
};

// Projeler projectService.ts'den import edildi

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { slug, featured, category } = req.query;

  try {
    // Belirli bir projeyi getir
    if (slug && typeof slug === 'string') {
      const project = projects.find(project => project.slug === slug);
      
      if (!project) {
        return res.status(404).json({ success: false, message: 'Proje bulunamadı' });
      }
      
      return res.status(200).json({ success: true, project });
    }
    
    // Filtreleme işlemleri
    let filteredProjects = [...projects];
    
    // Kategori filtreleme
    if (category && typeof category === 'string') {
      filteredProjects = filteredProjects.filter(project => project.category === category);
    }
    
    // Öne çıkan projeleri filtreleme
    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(project => project.featured);
    }
    
    // Filtrelenmiş projeleri döndür
    return res.status(200).json({ success: true, projects: filteredProjects });
    
  } catch (error) {
    console.error('Projeler API hatası:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Sunucu hatası, lütfen daha sonra tekrar deneyin' 
    });
  }
}