
import { Routes, Route } from 'react-router-dom'
import Header from './componentes/header'
import Footer from './componentes/footer'
import Home from './pages/home/home'
import Contacte from './pages/contacte'
import Adiestra from './pages/adiestra'
import Adopta from './pages/adopta'

const App = () => {
  return (
	<div>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path='contacte' element={<Contacte />}></Route>
        <Route path='adopta' element={<Adopta />}></Route>
        <Route path='adiestra' element={<Adiestra />}></Route>
      </Route>
    </Routes>
    <Footer />
  </div>
  )
}

export default App