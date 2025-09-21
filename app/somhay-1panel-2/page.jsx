'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminPanel() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadOrders() {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) {
        console.error(error)
      } else if (isMounted) {
        setOrders(data)
      }
      if (isMounted) setLoading(false)
    }

    loadOrders()

    // OPTIONAL: realtime subscribe to new orders
    const channel = supabase.channel('orders-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'orders' }, (payload) => {
        setOrders(prev => [payload.new, ...prev])
      })
      .subscribe()

    return () => {
      isMounted = false
      channel.unsubscribe()
    }
  }, [])

  if (loading) return <div className="p-6">Loading orders…</div>
  if (!orders.length) return <div className="p-6">No orders yet.</div>

  return (
    <div className="p-6 space-y-4 max-w-3xl mx-auto">
      {orders.map((o) => (
        <div key={o.id} className="border rounded-lg p-4 shadow">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm text-gray-500">Order #{o.id.slice(0,8)}</div>
              <div className="text-lg font-semibold">{o.product_name} — x{o.quantity}</div>
              <div className="text-sm text-gray-600">{o.order_type} • {o.shipping_method}</div>
            </div>
            <div className="text-sm text-gray-500">{new Date(o.created_at).toLocaleString()}</div>
          </div>

          <div className="mt-3 text-sm text-gray-700">
            <div><strong>Name:</strong> {o.full_name}</div>
            <div><strong>Phone:</strong> {o.phone}</div>
            <div><strong>Location:</strong> {o.location}</div>
            {o.notes && <div><strong>Notes:</strong> {o.notes}</div>}
            {o.product_url && <div><a target="_blank" rel="noreferrer" href={o.product_url} className="text-blue-600">Product link</a></div>}
          </div>
        </div>
      ))}
    </div>
  )
}