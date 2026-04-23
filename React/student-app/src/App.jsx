import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import navbar from './components/navbar'
import home from './components/home'
import about from './components/about'
import contact from './components/contact'
import './App.css'

function App() {
  const name = "Shweta";

  return (
    // <h1>Hello {name}</h1>
     <BrowserRouter>
    <Navbar/>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>

    </BrowserRouter>
    
  )

}

export default App
