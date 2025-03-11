const Home = () => {
  const instagramPosts = [
    {
      embedUrl: "https://www.instagram.com/reel/DHCPhDfIQud/embed",
      title: "DANA ROSTO",
      description: "Lokum gibi dana rosto nasıl yapılır? 🥩 Detaylı tarif için profili ziyaret edin! #perilihome #danarosto #yemektarifi",
    },
    {
      embedUrl: "https://www.instagram.com/reel/DGVpjm2oxrf/embed",
      title: "DOMATES ÇORBASI",
      description: "Kışın vazgeçilmezi domates çorbası tarifi 🍅 Püf noktalarıyla birlikte! #perilihome #domatesçorbası",
    },
    {
      embedUrl: "https://www.instagram.com/reel/DCwp1sbOOwy/embed",
      title: "KURU FASULYE",
      description: "Bol tereyağlı enfes kuru fasulye tarifi 🫘 #perilihome #kurufasulye #yemektarifleri",
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 hero-overlay z-10" />
        <img src="/peri2.jpeg" alt="PeriliHome" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div className="px-4">
            <h1 className="text-7xl md:text-8xl font-bold text-light mb-6">
              PERİLİHOME
            </h1>
            <p className="text-2xl md:text-3xl text-gold font-primary tracking-widest">
              GERÇEK LEZZET TUTKUNLARI İÇİN
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            INSTAGRAM'DA BİZ
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {instagramPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-w-9 aspect-h-16 relative">
                  <iframe
                    src={post.embedUrl}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://www.instagram.com/periliihome/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-primary transition-colors duration-300"
            >
              <span className="mr-2">Daha fazlası için Instagram'da takip edin</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-secondary mb-4">HAKKIMIZDA</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Merhaba! Ben Perihan, 28 yıldır mutfakta geçen bir hayatın ardından PeriliHome ile lezzet yolculuğumu sizlerle paylaşmaya karar verdim. Türk mutfağına olan tutkum, yılların deneyimiyle harmanlanarak sofralarınıza en özel tarifleri sunuyor. Ev yapımı lezzetlerin sıcaklığını ve samimiyetini koruyarak, herkesin kolayca uygulayabileceği tarifler paylaşıyorum. Geleneksel tatlardan modern dokunuşlara kadar geniş bir yelpazede mutfak deneyimlerimi sizlere aktarıyor, yemek yapmayı bir keyif haline getirmenize yardımcı oluyorum.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
