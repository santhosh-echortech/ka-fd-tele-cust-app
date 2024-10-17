import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import { AuthProvider } from '../Context/AuthContext/AuthContext'
import { Context } from '../Context/Context'
import MobileOnlyApp from '../Components/MobileOnlyApp/MobileOnlyApp'

function Router() {
    return (
        <AuthProvider>
            <Context>
                <MobileOnlyApp>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<></>} />
                            <Route path="/Home" element={<ProtectedRoute> </ProtectedRoute>} />
                        </Routes>
                    </BrowserRouter>
                </MobileOnlyApp>
            </Context>
        </AuthProvider>
    )
}

export default Router