"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function AdminDashboard() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase.from("orders").select("*").order("id", { ascending: false })
      if (error) {
        console.error("❌ Error fetching orders:", error.message)
      } else {
        setOrders(data)
      }
      setLoading(false)
    }

    fetchOrders()
  }, [])

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Loading orders...</p>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📦 Admin Dashboard</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
            >
              {order.product_image ? (
                <img
                  src={order.product_image}
                  alt={order.product_name}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}

              <h2 className="text-lg font-semibold text-gray-800">{order.product_name}</h2>
              <p className="text-sm text-gray-500">Qty: {order.quantity}</p>
              <p className="text-sm text-gray-500">Type: {order.order_type}</p>
              <p className="text-sm text-gray-500">Shipping: {order.shipping_method}</p>

              <div className="mt-3 border-t pt-2 text-sm text-gray-600">
                <p><strong>Name:</strong> {order.full_name}</p>
                <p><strong>Phone:</strong> {order.phone}</p>
                <p><strong>Location:</strong> {order.location}</p>
              </div>

              {order.notes && (
                <p className="mt-2 text-xs text-gray-500 italic">"{order.notes}"</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
                  }
