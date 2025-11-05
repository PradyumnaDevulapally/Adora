import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import { Routes, Route } from "react-router-dom";

// Adora — Jewelry Collection Demo by Pradyumna Devulapally


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
    </Routes>
    
    </>
  )
}

export default App
