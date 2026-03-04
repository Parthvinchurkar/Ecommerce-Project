import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "../features/cart/cartSlice"
import { useNavigate } from "react-router-dom"

export default function Cart() {

  const { items } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="py-10 px-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map(item => (
        <div
          key={item.id}
          className="flex items-center justify-between mb-4 bg-white p-4 rounded shadow"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.thumbnail}
              className="w-16 h-16 object-cover rounded"
              alt={item.title}
            />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p>₹ {item.price} × {item.quantity}</p>
            </div>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <>
          <h2 className="text-xl font-bold mt-6">
            Total: ₹ {total}
          </h2>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  )
}