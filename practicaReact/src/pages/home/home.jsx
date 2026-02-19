import React from 'react'
import HomeAdopciones from './homeAdopciones'

const Home = () => {
  return (
	<div className='container'>
		<div className='row'>
			<div className='col-12 d-flex justify-content-center text-center'>
				<div className='card'>
					<img src='/public/san-bernardo.jpg' className='img-fluid card-img'/>
				<div className='card-img-overlay text-light'>
					<h1 className=''>No compres una zaça,regala una vida</h1>
					<h5 className=''>Mes de 150 gosos esperant la teua ajuda</h5>
					<button className='btn btn-light mt-2'>Adopta</button>
				</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div className='col-12'>
				<div className='d-flex justify-content-center text-center flex-column'>
					<h3>Gossos recentment adoptats</h3>
					<div className='d-flex flex-row justify-content-between'>
						<HomeAdopciones />
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Home