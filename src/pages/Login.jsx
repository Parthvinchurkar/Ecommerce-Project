import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { login } from "../features/auth/authSlice"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(state => state.auth?.user)

  // ✅ Auto redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/products")
    }
  }, [user, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert("Please fill all fields")
      return
    }

    // Simple demo login
    dispatch(login({ email }))

    // After login navigate automatically handled by useEffect
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">

        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          Login to BharatMart 🇮🇳
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold">
            Register
          </Link>
        </p>

      </div>

    </div>
  )
}