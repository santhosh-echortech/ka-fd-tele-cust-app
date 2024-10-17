import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import { AuthProvider } from '../Context/AuthContext/AuthContext'
import { Context } from '../Context/Context'
import MobileOnlyApp from '../Components/MobileOnlyApp/MobileOnlyApp'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'

function Router() {
    return (
        <AuthProvider>
            <Context>
                <MobileOnlyApp>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                        </Routes>
                    </BrowserRouter>
                </MobileOnlyApp>
            </Context>
        </AuthProvider>
    )
}

export default Router