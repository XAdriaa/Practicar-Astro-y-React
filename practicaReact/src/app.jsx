import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react' // 1. Importar el componente
import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from './componentes/header'
import Footer from './componentes/footer'
import Home from './pages/home/home'
import Contacte from './pages/contacte/contacte'
import Adiestra from './pages/adiestra'
import Adopta from './pages/adopta'
import NotFound from './componentes/404'

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
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />

      {/* 2. Añadir el componente aquí */}
      <Analytics />
      <SpeedInsights/>
    </div>
  )
}

export default App