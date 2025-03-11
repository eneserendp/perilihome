import { useState } from 'react';
import { API_URL } from '../config';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const form = e.currentTarget;
      const formData = {
        name: (form.querySelector('[name="name"]') as HTMLInputElement).value,
        email: (form.querySelector('[name="email"]') as HTMLInputElement).value,
        phone: (form.querySelector('[name="phone"]') as HTMLInputElement).value,
        subject: (form.querySelector('[name="subject"]') as HTMLInputElement).value,
        message: (form.querySelector('[name="message"]') as HTMLTextAreaElement).value,
      };

      console.log('Sending contact form:', formData);

      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        form.reset();
        alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
      } else {
        throw new Error(data.error || 'Mesaj gönderilemedi');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      console.error('Contact form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 md:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-8 md:mb-12">
          İLETİŞİM
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Bize Ulaşın</h2>
              <div className="space-y-3">
                <p className="flex items-center text-gray-600">
                  <span className="font-bold mr-2">Adres:</span>
                  Ankara Yenimahalle
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-bold mr-2">Telefon:</span>
                  +90 507 167 06 43
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-bold mr-2">E-posta:</span>
                  homeperili@gmail.com
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Çalışma Saatleri</h2>
              <div className="space-y-1">
                <p className="text-gray-600">Pazartesi - Cuma: 11:00 - 23:00</p>
                <p className="text-gray-600">Cumartesi - Pazar: 10:00 - 00:00</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <div>
              <label className="block text-gray-700 mb-1">Adınız</label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">E-posta</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Telefon</label>
              <input 
                type="tel"
                name="phone"
                required
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Konu</label>
              <input 
                type="text"
                name="subject"
                required
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Mesajınız</label>
              <textarea 
                name="message"
                rows={3} 
                required
                className="w-full p-2 border border-gray-300 rounded-md resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? 'Gönderiliyor...' : 'Gönder'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
