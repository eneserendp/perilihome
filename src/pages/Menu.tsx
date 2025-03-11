import { useState } from 'react';
import OrderModal from '../components/OrderModal';
import OrderRulesModal from '../components/OrderRulesModal';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const menuItems = [
    {
      name: "Ev Yapımı Cevizli Baklava",
      price: "700 TL/kg",
      description: "Özel şerbeti ve bol cevizi ile geleneksel el yapımı baklava.",
      image: "/baklava.jpg",
      category: "Tatlı",
      unit: "kg"
    },
    {
      name: "İçli Köfte",
      price: "60 TL/adet",
      description: "El yapımı, özenle hazırlanmış, nefis içli köfte. Minimum sipariş: 5 adet.",
      image: "/icli.jpg",
      category: "Ana Yemek",
      unit: "adet",
      minOrder: 5
    },
    {
      name: "Ev Yapımı Su Böreği",
      price: "600 TL/kg",
      description: "Kat kat açılmış, özel peynir karışımı ile hazırlanmış geleneksel su böreği.",
      image: "/subore.png",
      category: "Börek",
      unit: "kg"
    },
    {
      name: "Yaprak Sarması",
      price: "500 TL/kg",
      description: "Asma yaprağı ile sarılmış, özel baharatlarla harmanlanmış nefis yaprak sarma.",
      image: "/sarma.jpg",
      category: "Ana Yemek",
      unit: "kg"
    }
  ];

  const handleOrderClick = (item: any) => {
    setSelectedItem(item);
    setIsRulesModalOpen(true); // Önce kuralları göster
  };

  const handleRulesAccept = () => {
    setIsRulesModalOpen(false);
    setIsOrderModalOpen(true); // Kurallar kabul edilince sipariş formunu göster
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-secondary mb-16">MENÜMÜZ</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64">
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold z-10">
                  {item.category}
                </div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Görsel yüklenemezse yedek görsel göster
                    e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Yemek+Görseli'
                  }}
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-secondary">{item.name}</h3>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-6">{item.description}</p>
                
                <button 
                  className="w-full bg-secondary text-white py-3 rounded-md hover:bg-primary transition-colors duration-300 font-primary text-lg"
                  onClick={() => handleOrderClick(item)}
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kurallar Modalı */}
      <OrderRulesModal 
        isOpen={isRulesModalOpen}
        onClose={() => setIsRulesModalOpen(false)}
        onAccept={handleRulesAccept}
      />

      {/* Sipariş Modalı */}
      <OrderModal 
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        item={selectedItem}
      />
    </div>
  );
};

export default Menu;
