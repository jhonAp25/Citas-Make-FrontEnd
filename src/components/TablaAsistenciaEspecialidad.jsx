import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AsistenciaContext } from '../context/AsistenciaContext'
import { EspecialidadContext } from '../context/EspecialidadContext'

import Dropdown from './Dropdown'

const TablaAsistenciaEspecialidad = () => {
    const {asistencia ,asistenciaHoy,getAsistenciaxEspecialistaxHoy, postAsistenciaEstado}=useContext(AsistenciaContext)
    const {especialidad , getEspecialidad}=useContext(EspecialidadContext)

    var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
   

    const updateEstado=(estado, idCita)=>{
      postAsistenciaEstado(estado, idCita)
    }



    useEffect(() => {
      
        getAsistenciaxEspecialistaxHoy()
        getEspecialidad()
        
    }, [])
    
    
  return (
    <div className="container mx-auto px-4 sm:px-8 mt-8">
      
          
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
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  
                </th>
                
              </tr>
            </thead>
            <tbody>
                {asistenciaHoy.map(a=>(
                    <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src={a?.estudiante?.foto}
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
                {a?.estado === 'PENDIENTE' ?
                <Dropdown  updateEstado={updateEstado} data={a}  /> :
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                 
                </td>}
                
                
                
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

export default TablaAsistenciaEspecialidad