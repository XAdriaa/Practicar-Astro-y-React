import React from 'react'
import HomeAdopciones from './homeAdopciones'
import HomePerqueAdoptar from './homePerqueAdoptar'
import ComAdoptra from './comAdoptra'

const Home = () => {
  return (
	<div className='container'>
		<div className='row'>
			<div className='col-12 d-flex justify-content-center text-center'>
				<div className='card'>
					<img src='/san-bernardo.jpg' className='img-fluid card-img'/>
				<div className='card-img-overlay text-light'>
					<h1 className='texto-banner-titulo'>No compres una raça,regala una vida</h1>
					<h5 className='texto-banner-subtitulo'>Mes de 150 gosos esperant la teua ajuda</h5>
					<button className='btn btn-outline-light mt-2 boton-adopcion-banner'>Adopta</button>
				</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div className='col-12'>
				<div className='d-flex justify-content-center text-center flex-column'>
					<h1 className='titul-row-2 my-4'>Gossos recentment adoptats</h1>
					<div className='d-flex flex-row justify-content-between'>
						<HomeAdopciones />
					</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div className='col-12 text-center'>
				<h1>¿Perque adoptar?</h1>
				<HomePerqueAdoptar />
			</div>
		</div>
		<div className='row'>
			<div className='col-12 text-center'>
				<h1>¿Com adoptar?</h1>
				<ComAdoptra />
			</div>
		</div>
	</div>
  )
}

export default Home