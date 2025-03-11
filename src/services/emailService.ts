import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'niltekdeneme@gmail.com',
    pass: 'zuxcsyjmhzjsbfyt'
  }
});

interface OrderDetails {
  name: string;
  surname: string;
  phone: string;
  address: string;
  quantity: number;
  note?: string;
  itemName: string;
  totalPrice: number;
}

export const sendOrderEmail = async (orderDetails: OrderDetails) => {
  const mailOptions = {
    from: 'niltekdeneme@gmail.com',
    to: 'demirpolateneseren@gmail.com',
    subject: 'Yeni Sipariş Alındı - PeriliHome',
    html: `
      <h2>Yeni Sipariş Detayları</h2>
      <hr>
      <p><strong>Müşteri Adı:</strong> ${orderDetails.name} ${orderDetails.surname}</p>
      <p><strong>Telefon:</strong> ${orderDetails.phone}</p>
      <p><strong>Adres:</strong> ${orderDetails.address}</p>
      <hr>
      <p><strong>Ürün:</strong> ${orderDetails.itemName}</p>
      <p><strong>Miktar:</strong> ${orderDetails.quantity}</p>
      <p><strong>Toplam Tutar:</strong> ${orderDetails.totalPrice} TL</p>
      ${orderDetails.note ? `<p><strong>Not:</strong> ${orderDetails.note}</p>` : ''}
      <hr>
      <p><em>Sipariş Tarihi: ${new Date().toLocaleString('tr-TR')}</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return false;
  }
};
