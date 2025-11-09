import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { user, logout } = useAuth()

  const [dark, setDark] = useState(() => {
    try {
      const v = localStorage.getItem('theme')
      if (v) return v === 'dark'
      // default to dark when no saved preference
      return true
    } catch (e) {
      return true
    }
  })

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {}
  }, [dark])

  const active = ({ isActive }) =>
    isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">
          <span className="text-blue-600">Event</span>Manage
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/events" className={active}>Events</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
          <NavLink to="/create" className={active}>Create</NavLink>
          {user && <NavLink to="/dashboard" className={active}>Dashboard</NavLink>}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(d => !d)}
            className="btn btn-outline"
            aria-label="Toggle theme"
          >
            {dark ? 'Light' : 'Dark'}
          </button>

          {user ? (
            <>
              <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-300">{user.email}</span>
              <button className="btn btn-outline" onClick={logout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="btn btn-primary">Login</NavLink>
          )}
        </div>
      </div>
    </header>
  )
}
