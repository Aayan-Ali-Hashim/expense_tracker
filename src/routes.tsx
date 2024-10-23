import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Signup from "./pages/SignupPage/Signup"
import MainPage from "./pages/MainPage/MainPage"
import Layout from "./utils/Layout";
import ProtectedRoute from "./utils/ProtectedRoute";
import PublicRoute from "./utils/PublicRoute";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
       <Route 
       path="/" 
       element={
       <ProtectedRoute> 
         <MainPage /> 
        </ProtectedRoute>
      } 
      />

 

      <Route 
      path= "/signup"
      element = {
        <PublicRoute>
            <Signup/>
        </PublicRoute>
      }
      />
       </Route> 
       ) 
    )


export default router