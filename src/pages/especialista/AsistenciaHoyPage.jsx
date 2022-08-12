import React from 'react'
import TablaAsistenciaEspecialidad from '../../components/TablaAsistenciaEspecialidad'

const AsistenciaHoyPage = () => {
  return (
    <div className='flex  w-full flex-col  px-20 pt-10  h-full  bg-gray-100' >
            
        <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>Asistencia de Hoy</h2>

        <div className='w-full '  >
            <TablaAsistenciaEspecialidad/>
        </div>
    
    </div>
  )
}

export default AsistenciaHoyPage