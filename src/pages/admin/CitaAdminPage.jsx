import React, { useContext } from 'react'
import { useEffect } from 'react'
import CardsCita from '../../components/CardsCita'
import FormularioCita from '../../components/FormularioCita'
import { EspecialidadContext } from '../../context/EspecialidadContext'

const CitaAdminPage = () => {

  const {getEspecialidad, especialidad} = useContext(EspecialidadContext)

  useEffect(() => {
   
    getEspecialidad()
    


  }, []);

  return (
    <div className='flex w-full flex-col  px-20 pt-10  h-full  bg-gray-100' >
            
        <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>Cita</h2>

        <div className='w-full flex mt-10 mb-5 grid grid-cols-2 gap-4'>
               
            <CardsCita especialidad={especialidad}  />

            <FormularioCita  />




        </div>
    </div>
  )
}

export default CitaAdminPage