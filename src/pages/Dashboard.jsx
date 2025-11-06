import { useState } from 'react'
import { useEvents } from '../context/EventContext'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const { events, deleteEvent, updateEvent } = useEvents()
  const [q, setQ] = useState('')

  const filtered = events.filter(e => e.title.toLowerCase().includes(q.toLowerCase()))

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold">My Events</h1>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..."
               className="rounded-xl border border-gray-300 px-3 py-2" />
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Date</th>
              <th className="p-3">Category</th>
              <th className="p-3">Location</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(e => (
              <tr key={e.id} className="border-t">
                <td className="p-3">{e.title}</td>
                <td className="p-3">{new Date(e.date).toLocaleString()}</td>
                <td className="p-3">{e.category}</td>
                <td className="p-3">{e.location}</td>
                <td className="p-3 flex gap-2">
                  <Link to={`/events/${e.id}`} className="text-blue-600 hover:underline">View</Link>
                  <button onClick={()=>deleteEvent(e.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
