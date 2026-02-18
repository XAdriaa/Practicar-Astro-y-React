import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const layout = () => {
  return (
	<div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<ul className="navbar-nav">
				<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
				<li className="nav-item"><Link className="nav-link" to="/contacte">Contacte</Link></li>
			</ul>
		</nav>
		<Outlet />
	</div>
  )
}

export default layout