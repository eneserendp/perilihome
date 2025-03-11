import React, { useState } from 'react';
import { API_URL } from '../config';

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    price: string;
    description: string;
  } | null;
};

const OrderModal = ({ isOpen, onClose, item }: OrderModalProps) => {
  if (!isOpen || !item) return null;

  const [quantity, setQuantity] = useState(1);
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-primary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-secondary mb-4">{item.name}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>
          
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Birim Fiyat:</p>
            <p className="text-xl font-bold text-primary">{item.price}</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">İsim</label>
                <input 
                  name="firstName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Soyisim</label>
                <input 
                  name="lastName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                  placeholder="Soyadınız"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                {item.name === "Dana Rosto" ? "Kilogram" : "Adet"}
              </label>
              <div className="flex items-center">
                <input 
                  type="number"
                  step={item.name === "Dana Rosto" ? "0.5" : "1"}
                  min={item.name === "Dana Rosto" ? "0.5" : "1"}
                  defaultValue="1"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                  onChange={handleQuantityChange}
                />
                {item.name === "Dana Rosto" && 
                  <span className="ml-2 text-gray-600">kg</span>
                }
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-bold text-secondary">Toplam Tutar:</p>
                <p className="text-2xl font-bold text-primary">{totalPrice} TL</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {quantity} {item.name === "Dana Rosto" ? "kg" : "adet"} × {basePrice} TL
              </p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Not (Opsiyonel)</label>
              <textarea 
                name="note"
                rows={3}
                placeholder="Özel isteklerinizi belirtebilirsiniz..."
                className="w-full p-2 border border-gray-300 rounded-md resize-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">İletişim Numaranız</label>
              <input 
                name="phone"
                type="tel"
                placeholder="05XX XXX XX XX"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                pattern="[0-9]{10,11}"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Teslimat Adresi</label>
              <textarea 
                name="address"
                rows={2}
                className="w-full p-2 border border-gray-300 rounded-md resize-none"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition-colors duration-300"
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
