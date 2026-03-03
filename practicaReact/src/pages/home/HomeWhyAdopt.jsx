import React from 'react'

const HomeWhyAdopt = () => {
  return (
    <div className='d-flex justify-content-center flex-wrap'>

        <div className='card mx-3 mb-3 tamaño-card-perque'>
            <img src='/agradablesFoto.webp' className='card-img-top img-card-perque' alt="Perros agradecidos"/>
            <div className='card-body text-center'>
                <p className='fs-5'>Són molt agraïts</p>
            </div>
        </div>

        <div className='card mx-3 mb-3 tamaño-card-perque'>
            <img src='/perros-niños.webp' className='card-img-top img-card-perque' alt="Niños con perros"/>
            <div className='card-body text-center'>
                <p className='fs-5'>Ajuden als xiquets amb el desenvolupament</p>
            </div>
        </div>

        <div className='card mx-3 mb-3 tamaño-card-perque'>
            <img src='/perrosMestizo.jpg' className='card-img-top img-card-perque' alt="Perro mestizo"/>
            <div className='card-body text-center'>
                <p className='fs-5'>Donar una nova oportunitat</p>
            </div>
        </div>

        <div className='card mx-3 mb-3 tamaño-card-perque'>
            <img src='/perroMental-800x600.webp' className='card-img-top img-card-perque' alt="Salud mental"/>
            <div className='card-body text-center'>
                <p className='fs-5'>Ajuda a la teua salut mental</p>
            </div>
        </div>

    </div>
  )
}

export default HomeWhyAdopt