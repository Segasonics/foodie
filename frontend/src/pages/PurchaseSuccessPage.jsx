import { CheckCircle, ChefHat, ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8000/api/v1/payments" : "/api/v1/payments"
const PurchaseSuccessPage = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');

    const handleCheckoutSuccess = async (sessionId) => {
      try {
        await axios.post(`${API_URL}/checkout-success`, { sessionId });
        // Optionally clear cart or update state
      } catch (err) {
        setError('Failed to process your purchase.');
        console.error(err);
      } finally {
        setIsProcessing(false);
      }
    };

    if (sessionId) {
      handleCheckoutSuccess(sessionId);
    } else {
      setError('No session ID found in the URL');
      setIsProcessing(false);
    }
  }, []);

  if (isProcessing) return <div className="text-center mt-20 text-lg text-gray-700">Processing your subscription...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className='h-screen flex items-center justify-center px-4 bg-gradient-to-br from-yellow-50 to-pink-100'>
      <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.1} numberOfPieces={500} recycle={false} />

      <div className='max-w-md w-full bg-white rounded-xl shadow-2xl p-8 relative z-10 text-center'>
        <div className='flex justify-center mb-4'>
          <CheckCircle className='text-yellow-500 w-16 h-16' />
        </div>

        <h1 className='text-3xl font-bold text-yellow-600 mb-2'>Subscription Confirmed!</h1>
        <p className='text-gray-700 mb-2'>You're now a premium member of Foodie 🍽️</p>
        <p className='text-sm text-gray-500 mb-6'>Explore exclusive recipes and cook like a pro.</p>

        <div className='bg-yellow-100 rounded-lg p-4 mb-6 text-left text-sm'>
          <div className='flex justify-between'>
            <span className='text-gray-600'>Order ID:</span>
            <span className='font-semibold text-gray-800'>#FOODIE1234</span>
          </div>
          <div className='flex justify-between mt-2'>
            <span className='text-gray-600'>Subscription:</span>
            <span className='font-semibold text-gray-800'>1 Year Premium</span>
          </div>
        </div>

        <Link
          to="/"
          className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full inline-flex items-center justify-center'
        >
          <ChefHat size={18} className="mr-2" />
          Explore Recipes
        </Link>

      </div>
    </div>
  );
};

export default PurchaseSuccessPage;
