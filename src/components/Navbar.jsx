import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"

export default function Navbar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(state => state.auth?.user)
  const cartItems = useSelector(state => state.cart?.items || [])

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 flex justify-between items-center shadow-lg">

      <Link to="/" className="text-2xl font-bold tracking-wide">
        BharatMart 🇮🇳
      </Link>

      <div className="flex gap-6 items-center">

        {user && (
          <>
            <Link to="/products">Products</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart ({totalQuantity})</Link>
          </>
        )}

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-white text-black px-4 py-1 rounded-lg"
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  )
}