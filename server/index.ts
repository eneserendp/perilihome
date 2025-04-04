import express, { Request, Response, NextFunction } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

interface OrderRequest {
  name: string;
  surname: string;
  phone: string;
  address: string;
  quantity: number;
  note?: string;
  itemName: string;
  totalPrice: number;
}

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const app = express();

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://perilihome.vercel.app' 
    : 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// OPTIONS isteğini işle
app.options('*', cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('Server is running');
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'niltekdeneme@gmail.com',
    pass: process.env.EMAIL_PASS || 'zuxcsyjmhzjsbfyt'
  }
});

// Debug middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.post('/api/send-order', async (req: Request<{}, {}, OrderRequest>, res: Response) => {
  try {
    console.log('Received order:', req.body);

    if (!req.body || !req.body.name || !req.body.itemName) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid order data' 
      });
    }

    const mailOptions = {
      from: 'niltekdeneme@gmail.com',
      to: 'demirpolatperihan@gmail.com', // Email değiştirildi
      subject: `Yeni Sipariş - ${req.body.itemName}`,
      html: `
        <h2>Yeni Sipariş Detayları</h2>
        <hr>
        <p><strong>Müşteri Adı:</strong> ${req.body.name} ${req.body.surname}</p>
        <p><strong>Telefon:</strong> ${req.body.phone}</p>
        <p><strong>Adres:</strong> ${req.body.address}</p>
        <hr>
        <p><strong>Ürün:</strong> ${req.body.itemName}</p>
        <p><strong>Miktar:</strong> ${req.body.quantity}${req.body.itemName === "Dana Rosto" ? " kg" : " adet"}</p>
        <p><strong>Toplam Tutar:</strong> ${req.body.totalPrice} TL</p>
        ${req.body.note ? `<p><strong>Not:</strong> ${req.body.note}</p>` : ''}
        <hr>
        <p><em>Sipariş Tarihi: ${new Date().toLocaleString('tr-TR')}</em></p>
      `
    };

    await transporter.verify();
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    res.status(200).json({ 
      success: true, 
      messageId: info.messageId 
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    console.error('Error processing order:', error);
    res.status(500).json({ 
      success: false, 
      error: errorMessage
    });
  }
});

app.post('/api/contact', async (req: Request<{}, {}, ContactRequest>, res: Response) => {
  try {
    console.log('Received contact form:', req.body);

    // Form validation
    if (!req.body || !req.body.email || !req.body.message) {
      return res.status(400).json({
        success: false,
        error: 'Required fields are missing'
      });
    }

    // Email sending
    try {
      await transporter.verify();
      
      const info = await transporter.sendMail({
        from: 'niltekdeneme@gmail.com',
        to: 'demirpolatperihan@gmail.com', // Email değiştirildi
        subject: `İletişim Formu: ${req.body.subject}`,
        html: `
          <h2>Yeni İletişim Formu Mesajı</h2>
          <hr>
          <p><strong>Gönderen:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Telefon:</strong> ${req.body.phone}</p>
          <p><strong>Konu:</strong> ${req.body.subject}</p>
          <hr>
          <p><strong>Mesaj:</strong></p>
          <p>${req.body.message}</p>
          <hr>
          <p><em>Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}</em></p>
        `
      });

      console.log('Contact email sent:', info.messageId);
      
      return res.status(200).json({
        success: true,
        messageId: info.messageId
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      throw new Error('Email service is unavailable');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
});

// Error handler middleware
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    error: 'Something broke!' 
  });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully.');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
