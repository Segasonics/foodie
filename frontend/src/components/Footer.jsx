

const Footer = () => {
  return (
    <>
       <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-4">FoodieShare Connect</h3>
                        <p className="text-gray-400 mb-4">Share your passion for cooking and discover amazing recipes from around the world.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                                <i className="fab fa-facebook-f text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                                <i className="fab fa-instagram text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                                <i className="fab fa-pinterest text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                                <i className="fab fa-youtube text-lg"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Recipes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Categories</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Collections</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Breakfast</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Main Course</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Desserts</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Healthy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Quick Meals</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">Vegetarian</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-3 text-gray-400"></i>
                                <span className="text-gray-400">123 street, Foodie City, FC 12345</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope mr-3 text-gray-400"></i>
                                <span className="text-gray-400">info@foodieshare.com</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone mr-3 text-gray-400"></i>
                                <span className="text-gray-400">+91 9366763177</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} FoodieShare. All rights reserved.</p>
                </div>
            </footer>
    </>
  )
}

export default Footer
