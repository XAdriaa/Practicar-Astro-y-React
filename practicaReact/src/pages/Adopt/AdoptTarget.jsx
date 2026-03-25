import AdoptFilter from "./AdoptFilter";
import { useEffect, useState } from "react"
import { FilePlus, Heart } from 'react-bootstrap-icons';


const AdoptTarget = ({ data }) => {


  return (
	<div className="container">
		<div className="row">
			<div className="col-12 d-flex flex-wrap">
				{data.map((item) => (
					<div key={item.id} className="m-2 d-flex flex-wrap">
						<div className="card">
							<div className="card-body mb-0 pb-0">
								<img className="card-img-top" src={item.img} alt="Imagen no disponible" height="200px"></img>
								<p className="card-title">{item.nombre}</p>
							</div>
							<div className="card-body d-flex gap-3 mt-0 pt-0">
							<a><FilePlus /></a>
							<a><Heart /></a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
  )
}

export default AdoptTarget