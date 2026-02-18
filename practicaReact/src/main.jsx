import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './componentes/header'
import Footer from './componentes/footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Footer></Footer>
  </StrictMode>,
)
