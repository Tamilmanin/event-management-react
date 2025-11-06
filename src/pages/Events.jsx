import { useMemo, useState } from 'react'
import { useEvents } from '../context/EventContext'
import EventCard from '../components/EventCard'
import SearchBar from '../components/SearchBar'

export default function Events() {
  const { events } = useEvents()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [sort, setSort] = useState('new')

  const categories = useMemo(() => ['All', ...Array.from(new Set(events.map(e => e.category)))], [events])

  const filtered = useMemo(() => {
    let list = events.filter(e =>
      e.title.toLowerCase().includes(q.toLowerCase()) ||
      e.description.toLowerCase().includes(q.toLowerCase()) ||
      e.location.toLowerCase().includes(q.toLowerCase())
    )
    if (cat !== 'All') list = list.filter(e => e.category === cat)
    if (sort === 'new') list.sort((a,b)=> new Date(b.date)-new Date(a.date))
    if (sort === 'old') list.sort((a,b)=> new Date(a.date)-new Date(b.date))
    return list
  }, [events, q, cat, sort])

  return (
    <section>
      <div className="card p-4 mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:max-w-md"><SearchBar value={q} onChange={setQ} /></div>
        <div className="flex items-center gap-3">
          <select className="rounded-xl border border-gray-300 px-3 py-2" value={cat} onChange={e=>setCat(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select className="rounded-xl border border-gray-300 px-3 py-2" value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
          </select>
        </div>
      </div>
      {filtered.length === 0 ? (
        <p className="text-gray-600">No events found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      )}
    </section>
  )
}
