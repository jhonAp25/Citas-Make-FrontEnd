import React, { useEffect } from 'react'
import { useContext } from 'react'
import CardsCita from '../../components/CardsCita'
import CitaDisponibles from '../../components/CitaDisponibles'
import { CitaContext } from '../../context/CitaContext'
import { EspecialidadContext } from '../../context/EspecialidadContext'

const CitaEstudiantePage = () => {
  const {especialidad, getEspecialidad} = useContext(EspecialidadContext)
  const {getCitaOrder, citaTop} = useContext(CitaContext)


  useEffect(() => {
  getEspecialidad()
 
  }, [])
  

  return (
    <div className='flex flex-col  w-full px-20 pt-10  h-full  bg-gray-100' >
            
        <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>Cita</h2>

        <div className='w-full flex mt-10 mb-5 grid grid-cols-6 gap-4'>
          <div className='col-span-1'></div>
          <CitaDisponibles especialidad={especialidad} citaTop={citaTop}  getCitaOrder={ getCitaOrder} />
          <div className='col-span-1'></div>
        </div>
    </div>
  )
}

export default CitaEstudiantePage