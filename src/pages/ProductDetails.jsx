import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../services/api"
import { useDispatch } from "react-redux"
import { addToCart } from "../features/cart/cartSlice"

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data))
  }, [id])

  if (!product) return <p className="py-20 text-center">Loading...</p>

  return (
    <div className="grid md:grid-cols-2 gap-10 py-10">
      <img src={product.image} className="h-80 object-contain mx-auto" />
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="mt-4 opacity-70">{product.description}</p>
        <p className="mt-4 text-2xl font-bold">${product.price}</p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-6 bg-black text-white px-8 py-3 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}