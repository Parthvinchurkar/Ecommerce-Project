import { useState } from "react"

export default function Orders() {
  const [orders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  )

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Order History 📦</h1>

      {orders.length === 0 ? (
        <p>No previous orders</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="bg-white p-4 shadow mb-4 rounded">
            <p className="font-bold">Total: ₹ {order.total}</p>
          </div>
        ))
      )}
    </div>
  )
}