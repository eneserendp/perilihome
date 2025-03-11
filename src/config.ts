const isDevelopment = import.meta.env.DEV;

export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://periliihome.vercel.app/api'
  : 'http://localhost:3000/api';

export const config = {
  apiUrl: API_URL,
  email: {
    recipient: 'demirpolateneseren@gmail.com'
  },
  // Sipariş limitleri
  orders: {
    minAmount: 100, // Minimum sipariş tutarı
    maxKg: 10,      // Maksimum kg
    maxQuantity: 20 // Maksimum adet
  }
};

export default config;
