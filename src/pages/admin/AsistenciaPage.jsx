import React from 'react'
import TablaAsistencia from '../../components/TablaAsistencia'


const AsistenciaPage = () => {
  return (
    <div className='flex  w-full flex-col  px-20 pt-10  h-full  bg-gray-100' >
            
        <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>Asistencia</h2>

        <div className='w-full   overflow-y-auto' style={{maxHeight: '34rem'}} >

            <TablaAsistencia/>
        </div>
    
    </div>


  )
}

export default AsistenciaPage