import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEvents } from '../context/EventContext'

export default function CreateEvent() {
  const nav = useNavigate()
  const { addEvent } = useEvents()
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: 'Conference'
  })

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.title || !form.date || !form.location) return alert('Please fill required fields.')
    const id = addEvent({ ...form, attendees: [] })
    nav(`/events/${id}`)
  }

  return (
    <div className="card p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create new event</h1>
      <form className="grid gap-4" onSubmit={submit}>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Title *</label>
          <input className="w-full rounded-xl border border-gray-300 px-3 py-2"
                 value={form.title} onChange={e=>update('title', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Description</label>
          <textarea className="w-full rounded-xl border border-gray-300 px-3 py-2"
                    rows="4" value={form.description} onChange={e=>update('description', e.target.value)} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Date & time *</label>
            <input type="datetime-local" className="w-full rounded-xl border border-gray-300 px-3 py-2"
                   value={form.date} onChange={e=>update('date', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Category</label>
            <select className="w-full rounded-xl border border-gray-300 px-3 py-2"
                    value={form.category} onChange={e=>update('category', e.target.value)}>
              <option>Conference</option>
              <option>Workshop</option>
              <option>Meetup</option>
              <option>Concert</option>
              <option>Festival</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Location *</label>
          <input className="w-full rounded-xl border border-gray-300 px-3 py-2"
                 value={form.location} onChange={e=>update('location', e.target.value)} />
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-primary" type="submit">Create</button>
          <button type="button" className="btn btn-outline" onClick={()=>nav(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
