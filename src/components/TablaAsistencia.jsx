import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AsistenciaContext } from '../context/AsistenciaContext'

const TablaAsistencia = () => {

    const {asistencia , getAsistencia}=useContext(AsistenciaContext)
    var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

    useEffect(() => {
        const hoy = new Date().getUTCDate();
        console.log(hoy);
        getAsistencia()
    }, [])
    
    
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
                  Estudiante
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Cita
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg_primary"></th>
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
                  <p className="text_normal whitespace-no-wrap">{a?.reservaCita?.cita?.especialista?.especialidad?.descripcion}</p>
                  
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text_normal whitespace-no-wrap">{new Date(a?.reservaCita?.cita?.fecha).toLocaleDateString("es-ES", options) }</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    {a?.estado === 'pendiente' ?
                    <span aria-hidden  className="etiqueta_estado_asistencia_pendiente capitalize ">
                        {a?.estado}
                    </span>
                    : a?.estado === 'asistio' 
                    ?<span aria-hidden  className="etiqueta_estado_asistencia_asistio capitalize ">
                        {a?.estado}
                    </span>
                    : a?.estado === 'cancelo'
                    ?<span aria-hidden  className="etiqueta_estado_asistencia_cancelo capitalize ">
                        {a?.estado}
                    </span>
                    :<span aria-hidden  className="etiqueta_estado_asistencia_falto capitalize ">
                        {a?.estado}
                    </span>
                 }
                    
                    
                  </span>
                </td>
                <td
                  className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                >
                  <button
                    type="button"
                    className="inline-block text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                      />
                    </svg>
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

export default TablaAsistencia