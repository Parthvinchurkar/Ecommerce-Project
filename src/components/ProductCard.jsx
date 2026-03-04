import { useDispatch, useSelector } from "react-redux"
import { addToCart, toggleWishlist } from "../features/cart/cartSlice"

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  // SAFE SELECTOR (kabhi crash nahi karega)
  const wishlist = useSelector(
    state => state.cart?.wishlist || []
  )

  const isWishlisted = wishlist.some(
    item => item.id === product.id
  )

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="mt-3 font-semibold">
        {product.title}
      </h2>

      <p className="text-lg font-bold mt-2">
        ₹ {product.price}
      </p>

      <div className="flex gap-2 mt-4">

        <button
          onClick={() => dispatch(addToCart(product))}
          className="flex-1 bg-yellow-500 py-2 rounded-lg hover:bg-yellow-600"
        >
          Add to Cart
        </button>

        <button
          onClick={() => dispatch(toggleWishlist(product))}
          className={`px-3 rounded-lg transition ${
            isWishlisted
              ? "bg-red-600 text-white"
              : "bg-gray-300"
          }`}
        >
          ♥
        </button>

      </div>
    </div>
  )
}