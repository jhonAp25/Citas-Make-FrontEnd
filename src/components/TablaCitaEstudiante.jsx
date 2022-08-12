import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AsistenciaContext } from '../context/AsistenciaContext'
import { ReservaCitaContext } from '../context/ReservaCitas'

const TablaCitaEstudiante = () => {

    const {asistenciaEstudiante, getAsistenciaEstudiante} = useContext(AsistenciaContext)
    const {deleteReservaCita}=useContext(ReservaCitaContext)
    const [refresh , setRefresh]=useState(true)

    var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};


    const CancelarCita=(id)=>{
     
      deleteReservaCita(id)
      setTimeout(() => {
        getAsistenciaEstudiante(localStorage.getItem('estudiante'))
      }, 1000);
      
    }


    useEffect(() => {
        
        getAsistenciaEstudiante(localStorage.getItem('estudiante'))
    }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8">
    <div className="py-8">
     
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div
          className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
          <table className="min-w-full leading-normal">
            <thead >
              <tr>
               
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Cita
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Hora
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Especialista
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary"></th>
              </tr>
            </thead>
            <tbody>
                {asistenciaEstudiante.map(a=>(
                    <tr>
               
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text_normal whitespace-no-wrap">{a?.cita?.especialista?.especialidad?.descripcion}</p>
                  
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text_normal whitespace-no-wrap capitalize">{new Date(a?.cita?.fecha +'T00:00:00').toLocaleDateString("es-ES", options) }</p>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text_normal whitespace-no-wrap">{ a?.cita?.horaInicio.split(':')[0]+':00'} PM - {parseInt(a?.cita?.horaInicio.split(":")[0]) + 1 + ":00 PM" }</p>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text_normal whitespace-no-wrap capitalize">{a?.cita?.especialista?.nombre}, {a?.cita?.especialista?.apellido}</p>
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
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right" >
                  <button type="button"  disabled={false} className="btn_primary p-2  inline-block text-gray-500 " onClick={()=>CancelarCita(a?.cita?.id)} >
                    Cancelar
                  </button>
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

export default TablaCitaEstudiante