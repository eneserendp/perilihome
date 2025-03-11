const Contact = () => {
  return (
    <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12"> {/* py-16'dan py-12'ye düşürdük */}
        <h1 className="text-5xl font-bold text-center text-secondary mb-12"> {/* mb-16'dan mb-12'ye düşürdük */}
          İLETİŞİM
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8"> {/* gap-12'den gap-8'e düşürdük */}
          <div className="space-y-6"> {/* Daha kompakt bir spacing */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Bize Ulaşın</h2>
              <div className="space-y-3"> {/* space-y-4'ten space-y-3'e düşürdük */}
                <p className="flex items-center text-gray-600">
                  <span className="font-bold mr-2">Adres:</span>
                  Bağdat Caddesi No:123, Kadıköy, İstanbul
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-bold mr-2">Telefon:</span>
                  +90 216 123 45 67
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-bold mr-2">E-posta:</span>
                  info@perilihome.com
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Çalışma Saatleri</h2>
              <div className="space-y-1"> {/* space-y-2'den space-y-1'e düşürdük */}
                <p className="text-gray-600">Pazartesi - Cuma: 11:00 - 23:00</p>
                <p className="text-gray-600">Cumartesi - Pazar: 10:00 - 00:00</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-4"> {/* space-y-6'dan space-y-4'e düşürdük */}
            <div>
              <label className="block text-gray-700 mb-1">Adınız</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">E-posta</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Mesajınız</label>
              <textarea 
                rows={3} 
                className="w-full p-2 border border-gray-300 rounded-md resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition-colors duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
