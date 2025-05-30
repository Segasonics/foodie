import { useEffect, useRef } from 'react';
import foodie from '../assets/videos/foodie.mp4';
import heroImg from '../assets/heroImg.png';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Herosection = () => {
  const videoRef = useRef(null);
  const { user } = useAuthStore();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  const handleButtonClick=()=>{
    if(!user){
      toast.error("Login or sign up to subscribe");
      return;
    }
    window.location.href = import.meta.env.VITE_STRIPE_YEARLY_PLAN_LINK;
  }
  return (
    <>
      <section id='home' className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          poster={heroImg}
          preload="none"
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={foodie} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">Share Your Culinary Journey</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl drop-shadow-md">
            Discover, create, and share delicious recipes from around the world.
          </p>

          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6 max-w-md w-full shadow-lg">
            <p className="text-lg md:text-xl font-medium mb-4">Subscribe for 1 year to unlock full access to all recipes and premium features</p>
            <button
              onClick={handleButtonClick}
              disabled={user?.isSubscribed}
              className={`py-3 px-8 rounded-full font-bold shadow-md text-black transition-all duration-300 
    ${user?.isSubscribed
                  ? 'bg-gray-200 cursor-not-allowed'
                  : 'bg-yellow-400 hover:bg-yellow-500 hover:scale-105 cursor-pointer'
                }`}
            >
              {user?.isSubscribed ? '✓ Subscribed' : 'Subscribe Now'}
            </button>

          </div>

          <div className="absolute bottom-8 animate-bounce">
            <i className="fas fa-chevron-down text-2xl text-white"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
