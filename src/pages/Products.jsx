import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../features/cart/cartSlice"
import { addToWishlist, removeFromWishlist } from "../features/wishlist/wishlistSlice"

export default function Products() {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products.products)
  const wishlistItems = useSelector(state => state.wishlist.items)

  const [searchTerm, setSearchTerm] = useState("")
  const [genderFilter, setGenderFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortOption, setSortOption] = useState("")

  let filteredProducts = [...products]

  // 🔍 SEARCH FILTER
  if (searchTerm.trim() !== "") {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Gender Filter
  if (genderFilter !== "all") {
    filteredProducts = filteredProducts.filter(
      product => product.gender === genderFilter
    )
  }

  // Category Filter
  if (categoryFilter !== "all") {
    filteredProducts = filteredProducts.filter(
      product => product.category === categoryFilter
    )
  }

  // Price Sorting
  if (sortOption === "low") {
    filteredProducts.sort((a, b) => a.price - b.price)
  }

  if (sortOption === "high") {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <div className="min-h-screen p-10 bg-gray-100">

      <h2 className="text-3xl font-bold mb-8">
        Our Products
      </h2>

      {/* 🔍 SEARCH BAR */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* FILTER SECTION */}
      <div className="flex gap-5 mb-10 flex-wrap">

        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="all">All Gender</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="unisex">Unisex</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="all">All Category</option>
          <option value="clothes">Clothes</option>
          <option value="electronics">Electronics</option>
          <option value="grocery">Grocery</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">Sort By Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProducts.map(product => {

          const isInWishlist = wishlistItems.some(
            item => item.id === product.id
          )

          return (
            <div
              key={product.id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-52 object-cover rounded-xl"
              />

              <h3 className="text-lg font-semibold mt-4">
                {product.title}
              </h3>

              <p className="text-indigo-600 font-bold text-base mt-2">
                ₹{product.price}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {product.category}
              </p>

              <div className="flex gap-3 mt-4">

                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() =>
                    isInWishlist
                      ? dispatch(removeFromWishlist(product.id))
                      : dispatch(addToWishlist(product))
                  }
                  className={`flex-1 py-2 rounded-lg transition text-white ${
                    isInWishlist
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-pink-500 hover:bg-pink-600"
                  }`}
                >
                  {isInWishlist ? "❤️ Added" : "🤍 Wishlist"}
                </button>

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}