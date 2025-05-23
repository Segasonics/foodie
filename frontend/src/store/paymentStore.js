import { create } from "zustand";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8000/api/v1/payments" : "/api/v1/payments"
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const usePaymentStore=create((set)=>({
    loading:false,
    createCheckout:async(priceId)=>{
       set({loading:true});
       const stripe = await stripePromise;
       try {
        const res = await axios.post(`${API_URL}/create-checkout-session`,{priceId});
        const sessionId = res.data.id;
 
       if (sessionId) {
         const result = await stripe.redirectToCheckout({ sessionId });
         if (result.error) {
           console.log("Error", result.error.message);
         }
       } else {
         console.error('No session ID returned');
       }
       } catch (error) {
        console.error('Checkout error:', error.response?.data || error.message);
       }
    },
}))