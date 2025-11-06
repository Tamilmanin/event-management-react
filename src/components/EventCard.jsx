import { Link } from 'react-router-dom'

export default function EventCard({ event }) {
  return (
    <div className="card overflow-hidden">
      <img src={`https://picsum.photos/seed/${event.id}/800/400`} alt={event.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <div className="text-sm text-gray-500">{new Date(event.date).toLocaleString()}</div>
        <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
        <p className="text-gray-600 mt-1 line-clamp-2">{event.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm px-2 py-1 rounded-full bg-blue-50 text-blue-700">{event.category}</span>
          <Link to={`/events/${event.id}`} className="text-blue-600 hover:underline">View</Link>
        </div>
      </div>
    </div>
  )
}
