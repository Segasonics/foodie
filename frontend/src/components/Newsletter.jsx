import React from 'react'

const Newsletter = () => {
  return (
    <>
      <section className="py-16 px-4 bg-yellow-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold mb-4">Join Our Culinary Community</h2>
                    <p className="text-gray-600 mb-8">Subscribe to our newsletter for weekly recipe inspiration, cooking tips, and exclusive content</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow py-3 px-4 rounded-full border-none shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Newsletter
