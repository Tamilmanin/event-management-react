import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEvents } from '../context/EventContext'
import { useAuth } from '../context/AuthContext'

export default function EventDetails() {
  const { id } = useParams()
  const { getEvent, deleteEvent } = useEvents()
  const { user } = useAuth()
  const nav = useNavigate()

  const event = getEvent(id)
  if (!event) return <p>Event not found.</p>

  const handleDelete = () => {
    if (confirm('Delete this event?')) {
      deleteEvent(id)
      nav('/events')
    }
  }

  return (
    <article className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 card overflow-hidden">
        <img src={`https://picsum.photos/seed/${event.id}/1200/500`} alt={event.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <div className="text-sm text-gray-500">{new Date(event.date).toLocaleString()} • {event.location}</div>
          <h1 className="text-2xl font-bold mt-1">{event.title}</h1>
          <p className="mt-3 text-gray-700 whitespace-pre-line">{event.description}</p>
        </div>
      </div>
      <aside className="card p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm px-2 py-1 rounded-full bg-blue-50 text-blue-700">{event.category}</span>
          <span className="text-sm text-gray-600">{event.attendees?.length || 0} attending</span>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Link to="/events" className="btn btn-outline">Back to list</Link>
          {user && (
            <button onClick={handleDelete} className="btn btn-primary">Delete Event</button>
          )}
        </div>
      </aside>
    </article>
  )
}
