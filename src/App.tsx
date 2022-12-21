import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import  Watch from './Pages/Watch'
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/Watch/:id' element={<Watch/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App