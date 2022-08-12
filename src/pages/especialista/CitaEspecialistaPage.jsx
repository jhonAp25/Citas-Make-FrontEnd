import React, { useState } from 'react'
import DetalleCitaAgregada from '../../components/DetalleCitaAgregada'
import FormularioCitaEspecialista from '../../components/FormularioCitaEspecialista'

const CitaEspecialistaPage = () => {
    const [refresh, setRefresh]=useState(true)

  return (
    <div className='flex w-full flex-col  px-20 pt-10  h-full  bg-gray-100' >

    <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>Cita</h2>

    <div className='w-full flex mt-10 mb-5 grid grid-cols-2 gap-4'>
    
      

        <FormularioCitaEspecialista setRefresh={setRefresh}  refresh={refresh} />
        <div>
          <span className='mb-5 text_normal text-xl font-bold '>
             Listado de Citas Creadas
          </span>
         
          <DetalleCitaAgregada refresh={refresh}/>
        </div>
        
       
    </div>
  
    </div>
  )
}

export default CitaEspecialistaPage