import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'


// In order to load nav bar in every page
const Applayout = () => (
  <>
    <Outlet />
  </>

);

function App() {
  return (
    <div>
      {/* use Browser Router , routes, and route to link all different pages  */}
      <BrowserRouter>
        <Applayout />
        <Routes>
          {/* Every path is defined here show that we can use it any where */}
          <Route path='/' element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
