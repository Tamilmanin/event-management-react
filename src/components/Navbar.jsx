import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  const active = ({ isActive }) =>
    isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'

  return (
    <header className="border-b bg-white">
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
          {user ? (
            <>
              <span className="hidden sm:inline text-sm text-gray-600">{user.email}</span>
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
