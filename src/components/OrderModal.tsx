import React, { useState } from 'react';
import { API_URL } from '../config';

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    price: string;
    description: string;
    unit: string;
    minOrder: number;
  } | null;
};

const OrderModal = ({ isOpen, onClose, item }: OrderModalProps) => {
  if (!isOpen || !item) return null;

  const [quantity, setQuantity] = useState(item.minOrder || 1);
  const basePrice = parseInt(item.price.replace(/[^0-9]/g, ''));
  const totalPrice = basePrice * quantity;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setQuantity(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const form = e.currentTarget;
      const orderDetails = {
        name: (form.querySelector('[name="firstName"]') as HTMLInputElement).value,
        surname: (form.querySelector('[name="lastName"]') as HTMLInputElement).value,
        phone: (form.querySelector('[name="phone"]') as HTMLInputElement).value,
        address: (form.querySelector('[name="address"]') as HTMLTextAreaElement).value,
        quantity: quantity,
        note: (form.querySelector('[name="note"]') as HTMLTextAreaElement).value,
        itemName: item!.name,
        totalPrice: totalPrice
      };

      console.log('Sipariş gönderiliyor:', orderDetails);

      const response = await fetch(`${API_URL}/send-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
        body: JSON.stringify(orderDetails)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Sunucu yanıtı:', data);

      if (data.success) {
        alert('Siparişiniz başarıyla alındı! En kısa sürede size ulaşacağız.');
        onClose();
      } else {
        throw new Error(data.error || 'Sipariş işlemi başarısız');
      }
    } catch (error: any) {
      console.error('Sipariş hatası:', error);
      alert(`Sipariş gönderilirken bir hata oluştu: ${error.message || 'Bilinmeyen hata'}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-1 md:p-4">
      <div className="bg-white rounded-lg w-full max-w-sm relative max-h-[95vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-1 right-1 md:top-4 md:right-4 text-gray-500 hover:text-primary z-10"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-3 md:p-6">
          <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-4">{item.name}</h3>
          <p className="text-xs md:text-base text-gray-600 mb-2 md:mb-4">{item.description}</p>
          
          <div className="flex justify-between items-center mb-3 md:mb-6">
            <p className="text-xs md:text-base text-gray-600">Birim Fiyat:</p>
            <p className="text-base md:text-xl font-bold text-primary">{item.price}</p>
          </div>

          <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div>
                <label className="block text-gray-700 text-xs md:text-base mb-1">İsim</label>
                <input 
                  name="firstName"
                  type="text"
                  className="w-full p-1.5 md:p-2 text-xs md:text-base border border-gray-300 rounded-md"
                  required
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-xs md:text-base mb-1">Soyisim</label>
                <input 
                  name="lastName"
                  type="text"
                  className="w-full p-1.5 md:p-2 text-xs md:text-base border border-gray-300 rounded-md"
                  required
                  placeholder="Soyadınız"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-xs md:text-base mb-1">
                {item.unit === "kg" ? "Kilogram" : "Adet"}
              </label>
              <div className="flex items-center">
                <input 
                  type="number"
                  step={item.unit === "kg" ? "0.5" : "1"}
                  min={item.name === "İçli Köfte" ? 5 : (item.unit === "kg" ? 0.5 : 1)}
                  defaultValue={item.name === "İçli Köfte" ? 5 : 1}
                  className="w-full p-1.5 md:p-2 text-xs md:text-base border border-gray-300 rounded-md"
                  required
                  onChange={handleQuantityChange}
                />
                <span className="ml-2 text-gray-600">{item.unit}</span>
              </div>
              {item.name === "İçli Köfte" && (
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Minimum sipariş: 5 adet
                </p>
              )}
            </div>

            <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-bold text-secondary text-xs md:text-base">Toplam Tutar:</p>
                <p className="text-base md:text-2xl font-bold text-primary">{totalPrice} TL</p>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {quantity} {item.unit} × {basePrice} TL
              </p>
            </div>

            <div>
              <label className="block text-gray-700 text-xs md:text-base mb-1">Not (Opsiyonel)</label>
              <textarea 
                name="note"
                rows={3}
                placeholder="Özel isteklerinizi belirtebilirsiniz..."
                className="w-full p-1.5 md:p-2 text-xs md:text-base border border-gray-300 rounded-md resize-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-xs md:text-base mb-1">İletişim Numaranız</label>
              <input 
                name="phone"
                type="tel"
                placeholder="05XX XXX XX XX"
                className="w-full p-1.5 md:p-2 text-xs md:text-base border border-gray-300 rounded-md"
                required
                pattern="[0-9]{10,11}"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs md:text-base mb-1">Teslimat Adresi</label>
              <textarea 
                name="address"
                rows={2}
                className="w-full p-1.5 md:p-2 text-xs md:text-base border border-gray-300 rounded-md resize-none"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white py-1.5 md:py-3 rounded-md hover:bg-secondary transition-colors duration-300 text-xs md:text-base"
            >
              {totalPrice} TL - SİPARİŞİ ONAYLA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
