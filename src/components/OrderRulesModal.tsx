type OrderRulesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
};

const OrderRulesModal = ({ isOpen, onClose, onAccept }: OrderRulesModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-secondary mb-6">Sipariş Sürecimiz</h3>
          
          <div className="space-y-6 text-gray-600 mb-8">
            <div className="space-y-2">
              <h4 className="font-bold text-primary">Teslimat Bölgesi</h4>
              <p>• Siparişlerimiz yalnızca Ankara ili sınırları içerisinde geçerlidir.</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-primary">Sipariş ve İletişim</h4>
              <p>• Siparişiniz sonrası PeriliHome ekibimiz sizinle iletişime geçecektir.</p>
              <p>• Görüşme sonrası sipariş detayları ve teslimat tarihi netleştirilecektir.</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-primary">Ödeme Süreci</h4>
              <p>• Ödeme yalnızca kapıda nakit yada iban yolu olarak yapılmaktadır.</p>
              <p>• Kredi kartı ile ödeme kabul edilmemektedir.</p>
              <p>• Siparişinizin hazırlanmaya başlaması için kapora yatırılması gerekmektedir.</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-primary">Önemli Notlar</h4>
              <p>• Kapora yatırıldıktan sonra siparişiniz hazırlanmaya başlanacaktır.</p>
              <p>• Teslimat tarihi ve saati, görüşme sırasında tarafınıza iletilecektir.</p>
              <p>• Özel istek ve notlarınız değerlendirilecektir.</p>
            </div>

            <p className="text-sm italic text-gray-500 mt-4">
              * Siparişinizi onayladıktan sonra ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300"
            >
              Vazgeç
            </button>
            <button
              onClick={onAccept}
              className="flex-1 bg-primary text-white py-3 rounded-md hover:bg-secondary transition-colors duration-300"
            >
              Kuralları Kabul Ediyorum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderRulesModal;
