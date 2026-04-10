import { useEffect, useState } from "react";
import { FetchRaces } from "../../server/RequestAPI";
import { FetchSize } from "../../server/RequestAPI";
import { FetchFiltreAnimals } from "../../server/RequestAPI";


const AdoptFilter = ({ setData }) => {
	const [filtre, setFiltre] = useState({ sex: '', age: '', race: '', size: '' });
	const [race, setRace] = useState([])
	const [size, setSize] = useState([])
	const [animales, setAnimales] = useState([])
	const ageRange = {
  		cachorro: { edad_min: 0, edad_max: 1 },
  		junior:   { edad_min: 1, edad_max: 3 },
  		adult:    { edad_min: 3, edad_max: 8 },
  		senior:   { edad_min: 8, edad_max: 99 },
	}



	//Handles encargado de manejar el filtro
	const handleFiltre= (e) => {
		setFiltre(prev => ({...prev, [e.target.name]: e.target.value}))
	}

	useEffect(() => {
		const fetchDataRace = async () => {
			try {
				const data = await FetchRaces();
				console.log("Razas de la API",data);
				setRace(data);
			} catch(error) {
				console.log("Error al pasar los datos a los filtros", error);
			}
		}
		fetchDataRace();
		const fetchDataSize = async () => {
			try {
				const data = await FetchSize();
				console.log("Tamanyo de la API",data);
				setSize(data);
			} catch(error) {
				console.log("Error al pasar los datos a los filtros", error);
			}
		}
		fetchDataSize();
	}, []);

	useEffect(() => {
		const fetchAnimal = async () => {
			const params = {};
			if(filtre.sex){
				params.sexo = filtre.sex;
			}
			if (filtre.age) {
  				const range = ageRange[filtre.age]
  				params.edad_min = range.edad_min
  				params.edad_max = range.edad_max
			}
			if(filtre.race){
				params.id_raza = filtre.race;
			}
			if(filtre.size){
				params.id_tamano = filtre.size;
			}
			const data = await FetchFiltreAnimals(params);
			setAnimales(data);
			setData(data); // Se actualizan los datos de los animales filtrados para que asi se muestre actualizado
			console.log(data);
		}
		fetchAnimal();
	}, [filtre]);




    return (
		<>
			<div className="p-2">

			{/* BOTÓN SOLO EN MÓVIL */}
			<button 
				className="btn btn-secondary d-md-none w-100 mb-2"
				data-bs-toggle="collapse"
				data-bs-target="#filtersCollapse"
			>
			Filtres
			</button>

			{/* CONTENIDO FILTROS */}
			<div className="collapse d-md-block" id="filtersCollapse">
				<div className="row">

				<div className="col-12 col-md-auto d-flex flex-column m-2">
					<label>Sexe:</label>
					<select name="sex" value={filtre.sex} onChange={handleFiltre} className="form-select">
					<option value="">Tots</option>
					<option value="m">Mascle</option>
					<option value="f">Hembra</option>
					</select>
				</div>

				<div className="col-12 col-md-auto d-flex flex-column m-2">
					<label>Raça:</label>
					<select name="race" value={filtre.race} onChange={handleFiltre} className="form-select">
					<option value="">Totes</option>
					{race.map(r => (
						<option key={r.id_raza} value={r.id_raza}>{r.nombre}</option>
					))}
					</select>
				</div>

				<div className="col-12 col-md-auto d-flex flex-column m-2">
					<label>Edat:</label>
					<select name="age" value={filtre.age} onChange={handleFiltre} className="form-select">
					<option value="">Totes</option>
					<option value="cachorro">Cadell</option>
					<option value="junior">Junior</option>
					<option value="adult">Adult</option>
					<option value="senior">Senior</option>
					</select>
				</div>

				<div className="col-12 col-md-auto d-flex flex-column m-2">
					<label>Tamany:</label>
					<select name="size" value={filtre.size} onChange={handleFiltre} className="form-select">
					<option value="">Totes</option>
					{size.map(s => (
						<option key={s.id_tamano} value={s.id_tamano}>{s.nombre}</option>
					))}
					</select>
				</div>

				</div>
			</div>
			</div>
		</>
    )
}
export default AdoptFilter