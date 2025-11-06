import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const nav = useNavigate()
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('password')

  const submit = (e) => {
    e.preventDefault()
    login(email, password)
    nav('/dashboard')
  }

  return (
    <div className="card p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="grid gap-4" onSubmit={submit}>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input className="w-full rounded-xl border border-gray-300 px-3 py-2"
                 value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input type="password" className="w-full rounded-xl border border-gray-300 px-3 py-2"
                 value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  )
}
