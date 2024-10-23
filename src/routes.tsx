import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom"
import Signup from "./pages/SignupPage/Signup"
import MainPage from "./pages/MainPage/MainPage"
import React from "react"

const router = createBrowserRouter(
    createRoutesFromElements(
        <React.Fragment>

      <Route path="/" element={<Signup/>} />,
      <Route path="/home" element={<MainPage />} />
        </React.Fragment>
    )
  )


export default router