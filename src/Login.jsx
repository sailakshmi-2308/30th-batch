import React from 'react'

export default function Login() {
 function handleLogin(){
  localStorage.setItem("isLogin",true)
  alert("login success")
 }
  return (
    <div>
     <button onClick={handleLogin}>Login</button>
    </div>
  )
}
