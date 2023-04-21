import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      {/* use Browser Router , routes, and route to link all different pages  */}
      <BrowserRouter>
        <Routes>
          {/* Every path is defined here show that we can use it any where */}
          <Route path='/' element={<Navbar />} />
          {/* <Route path='/' element={<Add />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
