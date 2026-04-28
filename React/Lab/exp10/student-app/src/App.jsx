import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentList from './StudentList'

function App() {
  const students = [
    {
      id : 1,
      name : "Shweta Gudase",
      age : 20,
      email : "shweta@gmail.com",
      course : "AIML"
    },
    {
      id : 2,
      name : "Amruta Dhumal",
      age : 21,
      email : "amruta@gmail.com",
      course : "AIML"
    },
     {
      id : 3,
      name : "Pratiksha Gadade",
      age : 22,
      email : "patu@gmail.com",
      course : "AIML"
    }
  ]
    return (
    <>
      <div>
          <h1 style={{paddingLeft: "60px"}}>Student Management</h1>

          <StudentList students={students} />
      </div>
    </>
  )
}

export default App
