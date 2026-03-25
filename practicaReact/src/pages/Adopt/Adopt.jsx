
import AdoptarFiltro from './AdoptFilter'
import AdoptTarget from './AdoptTarget'
import { useState } from "react";



const Adopt = () => {
//Estado donde se van a guardar las respuestas de la API para pasarselo a los componentes hijos
const [data, setData] = useState([]);

	return (
			<div>
				<div className='bg-primary'>
					<AdoptarFiltro setData={setData} />
				</div>
				<div className=''>
					<AdoptTarget data={data} />
				</div>
			</div>
	)
}

export default Adopt