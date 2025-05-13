import React from 'react';

const FoodCategorySkeleton = () => {
  return (
    <section id="categories" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif font-bold mb-2 text-center">
        Explore Categories
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Find recipes by category and discover new culinary adventures
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-xl shadow-md animate-pulse bg-gray-100"
          >
            <div className="h-48 bg-gray-300"></div>
            <div className="bg-white p-4 text-center">
              <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCategorySkeleton;
