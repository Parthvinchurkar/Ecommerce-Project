import { Link } from "react-router-dom"

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for shopping with BharatMart ❤️
        </p>

        <Link
          to="/products"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  )
}