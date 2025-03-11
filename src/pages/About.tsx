const About = () => {
  return (
    <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-secondary mb-16">HAKKIMIZDA</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img src="/peri1.jpeg" alt="Restaurant" className="w-full h-[500px] object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Hikayemiz</h2>
            <p className="text-gray-600 mb-6">
            Merhaba! Ben Perihan, 28 yıldır mutfakta geçen bir hayatın ardından PeriliHome ile lezzet yolculuğumu sizlerle paylaşmaya karar verdim. Türk mutfağına olan tutkum, yılların deneyimiyle harmanlanarak sofralarınıza en özel tarifleri sunuyor.

Ev yapımı lezzetlerin sıcaklığını ve samimiyetini koruyarak, herkesin kolayca uygulayabileceği tarifler paylaşıyorum. Geleneksel tatlardan modern dokunuşlara kadar geniş bir yelpazede mutfak deneyimlerimi sizlere aktarıyor, yemek yapmayı bir keyif haline getirmenize yardımcı oluyorum.
            </p>
            <p className="text-gray-600 mb-6">
            Sevgiyle pişen yemeklerin lezzetinin bambaşka olduğuna inanıyorum. PeriliHome’da sadece tarifler değil, mutfağa dair püf noktaları, pratik öneriler ve ilham verici sofralar da sizi bekliyor.

Birlikte pişirmek, paylaşmak ve lezzetli anılar biriktirmek dileğiyle!

💛 Afiyetle kalın!
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">50+</h3>
                <p className="text-gray-600">Özel Tarif</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">1000+</h3>
                <p className="text-gray-600">Mutlu Müşteri</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">15+</h3>
                <p className="text-gray-600">Uzman Şef Tarifi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
