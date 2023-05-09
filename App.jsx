import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from '../LandingPage/LandingPage'
import Login from '../Login/Login'
import AnimalForm from '../AnimalForm/AnimalForm'
import AnimalList from '../AnimalList/AnimalList'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AnimalForm" element={<AnimalForm />} />
          <Route path="/AnimalList" element={<AnimalList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
