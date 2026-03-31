import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react' // 1. Importar el componente
import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from './componentes/header'
import Footer from './componentes/footer'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Train from './pages/Train/Train'
import Adopt from './pages/Adopt/Adopt'
import NotFound from './componentes/404'
import Politic from './pages/Politic/Politic'
import Cookies  from './pages/Cookies/Cookies'
import LegalWarning from './pages/LegalWarning/LegalWarning'
import Login from './backoffice/pages/Login/Login'

const App = () => {
  return (
    <div>
      <Routes>
        /**Estas son la sruta de la parte del cliente*/
        <Route path='/' element={<Header />}>
          <Route index element={<Home />}></Route>
          <Route path='contacte' element={<Contact />}></Route>
          <Route path='adopta' element={<Adopt />}></Route>
          <Route path='Cursos' element={<Train />}></Route>
          <Route path='PoliticaPrivacitat' element={<Politic />}></Route>
          <Route path='Cookies' element={<Cookies />}></Route>
          <Route path='LegalWarning' element={<LegalWarning />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>

        /**Rutas por parte de los trabajadores la parte del backoffice */
        <Route path='Admin' element={<Login />}>

        </Route>
      </Routes>
      <Footer />

      {/*Analiticas de vercel */}
      <Analytics />
      <SpeedInsights/>
    </div>
  )
}

export default App