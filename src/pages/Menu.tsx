import { useState } from 'react';
import OrderModal from '../components/OrderModal';
import OrderRulesModal from '../components/OrderRulesModal';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const menuItems = [
    {
      name: "Dana Rosto",
      price: "280 TL",
      description: "Lokum gibi dana rosto, özel baharatlar ve sebzelerle. Yanında pilav ve közlenmiş sebzeler ile servis edilir.",
      image: "/peri1.jpeg", // Instagram'daki dana rosto fotoğrafı
      category: "Ana Yemek"
    },
    {
      name: "Domates Çorbası",
      price: "120 TL",
      description: "Taze domatesler ile hazırlanan geleneksel çorba. Kızarmış ekmek ile servis edilir.",
      image: "/peri2.jpeg", // Instagram'daki domates çorbası fotoğrafı
      category: "Çorba"
    },
    {
      name: "Kuru Fasulye",
      price: "180 TL",
      description: "Bol tereyağlı, geleneksel usül pişirilmiş kuru fasulye. Pilav ile servis edilir.",
      image: "https://i.imgur.com/example3.jpg", // Geçici olarak online görsel kullanıyoruz
      category: "Ana Yemek"
    },
    {
      name: "Fırın Sütlaç",
      price: "95 TL",
      description: "Fırında özenle pişirilmiş, üzeri kızarmış geleneksel sütlaç.",
      image: "https://i.imgur.com/example4.jpg", // Geçici olarak online görsel kullanıyoruz
      category: "Tatlı"
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
