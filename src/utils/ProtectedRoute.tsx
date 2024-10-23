import { Navigate, Outlet } from 'react-router-dom'
import { ReactNode } from 'react'


 interface ProtectedRouteProps { children?: ReactNode } 

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => { 
    const isLoggedIn: boolean = localStorage.getItem('login') === 'true'


    if (!isLoggedIn) {
        return <Navigate to="/signup" replace />
    }
    
    return children ? children : <Outlet /> 
} 
export default ProtectedRoute