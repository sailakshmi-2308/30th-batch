import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function EditDoctor() {
 const [name,setName]=useState("sai")
    const [salary,setSalary]=useState("")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("")
    const [specialization,setSpecialization]=useState("")

useEffect(()=>{
loadDoctors()
},[])
    const {id} = useParams()
    function loadDoctors(){
            axios.get(`https://doc-back.onrender.com/doctors/${id}`)
            .then((mani)=>{
                console.log(mani.data);
                setName(mani.data.name);
                setSalary(mani.data.salary)
                setGender(mani.data.gender)
                setAge(mani.data.age)
                setSpecialization(mani.data.specialization)
            })
    }


    function updateDoctor(e){
        e.preventDefault()
axios.put(`https://doc-back.onrender.com/doctors/${id}`,{
    name,
    salary,
    age,
    gender,
    specialization
}).then(()=>{
    alert("updated successfully")
})

    }

  return (
    <div>
      UPDATE DOCTOR

      <div>
  
      <form action="" onSubmit={updateDoctor}>
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
        <button>Update Doctor</button>


      </form>
    </div>
    </div>
  )
}
