import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"

export default function Wishlist() {
  const { wishlist } = useSelector(state => state.cart)

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-6">
          {wishlist.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  )
}