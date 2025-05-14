import { useState } from "react";
import { useAuthStore } from "../store/authStore"

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const { subscribeToNewsLetter,isLoading } = useAuthStore();

  const handleEmail = async (e) => {
    e.preventDefault()
    await (subscribeToNewsLetter(email))
    setEmail("")
  }

  return (
    <>
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join Our Culinary Community</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for weekly recipe inspiration, cooking tips, and exclusive content</p>
          <div>
            <form onSubmit={handleEmail} className="flex flex-col sm:flex-row gap-3">
              <input
                name="email"
                type="email"
                value={email}
                disabled={isLoading}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-full border-none shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter
