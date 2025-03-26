import { useState } from 'react';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

type ContactFormStatus = {
  isSubmitting: boolean;
  isSubmitted: boolean;
  isError: boolean;
  message?: string;
};

type UseContactFormReturn = {
  formData: ContactFormData;
  formErrors: ContactFormErrors;
  formStatus: ContactFormStatus;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
  validateForm: () => boolean;
};

/**
 * İletişim formu için özel hook
 */
export function useContactForm(): UseContactFormReturn {
  // Form verileri
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Form hataları
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  // Form durumu
  const [formStatus, setFormStatus] = useState<ContactFormStatus>({
    isSubmitting: false,
    isSubmitted: false,
    isError: false
  });

  // Form alanı değişikliği
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Hata varsa temizle
    if (formErrors[name as keyof ContactFormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Form doğrulama
  const validateForm = (): boolean => {
    const errors: ContactFormErrors = {};
    let isValid = true;

    // İsim kontrolü
    if (!formData.name.trim()) {
      errors.name = 'İsim alanı zorunludur';
      isValid = false;
    }

    // E-posta kontrolü
    if (!formData.email.trim()) {
      errors.email = 'E-posta alanı zorunludur';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Geçerli bir e-posta adresi giriniz';
        isValid = false;
      }
    }

    // Konu kontrolü
    if (!formData.subject.trim()) {
      errors.subject = 'Konu alanı zorunludur';
      isValid = false;
    }

    // Mesaj kontrolü
    if (!formData.message.trim()) {
      errors.message = 'Mesaj alanı zorunludur';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Mesaj en az 10 karakter olmalıdır';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Form gönderimi
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form doğrulama
    if (!validateForm()) {
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false
    });

    try {
      // API endpoint'e POST isteği gönder
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: data.message
        });
        resetForm();
      } else {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          isError: true,
          message: data.message || 'Bir hata oluştu, lütfen tekrar deneyin'
        });
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Bir hata oluştu, lütfen tekrar deneyin'
      });
    }
  };

  // Formu sıfırla
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setFormErrors({});
  };

  return {
    formData,
    formErrors,
    formStatus,
    handleChange,
    handleSubmit,
    resetForm,
    validateForm
  };
}