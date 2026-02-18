import React from 'react'

const Header = () => {
  return (
	<div className='container'>
		<div className='row'>
			<div className='col-12 d-flex justify-content-center align-items-center flex-column'>
				<img src='/public/logo_provisional.png' width="100"></img>
				<div className='d-flex gap-5'><p>Inici</p><p>Adopta</p><p>Adiestra</p><p>Contacta</p></div>
			</div>
		</div>
	</div>
  )
}

export default Header