import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const layout = () => {
  return (
		<nav className="navbar navbar-expand navbar-light">
			<ul className="navbar-nav mx-auto">
				<li className="nav-item"><Link className="nav-link" to="/"><p>Home</p></Link></li>
				<li className='nav-item'><Link className='nav-link' to="/adopta"><p>Adopta</p></Link></li>
				<li className='nav-item'><Link className='nav-link' to="/Cursos"><p>Cursos</p></Link></li>
				<li className="nav-item"><Link className="nav-link" to="/contacte"><p>Contacte</p></Link></li>
			</ul>
		</nav>
  )
}

export default layout