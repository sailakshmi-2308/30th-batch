import React, { useState } from 'react'
import axios from 'axios'

export default function AddDoctor() {
    const [name,setName]=useState("")
    const [salary,setSalary]=useState("")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("")
    const [specialization,setSpecialization]=useState("")


    function handleSubmit(e){
        e.preventDefault()
        const newDoctor={
         name,
         salary,
         age,
         gender,
        specialization
 }
        axios.post("https://doc-back.onrender.com/doctors",newDoctor)
        .then(()=>{
            alert("posted successfully")
            setName("")
            setAge("")
            setGender("")
            setSalary("")
            setSpecialization("")
        })

    }
  return (
    <div>
      Register here
      <form action="" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='enter doctor name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

<br /><br />
        <input 
        type="text"
        value={salary}
        placeholder='enter doctor salary' 
             onChange={(e)=>setSalary(e.target.value)}
        />
<br /><br />
        <input 
        type="text"
        value={age}
        placeholder='enter doctor age'
          onChange={(e)=>setAge(e.target.value)}
        />
<br /><br />
         <select name="" id="" value={gender}  onChange={(e)=>setGender(e.target.value)} >
            <option value="">Enter Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
         </select>
<br /><br />
          <input 
        type="text"
        value={specialization}
        placeholder='enter doctor specialization' 
          onChange={(e)=>setSpecialization(e.target.value)}
        />
<br /><br />
        <button>Add Doctor</button>


      </form>
    </div>
  )
}
