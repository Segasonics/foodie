import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaClock, FaSignal, FaBookmark } from 'react-icons/fa';
import { useRecipeStore } from '../store/recipeStore';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperOverride.css'; 

const LatestRecipes = () => {
    const{getLimitedRecipes,recipes}=useRecipeStore();
    const getLatestRecipes=async()=>{
         await getLimitedRecipes()
    }

    useEffect(()=>{
      getLatestRecipes()
    },[])
    return (
        <section id='recipes' className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-serif font-bold">Latest Recipes</h2>
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-14"
                >
                    {recipes.map((recipe, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-serif font-medium mb-2">{recipe.title}</h3>
                                    <div className="flex items-center text-gray-500 text-sm mb-4">
                                        <span className="flex items-center mr-4">
                                            <FaClock className="mr-1" /> {recipe.prepTime}
                                        </span>
                                        <span className="flex items-center">
                                            <FaSignal className="mr-1" /> Normal
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <img
                                                src={recipe.image}
                                                alt={`featured`}
                                                className="w-8 h-8 rounded-full mr-2 object-cover"
                                            />
                                        </div>
                                        <button className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer rounded-md whitespace-nowrap">
                                            <FaBookmark className="text-lg" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default LatestRecipes;
