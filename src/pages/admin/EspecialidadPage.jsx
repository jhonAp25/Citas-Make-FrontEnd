import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import FormularioEspecialidad from '../../components/FormularioEspecialidad'
import ListadoEspecialidad from '../../components/ListadoEspecialidad'
import { EspecialidadContext } from '../../context/EspecialidadContext'

const EspecialidadPage = () => {


  const {especialidad, getEspecialidad, postEspecialidad ,putEspecialidad}=useContext(EspecialidadContext)

  const [data , setData]=useState()

  useEffect(() => {
    getEspecialidad()
  }, [])
  

  return (
    <div className='flex  w-full flex-col  px-20 pt-10  h-full  bg-gray-100' >

        
            
        <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>Especialidad</h2>

        <div className='w-full grid grid-cols-2 gap-4 mt-10 mb-5'>
          <FormularioEspecialidad postEspecialidad={postEspecialidad } putEspecialidad={putEspecialidad} data={data} setData={setData} />
          <ListadoEspecialidad especialidad={especialidad} setData={setData} />
        </div>
    </div>
  )
}

export default EspecialidadPage