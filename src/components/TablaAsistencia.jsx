import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AsistenciaContext } from '../context/AsistenciaContext'
import { EspecialidadContext } from '../context/EspecialidadContext'
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs'
import imgDef from '../Img/userDefault.jpg'

const TablaAsistencia = () => {

    const {asistencia , getAsistencia, getPDFAsistencia}=useContext(AsistenciaContext)
    const {especialidad , getEspecialidad}=useContext(EspecialidadContext)

    const [fecha , setFecha] =useState('')
    const [idEspecialidad , setIdEspecialidad] =useState('')
    const [estado , setEstado] =useState('')

    var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};


    const filtroCustom=()=>{
      getAsistencia(estado, idEspecialidad, fecha)
     
    }

    useEffect(() => {

        getAsistencia(estado, idEspecialidad, fecha)
        getEspecialidad()
    }, [])
    
    
  return (
    <div className="container mx-auto px-4 sm:px-8 mt-8">
      <div className='bg-white  grid grid-cols-11 gap-3 p-3 border'>
         

          <div className='col-span-3 flex flex-col justify-around'>
                <span className='text_normal font-semibold text-xs '>Fecha</span>
                <input className='p-1 mt-1 inputText  ' type='date' onChange={(e)=>setFecha(e.target.value)} />
                <p className='error_time_ini col-span-7 text-left text-xs font-normal m-0 text-red-600'></p>
          </div>

          <div className='col-span-3 flex flex-col justify-around'>
                <span className='text_normal font-semibold text-xs '>Especialidad</span>
                <select className='p-1 mt-1 inputText'  onChange={(e)=>setIdEspecialidad(e.target.value)} >
                <option value="" selected disabled hidden >Seleccione al Especialidad </option>
                <option value=""  >Todos </option>
                  {especialidad.map(e=>(
                    <option value={e.id}>{e.descripcion}</option>
                  ))}
                  
                </select>
                <p className='error_time_ini col-span-7 text-left text-xs font-normal m-0 text-red-600'></p>
          </div>

          <div className='col-span-3 flex flex-col justify-around'>
                <span className='text_normal font-semibold text-xs '>Estado</span>
                <select className='p-1 mt-1 inputText'  onChange={(e)=>setEstado(e.target.value)}  >
                  <option value="" selected disabled hidden >Seleccione Estado </option>
                  <option value=""  >TODOS </option>
                  <option value="PENDIENTE">PENDIENTE</option>
                  <option value="ASISTIDO">ASISTIDO</option>
                  <option value="NO ASISTIDO">NO ASISTIDO</option>
                  <option value="CANCELADO">CANCELADO</option>
                </select>
                <p className='error_time_ini col-span-7 text-left text-xs font-normal m-0 text-red-600'></p>
          </div>

          

          <div className='col-span-1 flex flex-col justify-around'>
              <span className=' font-semibold text-xs text-white'>.</span>
              <button className='btn_primary p-1' onClick={()=>filtroCustom()} >Filtrar</button>
          </div>

          <div className='col-span-1 flex flex-col justify-around'>
              <span className=' font-semibold text-xs text-white'>.</span>
              <a className='btn_outline_primary p-2 flex justify-center'  target="_blank" onClick={()=>  getPDFAsistencia(estado, idEspecialidad, fecha)}  >
                  <BsFillFileEarmarkPdfFill size={18} />
              </a>
          </div>
          

      </div>
          
    <div className="  overflow-y-auto" style={{maxHeight: '34rem'}}  >
     
      <div className="py-4 overflow-x-auto">
        <div  className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead >
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Estudiante
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Cita
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary   text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Especialista
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Estado
                </th>
                
              </tr>
            </thead>
            <tbody>
                {asistencia.map(a=>(
                    <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                      
                        src={a?.estudiante?.foto? a?.estudiante?.foto  :imgDef}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="capitalize  text_normal whitespace-no-wrap">
                      {a?.estudiante?.apellido},{a?.estudiante?.nombre}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text_normal whitespace-no-wrap">{a?.cita?.especialista?.especialidad?.descripcion}</p>
                  
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <p className="text_normal whitespace-no-wrap capitalize">{a?.cita?.especialista?.nombre}, {a?.cita?.especialista?.apellido}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text_normal whitespace-no-wrap capitalize">{new Date(a?.cita?.fecha + 'T00:00:00').toLocaleDateString("es-ES", options) }</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className="relative block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    {a?.estado === 'PENDIENTE' ?
                    <span aria-hidden  className="etiqueta_estado_asistencia_pendiente capitalize ">
                        {a?.estado}
                    </span>
                    : a?.estado === 'ASISTIDO' 
                    ?<span aria-hidden  className="etiqueta_estado_asistencia_asistido capitalize ">
                        {a?.estado}
                    </span>
                    : a?.estado === 'CANCELADO'
                    ?<span aria-hidden  className="etiqueta_estado_asistencia_cancelado capitalize ">
                        {a?.estado}
                    </span>
                    :<span aria-hidden  className="etiqueta_estado_asistencia_noasistido capitalize ">
                        {a?.estado}
                    </span>
                 }
                    
                    
                  </span>
                </td>
                
              </tr>
                ))}
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TablaAsistencia