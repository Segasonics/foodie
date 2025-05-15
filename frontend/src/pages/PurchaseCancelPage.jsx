import { Ban, ArrowLeftCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseCancelPage = () => {
  return (
    <div className='h-screen flex items-center justify-center px-4 bg-gradient-to-br from-red-50 to-yellow-100'>
      <div className='max-w-md w-full bg-white rounded-xl shadow-2xl p-8 relative z-10 text-center'>
        <div className='flex justify-center mb-4'>
          <Ban className='text-red-500 w-16 h-16' />
        </div>

        <h1 className='text-3xl font-bold text-red-600 mb-2'>Payment Canceled</h1>
        <p className='text-gray-700 mb-2'>Your payment was not completed.</p>
        <p className='text-sm text-gray-500 mb-6'>No worries! You can try again or explore other recipes.</p>

        <Link
          to="/plans"
          className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full inline-flex items-center justify-center mb-3'
        >
          <ArrowLeftCircle size={18} className="mr-2" />
          Try Again
        </Link>

        <Link
          to="/"
          className='text-sm text-gray-500 hover:text-gray-700 underline'
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PurchaseCancelPage;
