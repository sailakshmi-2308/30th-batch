import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  function handleLogOut(){
    localStorage.removeItem("isLogin")
    alert("logout success")
  }
  return (
    <div className="navbar">
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/login">Login</Link>
     <Link to="/addDoctor">Add Doctor</Link>
     <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}
