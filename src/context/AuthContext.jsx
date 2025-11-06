import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('em_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const login = (email, password) => {
    // demo login only
    const u = { email }
    setUser(u)
    localStorage.setItem('em_user', JSON.stringify(u))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('em_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
