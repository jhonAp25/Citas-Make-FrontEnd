import React, { useState } from 'react'
import BoxCita from './BoxCita';

const CitaDisponibles = ({especialidad, citaDisponible ,  getCitaOrder}) => {


      /*****************CONFIGURACION******************* */
      const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
     
    /*****************STATES******************* */
      const [localDate, setLocalDate]=useState(hoy.toLocaleDateString("es-ES", options))
      const [date, setDate ]=useState(hoy.toISOString().split("T")[0])
      const [especialista, setEspecialista]= useState()



      const changeDate=()=>{

      }

      const changeEspecialista=(e)=>{
        getCitaOrder(e.target.value)
      }



  return (
    <div>
        <div className='bg-gray-300 p-3'>
        <div className='flex items-center'>
            <span  className='font-bold text_normal text-xl flex justify-center capitalize items-center w-full'>{localDate }</span>
            <input className='form-date__input' onChange={(e)=> changeDate(e)}  type="date" />
        </div>
        <div className='py-4 ' style={{borderBottom: 'solid #365B73 2px'}} >
            <div className=' flex flex-col justify-around '>
                <label className='text_normal font-semibold text-xs '>SERVICIO</label>
                <select className='p-2 mt-1 inputText  ' placeholder='xxxxxx  ' type="text" onChange={(e)=>changeEspecialista(e)}  >
                    <option value="none" selected disabled hidden >Especialidad </option>
                    {especialidad.map(e=>(
                        <option value={e.id}>{e.descripcion}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className='pt-4    '>
            {
                citaDisponible.map(c=>(
                    <BoxCita data={c} /> 
                ))
            }
            
           
        </div>
        </div>
    </div>
  )
}

export default CitaDisponibles