import { Navigate, Outlet } from 'react-router-dom'
import { ReactNode } from 'react'
 interface PublicRouteProps { 
    children?: ReactNode 
} 
const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
     const isLoggedIn: boolean = localStorage.getItem('login') === 'true'
     if (isLoggedIn) {
         return <Navigate to="/main" replace /> 
        } 
     return children ? children : <Outlet /> 
    } 
     export default PublicRoute 