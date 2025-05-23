import { CheckCircle, ChefHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';



const PurchaseSuccessPage = () => {
  // const [isProcessing, setIsProcessing] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const sessionId = new URLSearchParams(window.location.search).get('session_id');

  //   const handleCheckoutSuccess = async (sessionId) => {
  //     try {
  //       await axios.post(`${API_URL}/checkout-success`, { sessionId });
  //       // Optionally clear cart or update state
  //     } catch (err) {
  //       setError('Failed to process your purchase.');
  //       console.error(err);
  //     } finally {
  //       setIsProcessing(false);
  //     }
  //   };

  //   if (sessionId) {
  //     handleCheckoutSuccess(sessionId);
  //   } else {
  //     setError('No session ID found in the URL');
  //     setIsProcessing(false);
  //   }
  // }, []);

  // if (isProcessing) return <div className="text-center mt-20 text-lg text-gray-700">Processing your subscription...</div>;
  // if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-yellow-50 to-pink-100">
      <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.1} numberOfPieces={500} recycle={false} />

      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-center relative z-10">
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-yellow-500 w-14 h-14 sm:w-16 sm:h-16" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">Subscription Confirmed!</h1>
        <p className="text-gray-700 mb-2 text-sm sm:text-base">You're now a premium member of Foodie 🍽️</p>
        <p className="text-gray-500 text-xs sm:text-sm mb-6">Explore exclusive recipes and cook like a pro.</p>

        <div className="bg-yellow-100 rounded-lg p-3 sm:p-4 mb-6 text-left text-sm sm:text-base">
          <div className="flex justify-between">
            <span className="text-gray-600">Order ID:</span>
            <span className="font-semibold text-gray-800">#FOODIE1234</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">Subscription:</span>
            <span className="font-semibold text-gray-800">1 Year Premium</span>
          </div>
        </div>

        <Link
          to="/"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 inline-flex items-center justify-center text-sm sm:text-base"
        >
          <ChefHat size={18} className="mr-2" />
          Explore Recipes
        </Link>
      </div>
    </div>
  );
};

export default PurchaseSuccessPage;
