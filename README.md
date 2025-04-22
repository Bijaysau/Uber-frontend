# 🚗 Uber Clone – Frontend

This is the **frontend** of the Uber Clone project, built using **React.js**, **Vite**, **Tailwind CSS**, **Clerk**, **Stripe**, and **Socket.IO**. It simulates real-world ride-hailing functionality like user & driver auth, ride booking, maps, payments, and real-time updates.

---

## 🌟 Key Features

- 🔐 **User & Driver Authentication** – Login and signup with **Clerk**  
- 🗺 **Interactive Map** – Track rides using **Leaflet** and **React-Leaflet**  
- 🚕 **Ride Booking System** – Choose ride types (UberX, Moto, Auto), select pickup & drop  
- 💳 **Payments** – Pay by **cash or Stripe** (online)  
- 👨‍✈️ **Driver Dashboard** – Accept/Decline rides, view fare, location, and earnings  
- 📱 **Responsive Design** – Optimized for all screen sizes using **Tailwind CSS**  
- ⚡ **Real-Time Updates** – Ride status updates via **Socket.IO**

---

## ⚙️ Tech Stack

- **React** – Frontend library  
- **Vite** – Lightning-fast build tool  
- **Tailwind CSS** – Utility-first CSS framework  
- **React Router DOM** – Page routing  
- **Leaflet & React-Leaflet** – Maps & location  
- **Socket.IO-client** – Real-time communication  
- **Clerk** – Authentication  
- **Stripe.js** – Online payments

---

## 🛠 Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/uber-clone-frontend.git
   cd uber-clone-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` File**
   ```env
   VITE_BASE_URL=http://localhost:4000
   VITE_GOOGLE_MAP_API=AIzaSyAbPiuom3a5TVOlx6tSkdZLnjfWNOgM5jw
   VITE_STRIPE_PUBLIC_KEY=pk_test_51RATM8K1pyCkxKDkbPK3htQFFqq0rmFaQBXcF7Y9RqK9x3AcQQowPcDMI6OVss8zS1mN6F2KN09obEEKhWRj76Xo001FGo3ITp
   ```

4. **Run the Dev Server**
   ```bash
   npm run dev
   ```

   App will run at: `http://localhost:5173`

---

## 📁 Project Structure

```
├── src/
│   ├── assets/                     # Static assets (images/icons)
│   ├── components/                 # Reusable components
│   │   ├── LocationSearchPanel.jsx
│   │   ├── MapView.jsx
│   │   ├── PaymentForm.jsx
│   │   ├── RideOptions.jsx
│   │   └── StripePayment.jsx
│   ├── context/                   # Global state (Auth/User/Captain)
│   │   ├── CaptainContext.jsx
│   │   └── UserContext.jsx
│   ├── pages/                     # Page components
│   │   ├── CaptainHome.jsx
│   │   ├── CaptainLogin.jsx
│   │   ├── CaptainLogout.jsx
│   │   ├── CaptainProtectWrapper.jsx
│   │   ├── CaptainSignup.jsx
│   │   ├── Home.jsx
│   │   ├── Section.jsx
│   │   ├── Start.jsx
│   │   ├── UserLogin.jsx
│   │   ├── UserLogout.jsx
│   │   ├── UserProtectWrapper.jsx
│   │   └── UserSignup.jsx
│   ├── utils/                     # Helper files
│   │   ├── App.css
│   │   ├── index.css
│   ├── App.jsx                    # Main App component
│   ├── index.jsx                  # React entry point
│   ├── main.jsx                   # Main rendering logic
│
├── .env                           # Environment variables
├── .gitignore
├── index.html                     # HTML template
├── eslint.config.js              # Linter config
```

---

## 📷 Screenshots

> (Add screenshots here if available)

- **Home Page**
- **User Booking Interface**
- **Driver Ride Request Panel**

---

## 🚀 Deployment

1. **Build your app**
   ```bash
   npm run build
   ```

2. **Deploy `/dist`** to hosting platforms like **Netlify**, **Vercel**, or **Firebase Hosting**.

---

## 🤝 Contributing

Want to help? Fork the repo and submit a pull request!

---

## 📬 Contact

- 📧 Email: your.email@example.com  
- 🐙 GitHub: [@your-username](https://github.com/your-username)  
- 🔗 LinkedIn: [Your Name](https://linkedin.com/in/your-name)

---

> Built with ❤️ using React & Tailwind. Let’s ride the future together.
