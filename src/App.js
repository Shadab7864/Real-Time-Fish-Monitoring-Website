import React from 'react'
import Navbar from './component/Navbar'
import Temperature from './component/Temperature'
import PH from './component/PH'
import TDS from './component/TDS'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import Home from './component/Home'


// In order to load nav bar in every page
const Applayout = () => (
  <>
    <Navbar />
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
          <Route path='/' element={<Home />} />
          <Route path='/TemperatureGraph' element={<Temperature />} />
          <Route path='/pHGraph' element={<PH />} />
          <Route path='/TDSGraph' element={<TDS />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
