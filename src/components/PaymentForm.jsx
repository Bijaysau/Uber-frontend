// components/PaymentForm.jsx
import React, { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-hot-toast";
const PaymentForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Call backend to create payment intent
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/create-payment-intent`, {
        amount: amount * 100,
      })
      .then((res) => setClientSecret(res.data.clientSecret))
      .catch((err) => console.error("Error creating payment intent:", err));
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      toast.success("Payment Successful!");
      onSuccess(); // Pass event to parent
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="w-full bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
