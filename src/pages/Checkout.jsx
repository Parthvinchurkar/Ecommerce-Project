import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { useNavigate } from "react-router-dom"

export default function Checkout() {

  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [address, setAddress] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("COD")

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleOrder = () => {

    if (!address) {
      alert("Please enter delivery address")
      return
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty")
      return
    }

    // Clear cart
    dispatch(clearCart())

    // Redirect to success page
    navigate("/order-success")
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-3xl font-bold mb-6">
          Checkout
        </h2>

        {/* Address */}
        <div className="mb-6">
          <label className="font-semibold block mb-2">
            Delivery Address
          </label>

          <textarea
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-3 rounded-lg"
            placeholder="Enter full delivery address"
          />
        </div>

        {/* Payment */}
        <div className="mb-6">
          <label className="font-semibold block mb-2">
            Payment Method
          </label>

          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Card">Debit / Credit Card</option>
          </select>
        </div>

        {/* Total */}
        <h3 className="text-xl font-semibold mb-4">
          Total: ₹{totalAmount}
        </h3>

        <button
          onClick={handleOrder}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
        >
          Place Order
        </button>

      </div>

    </div>
  )
}