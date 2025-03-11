const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-5xl mx-auto py-8 px-4">
        {/* Logo ve Sosyal Medya */}
        <div className="flex flex-col items-center mb-4">
          <img 
            src="/logomuz.png" 
            alt="PeriliHome Logo" 
            className="h-48 md:h-64 w-auto mb-2"
          />
          <div className="flex space-x-6">
            <a href="https://instagram.com/periliihome" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Ana Bilgiler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-primary mb-3">İLETİŞİM</h4>
            <p className="text-gray-400 mb-1 hover:text-primary transition-colors cursor-pointer">
              Email: homeperili@gmail.com
            </p>
            <p className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
              Tel: +90 507 167 06 43
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-primary mb-3">ADRES</h4>
            <p className="text-gray-400">Yenimahalle, Ankara</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-primary mb-3">ÇALIŞMA SAATLERİ</h4>
            <p className="text-gray-400">
              Pazartesi - Cuma: 08:00 - 21:00<br />
              Cumartesi - Pazar: 10:00 - 21:00
            </p>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PERİLİHOME. Tüm hakları saklıdır.<br />
            Web Producter : Enes Eren Demirpolat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
