import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://express-js-on-vercel-azure-zeta-32.vercel.app/api/";

async function getAdoptados() {
	try {
		const respuesta = await axios.get("https://express-js-on-vercel-azure-zeta-32.vercel.app/api/animales/adoptados");
		return respuesta.data;
	}catch(error){
		console.log(error);
		return [];
	}
}

function filtrarAdoptados(adoptados) {
	return adoptados.sort((a, b) => new Date(b.fecha_adopcion) - new Date(a.fecha_adopcion)).slice(0, 3);
}

const HomeAdopciones = () => {
	const [adoptados, setAdoptados] = useState([]);


	useEffect(() => {
		const obtenerDatos = async () => {
		const data = await getAdoptados();
		const filtrados = filtrarAdoptados(data);
		setAdoptados(filtrados);
		};
	 obtenerDatos();
	}, []);


  return (
	<div className='container'>
		<div className="row">
			<div className="col-12">
				<div className="d-flex justify-content-between text-center flex-md-row flex-column contenedor-cartas-perros">
					{/**Cartas de los aimales recientemente adoptados */}
					{adoptados.map((animal) =>(
						<div key={animal.id_animal} className="card w-50 mx-2 m-sm-1 carta-adoptats">
							<img src={animal.img} className="card-img-top img-adoptados" alt={animal.nombre}/>
							<div className="card-body d-flex flex-column">
								<h3 className="card-title">{animal.nombre}</h3>
								<p className="card-text">{animal.raza}</p>
								<p className="card-text">{animal.descripcion}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
  )
}

export default HomeAdopciones