import React, { useState } from 'react';

type OrderRulesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
};

const OrderRulesModal = ({ isOpen, onClose, onAccept }: OrderRulesModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAccepted, setIsAccepted] = useState(false);

  if (!isOpen) return null;

  const steps = [
    {
      title: "Sipariş Sürecimiz",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-primary mb-2">Teslimat Bölgesi</h3>
            <p>• Siparişlerimiz yalnızca Ankara ili sınırları içerisinde geçerlidir.</p>
          </div>
          <div>
            <h3 className="font-bold text-primary mb-2">Sipariş ve İletişim</h3>
            <p>• Siparişiniz sonrası PeriliHome ekibimiz sizinle iletişime geçecektir.</p>
            <p>• Görüşme sonrası sipariş detayları ve teslimat tarihi netleştirilecektir.</p>
          </div>
          <div>
            <h3 className="font-bold text-primary mb-2">Ödeme Süreci</h3>
            <p>• Ödeme yalnızca kapıda nakit yada iban yolu olarak yapılmaktadır.</p>
            <p>• Kredi kartı ile ödeme kabul edilmemektedir.</p>
            <p>• Siparişinizin hazırlanmaya başlaması için kapora yatırılması gerekmektedir.</p>
          </div>
        </div>
      )
    },
    {
      title: "Önemli Notlar",
      content: (
        <div className="space-y-4">
          <p>• Kapora yatırıldıktan sonra siparişiniz hazırlanmaya başlanacaktır.</p>
          <p>• Teslimat tarihi ve saati, görüşme sırasında tarafınıza iletilecektir.</p>
          <p>• Özel istek ve notlarınız değerlendirilecektir.</p>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-primary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-secondary mb-4">{steps[currentStep - 1].title}</h2>
          <div className="text-gray-600 mb-6">
            {steps[currentStep - 1].content}
          </div>

          <div className="flex justify-between mt-6">
            {currentStep === 2 && (
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="accept-rules"
                  checked={isAccepted}
                  onChange={(e) => setIsAccepted(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="accept-rules" className="text-sm text-gray-600">
                  Kuralları okudum ve kabul ediyorum
                </label>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4">
            {currentStep === 1 ? (
              <button
                onClick={() => setCurrentStep(2)}
                className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition-colors"
              >
                İleri
              </button>
            ) : (
              <button
                onClick={onAccept}
                disabled={!isAccepted}
                className={`px-6 py-2 rounded transition-colors ${
                  isAccepted 
                    ? 'bg-primary text-white hover:bg-secondary' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Devam Et
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderRulesModal;
