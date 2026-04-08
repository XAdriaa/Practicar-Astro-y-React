import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvide } from './context/AuthContext'
import App from './app'




createRoot(document.getElementById('root')).render(
  <StrictMode>
	<AuthProvide>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthProvide>
  </StrictMode>,
)
