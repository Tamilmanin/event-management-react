import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import seed from '../data/events.json'

const EventContext = createContext(null)

export function EventProvider({ children }) {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('em_events')
    if (saved) {
      setEvents(JSON.parse(saved))
    } else {
      setEvents(seed)
      localStorage.setItem('em_events', JSON.stringify(seed))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('em_events', JSON.stringify(events))
  }, [events])

  const addEvent = (e) => {
    const withId = { ...e, id: crypto.randomUUID() }
    setEvents(prev => [withId, ...prev])
    return withId.id
  }

  const updateEvent = (id, patch) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, ...patch } : e))
  }

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id))
  }

  const getEvent = (id) => events.find(e => e.id === id)

  const value = useMemo(() => ({
    events, addEvent, updateEvent, deleteEvent, getEvent
  }), [events])

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>
}

export const useEvents = () => useContext(EventContext)
