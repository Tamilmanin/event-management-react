import { Link } from 'react-router-dom'
import { useEvents } from '../context/EventContext'
import EventCard from '../components/EventCard'

export default function Home() {
  const { events } = useEvents()
  const upcoming = [...events].sort((a,b)=> new Date(a.date)-new Date(b.date)).slice(0,3)

  return (
    <section>
      <div className="card p-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Discover & Manage Events Effortlessly</h1>
        <p className="mt-2 text-gray-600">
          Browse upcoming events, create your own, and keep track of attendees — all in one place.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link to="/events" className="btn btn-primary">Explore Events</Link>
          <Link to="/create" className="btn btn-outline">Create Event</Link>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3">Upcoming highlights</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {upcoming.map(e => <EventCard key={e.id} event={e} />)}
      </div>
    </section>
  )
}
