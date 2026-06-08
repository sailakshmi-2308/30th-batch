import React from 'react'

export default function ProtectRoute(props) {
    if(props.isLogin){
        return props.children
    }
  return (
    <div>
      <h1>please login first</h1>
    </div>
  )
}


