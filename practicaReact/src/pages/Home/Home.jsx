import HomeAdopts from './HomeAdopts'
import HomeWhyAdopt from './HomeWhyAdopt'
import KnowAdopt from './KnowAdopt'
import HeroIni from './HeroIni'

const Home = () => {
  return (
	<div className='container-xl'>
		<HeroIni />
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