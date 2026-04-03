import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Tenants from './pages/Tenants'
import Plans from './pages/Plans'
import Settings from './pages/Settings'
import Notifications from './pages/Notifications'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('sa_token')
  if (!token) return <Navigate to="/login" />
  return children
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/tenants" element={
          <ProtectedRoute>
            <Tenants />
          </ProtectedRoute>
        } />

        <Route path="/plans" element={
          <ProtectedRoute>
            <Plans>
              {/* Billing Engines */}
            </Plans>
          </ProtectedRoute>
        } />

        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />

        <Route path="/notifications" element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        } />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
