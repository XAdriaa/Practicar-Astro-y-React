import AdoptFilter from "./AdoptFilter";
import { useEffect, useState } from "react"
import { FilePlus, Heart } from 'react-bootstrap-icons';


const AdoptTarget = ({ data }) => {


  return (

		<div className="row">
				{data.map((item) => (
					<div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
						<div className="card card-size">
							<img className="card-img-top object-fit-cover" src={item.img} alt="Imagen no disponible" height="200px"></img>
							<div className="card-body mb-0 pb-0">
								<h1 className="card-title">{item.nombre}</h1>
								<p className="card-body ms-0 ps-0">{item.descripcion}</p>
							</div>
							<div className="card-body d-flex mt-0 pt-0 justify-content-end">
							<button className="btn btn-outline-link text-primary"><FilePlus /></button>
							<button className="btn btn-outline-link text-danger"><Heart /></button>
							</div>
						</div>
					</div>
				))}
		</div>

  )
}

export default AdoptTarget