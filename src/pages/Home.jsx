import { useNavigate } from "react-router-dom"

export default function Home() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-6xl font-extrabold mb-6 text-indigo-700">
        BharatMart 🇮🇳
      </h1>

      <p className="text-xl max-w-2xl mb-8 text-gray-700">
        India’s fastest growing online marketplace.  
        Shop fashion, electronics, groceries and more —
        all at unbeatable prices.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-indigo-700 transition duration-300 shadow-lg"
      >
        Explore Now
      </button>

    </div>
  )
}