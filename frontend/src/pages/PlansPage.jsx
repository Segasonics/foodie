import { usePaymentStore } from '../store/paymentStore';
import premium from '../assets/premium.jpg'

const PlansPage = () => {
    const { createCheckout } = usePaymentStore();

    const handleCheckout = async (priceId) => {
        await createCheckout(priceId)
    }

    return (
        <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-10">Choose a plan to have full access</h1>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm transition-all duration-300 hover:scale-105">
                        <img src={premium} alt="Premium Plan" className="w-24 h-24 mx-auto mb-4" />
                        <div className="text-xl font-semibold text-gray-700 mb-2 text-center">Premium</div>
                        <div className="text-2xl font-bold text-gray-900 text-center">₹200</div>
                        <div className="text-gray-500 mb-4 text-center">per year</div>
                        <button
                            onClick={() => handleCheckout('price_1ROegmSAVs3IUb6BTGBEIWmW')}
                            className="w-full bg-yellow-500 text-black font-semibold py-2 cursor-pointer px-4 rounded-md hover:bg-yellow-600 transition duration-200">
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlansPage;
