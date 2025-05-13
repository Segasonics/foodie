import React, { useEffect ,useRef,useState} from 'react'
import foodie from '../assets/videos/foodie.mp4'
import Navbar from './Navbar';
import heroImg from '../assets/heroImg.png'
const Herosection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Video autoplay failed:", error);
            });
        }
    }, []);
    return (
        <>
            <section id='home' className="relative h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <video
                    poster={heroImg}
                    preload='none'
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
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-center">Share Your Culinary Journey</h1>
                    <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">Discover, create and share delicious recipes from around the world</p>
                    <div className="relative w-full max-w-2xl">
                        <input
                            type="text"
                            name="herosection"
                            placeholder="Search for recipes, ingredients, or cuisines..."
                            className="w-full py-4 px-6 pr-12 rounded-full border-2xl outline-2 text-white-800 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fas fa-search text-xl"></i>
                        </button>
                    </div>
                    <div className="absolute bottom-8 animate-bounce">
                        <i className="fas fa-chevron-down text-2xl"></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosection
