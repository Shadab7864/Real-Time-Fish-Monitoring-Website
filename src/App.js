import React from 'react'
import Try from './component/Navbar'
import Temperature from './component/Temperature'
import PH from './component/PH'
import TDS from './component/TDS'
import { BrowserRouter, createBrowserRouter, Outlet, Routes,Route } from 'react-router-dom'
import Home from './component/Home'



const Applayout=()=>(
  <>
  <Try/>
  <Outlet/>
  </>

);
const router=createBrowserRouter([

  {
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/TemperatureGraph',
        element:<Temperature/>
      },     
      {
        path:'/pHGraph',
        element:<PH/>
      },     
      {
        path:'/TDSGraph',
        element:<TDS/>
      },

    ]

  }

])
function App() {
  return (
    <div>
      <BrowserRouter>
      <Applayout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/TemperatureGraph' element={<Temperature/>}/>
        <Route path='/pHGraph' element={<PH/>}/>
        <Route path='/TDSGraph' element={<TDS/>}/>
        
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
