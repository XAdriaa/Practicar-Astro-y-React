import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const layout = () => {
  return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<ul className="navbar-nav mx-auto">
				<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
				<li className='nav-item'><Link className='nav-link' to="/adopta">Adopta</Link></li>
				<li className='nav-item'><Link className='nav-link' to="/adiestra">Adiestra</Link></li>
				<li className="nav-item"><Link className="nav-link" to="/contacte">Contacte</Link></li>
			</ul>
		</nav>
  )
}

export default layout