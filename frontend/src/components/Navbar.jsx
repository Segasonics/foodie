import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout, checkAuth } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const scrollToSection = (id) => {
    navigate("/");
    setIsOpen(false); // close menu on link click
    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-black/70 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to='/' className="text-2xl font-bold font-serif">FoodieShare</Link>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-lg">
            <button onClick={() => scrollToSection("home")} className="hover:text-yellow-400 cursor-pointer transition duration-200">Home</button>
            <button onClick={() => scrollToSection("categories")} className="hover:text-yellow-400 cursor-pointer transition duration-200">Categories</button>
            <button onClick={() => scrollToSection("recipes")} className="hover:text-yellow-400 cursor-pointer transition duration-200">Recipes</button>
            <button onClick={() => scrollToSection("features")} className="hover:text-yellow-400 cursor-pointer transition duration-200">Featured</button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className='items-center hidden md:flex space-x-2'>
            {!user ? (
              <>
                <Link to='/login' className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-full transition duration-200">Log In</Link>
                <Link to='/signup' className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-full transition duration-200">Sign Up</Link>
              </>
            ) : (
              <Link to='/' onClick={handleLogout} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-full transition duration-200">Logout</Link>
            )}
            {user?.role === "admin" && (
              <Link to='/admin' className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-full transition duration-200">Admin</Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-4 space-y-4">
          <button onClick={() => scrollToSection("home")} className="block w-full text-left text-white hover:text-yellow-400">Home</button>
          <button onClick={() => scrollToSection("categories")} className="block w-full text-left text-white hover:text-yellow-400">Categories</button>
          <button onClick={() => scrollToSection("recipes")} className="block w-full text-left text-white hover:text-yellow-400">Recipes</button>
          <button onClick={() => scrollToSection("features")} className="block w-full text-left text-white hover:text-yellow-400">Featured</button>

          {!user ? (
            <>
              <Link to='/login' onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400">Log In</Link>
              <Link to='/signup' onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400">Sign Up</Link>
            </>
          ) : (
            <Link to='/' onClick={handleLogout} className="block text-white hover:text-yellow-400">Logout</Link>
          )}
          {user?.role === "admin" && (
            <Link to='/admin' onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400">Admin</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
