import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { EventProvider } from './context/EventContext'
import { AuthProvider } from './context/AuthContext'

// Ensure a sensible default theme: use saved preference or default to dark
try {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === null) document.documentElement.classList.add('dark')
} catch {}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EventProvider>
          <App />
        </EventProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
