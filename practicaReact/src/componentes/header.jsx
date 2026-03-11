import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../pages/layout'

const Header = () => {
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row m-0 p-0'>
		<div className='col-12  d-flex flex-column align-items-center'>
			<img src='/Logo_adris.svg' alt='Logo empresa' width="100" />
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