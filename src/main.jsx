import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import CaptainContext from "./context/CaptainContext.jsx";
import { Toaster } from "react-hot-toast";
// 🔥 Stripe imports
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// ✅ Your Stripe publishable key (test key)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
<Toaster position="top-center" reverseOrder={false} />;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Elements stripe={stripePromise}>
      <CaptainContext>
        <UserContext>
          <BrowserRouter>
            <>
              <App />
              <Toaster position="top-center" reverseOrder={false} />
            </>
          </BrowserRouter>
        </UserContext>
      </CaptainContext>
    </Elements>
  </StrictMode>
);
