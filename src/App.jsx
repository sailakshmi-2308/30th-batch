import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import DoctorDetails from './DoctorDetails'
import AddDoctor from './AddDoctor'
import EditDoctor from './EditDoctor'

export default function App() {
  const isLogin=true
  return (
    <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/doctor/:id" element={<DoctorDetails/>}/>
    {/* <Route path="/addDoctor" element={<AddDoctor></AddDoctor>}/> */}


     <Route path="/addDoctor" element={ isLogin ? <AddDoctor></AddDoctor> : <h1>Please Login First</h1>} />
    <Route path="/edit/:id" element={<EditDoctor/>}/>
  </Routes>
  </BrowserRouter>

    </div>
  )
}
