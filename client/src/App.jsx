import React from 'react';   // ← this line is missing  
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import MyOrders from './pages/Orders';
import Footer from './components/Footer';
import Offers from './pages/Offers';
import Signup from './pages/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/signup" element={<Signup />} />
     </Routes>
    
        <Footer />
     
    </>
  )
}

export default App
