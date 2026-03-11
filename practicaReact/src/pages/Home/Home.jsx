import HomeAdopts from './HomeAdopts'
import HomeWhyAdopt from './HomeWhyAdopt'
import KnowAdopt from './KnowAdopt'

const Home = () => {
  return (
	<div className='container'>
		<div className='row'>
			<div className='col-12 d-flex justify-content-center text-center'>
				<div className='card'>
					<img src='/san-bernardo.jpg' className='img-fluid card-img'/>
				<div className='card-img-overlay text-light'>
					<h1 className='texto-banner-titulo'>No compres una raça, regala una vida</h1>
					<h5 className='texto-banner-subtitulo'>Més de 150 gossos esperant la teua ajuda</h5>
					<button className='btn btn-outline-light mt-2 boton-adopcion-banner'>Adopta</button>
				</div>
				</div>
			</div>
		</div>
		{/*Seccio de adoptats recentment */}
		<div className='row'>
			<h1 className="text-center">Adoptats recentment</h1>
		</div>
		<HomeAdopts />
		{/*Seccio de perque adoptar */}
		<div className='row'>
			<h1 className="text-center">Per què adoptar?</h1>
		</div>
		<HomeWhyAdopt />
		{/*Seccio de coneix com adoptar */}
		<div className='row'>
			<h1 className="text-center">Pasos per adoptar</h1>
		</div>
		<KnowAdopt />

	</div>
  )
}

export default Home