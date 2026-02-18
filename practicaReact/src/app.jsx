import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './componentes/header'
import Home from './pages/home'
import Contacte from './pages/contacte'

const App = () => {
  return (
	<div>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='contacte' element={<Contacte />}></Route>
      </Route>
    </Routes>
  </div>
  )
}

export default App