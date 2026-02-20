import React from 'react'

const NotFound = () => {
  return (
	<div className='container'>
		<div className='row'>
			<div className='col-12'>
				<div className='d-flex justify-content-center align-content-center flex-column text-center'>
					<h1 >Esta pagina no es accesible</h1>
					<img src='404.png' alt='Imagen de un perro con interrogante' width='100%'/>
				</div>
			</div>
		</div>
	</div>
  )
}

export default NotFound