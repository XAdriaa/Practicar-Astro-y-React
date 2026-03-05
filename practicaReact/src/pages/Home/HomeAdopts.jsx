import { useEffect, useState } from "react";
import { FetchAdoptsHome } from "../../server/FetchAdoptsHome"

//const URL = "https://express-js-on-vercel-azure-zeta-32.vercel.app/api/";



//Esta funcio lo que fa es ordenar els animals adoptats y despres selecciona els
//3 ultims i els mosra per pantalla
function filtrarAdoptados(adoptados) {
	return adoptados.sort((a, b) => new Date(b.fecha_adopcion) - new Date(a.fecha_adopcion)).slice(0, 3);
}

const HomeAdopts = () => {
	const [adoptados, setAdoptados] = useState([]);


	useEffect(() => {
		const fetchDada = async () => {
			try {
				const data = await FetchAdoptsHome();
				const filtrado = filtrarAdoptados(data);
				setAdoptados(filtrado);
			} catch (error){
				console.error("Error en la llamada a la funcion de la funcion del fetch de los datos de los adoptados", error);
			}
		}
		fetchDada();

	},[])


	return (
		<div className='container'>
			<div className="row">
				<div className="col-12">
					{/* Cartas solo visibles en desktop */}
					<div className="d-none d-md-flex justify-content-between text-center flex-md-row flex-column contenedor-cartas-perros">
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
					{/* Carrusel solo visible en móvil/tablet < 768px */}
					<div id="carouselExampleCaptions" className="carousel slide d-block d-md-none">
						<div className="carousel-indicators">
							{adoptados.map((_, idx) => (
								<button
									key={idx}
									type="button"
									data-bs-target="#carouselExampleCaptions"
									data-bs-slide-to={idx}
									className={idx === 0 ? "active" : ""}
									aria-current={idx === 0 ? "true" : undefined}
									aria-label={`Slide ${idx + 1}`}
								/>
							))}
						</div>
						<div className="carousel-inner">
							{adoptados.map((animal, idx) => (
								<div className={`carousel-item${idx === 0 ? " active" : ""}`} key={animal.id_animal}>
									<img src={animal.img} className="d-block w-100" alt="Animal adoptat recient ment" />
									<div className="carousel-caption d-none d-md-block">
										<p className="text-dark">{animal.nombre}</p>
									</div>
								</div>
							))}
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}



export default HomeAdopts