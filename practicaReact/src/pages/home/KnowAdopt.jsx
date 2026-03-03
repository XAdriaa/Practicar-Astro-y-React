import React from 'react'
import { House, ArrowRepeat, Clipboard, ClipboardCheck, PatchCheck } from 'react-bootstrap-icons';

const HomeWhyAdopt = () => {
  return (
    <div className='d-flex justify-content-center flex-wrap'>
        {/* Paso 1 */}
        <div className="col-md-2 col-sm-4 col-5 mb-3 mx-3">
          <div className="p-3 border rounded bg-light h-100 carta-adoptar">
            <House size={40} className="text-primary mb-2" />
            <p className="small m-0 text-wrap">Visita la protectora</p>
          </div>
        </div>

        {/* Paso 2 */}
        <div className="col-md-2 col-sm-4 col-5 mb-3 mx-3">
          <div className="p-3 border rounded bg-light h-100 carta-adoptar">
            <ArrowRepeat size={40} className="text-primary mb-2" />
            <p className="small m-0 text-wrap">Conec al gos</p>
          </div>
        </div>

        {/* Paso 3 */}
        <div className="col-md-2 col-sm-4 col-5 mb-3 mx-3">
          <div className="p-3 border rounded bg-light h-100 carta-adoptar">
            <Clipboard size={40} className="text-primary mb-2" />
            <p className="small m-0 text-wrap">Formulari</p>
          </div>
        </div>

        {/* Paso 4 */}
        <div className="col-md-2 col-sm-4 col-5 mb-3 mx-3">
          <div className="p-3 border rounded bg-light h-100 carta-adoptar">
            <ClipboardCheck size={40} className="text-primary mb-2" />
            <p className="small m-0 text-wrap">Pre-adopció</p>
          </div>
        </div>

        {/* Paso 5 */}
        <div className="col-md-2 col-sm-4 col-5 mb-3 mx-3">
          <div className="p-3 border rounded bg-success text-white h-100 carta-adoptar">
            <PatchCheck size={40} className="mb-2" />
            <p className="small m-0 text-wrap">¡Adoptat!</p>
          </div>
        </div>
    </div>
  )
}

export default HomeWhyAdopt