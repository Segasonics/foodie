import React from 'react'
import { categories } from '../assets/data'
import { Link } from 'react-router-dom'

const FoodCategory = () => {
  return (
    <>
      <section id="categories" className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif font-bold mb-2 text-center">Explore Categories</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Find recipes by category and discover new culinary adventures</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="group overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                            <Link to={`/category/${category.name.toLocaleLowerCase()}`} data-readdy="true">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="bg-white p-4 text-center">
                                    <h3 className="text-xl font-serif font-medium">{category.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{category.count} recipes</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
    </>
  )
}

export default FoodCategory
