import { NavLink } from 'react-router-dom'

const Train = () => {
  return (
	<div className='container-fluid'>
		<div className='row'>
			<div className='col-12'>
				<div className='d-flex justify-content-between'>
					<a href='#'><button className='btn'>Cursos</button></a>
					<h1>Cursos disponibles</h1>
					<NavLink to="/contacte">
						<button className='btn btn-outline-secondary'>Contacte</button>
					</NavLink>
				</div>
				<img src='/Imagen-adiestramiento.jpg' className='img-fluid' alt="señora entrenando a un perro"/>
			</div>
		</div>
	</div>
  )
}

export default Train