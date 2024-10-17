import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import { AuthProvider } from '../Context/AuthContext/AuthContext'

function Router() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} /> */}
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default Router