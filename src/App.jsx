import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import CreateEvent from './pages/CreateEvent'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { useAuth } from './context/AuthContext'

export default function App() {
  const { user } = useAuth()
  return (
    <div>
      <Navbar />
      <main className="container py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/create" element={user ? <CreateEvent /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  )
}
