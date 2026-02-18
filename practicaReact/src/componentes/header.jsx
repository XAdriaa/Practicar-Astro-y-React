import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../pages/layout'

const Header = () => {
  return (
	<div className='container'>
		<div className='row'>
			<div className='col-12 d-flex justify-content-center align-items-center flex-column'>
				<img src='/public/logo_provisional.png' width="100"></img>
				<div className='d-flex gap-5'>
					<Layout />
				</div>
			</div>
		</div>
		<Outlet />
	</div>
  )
}

export default Header