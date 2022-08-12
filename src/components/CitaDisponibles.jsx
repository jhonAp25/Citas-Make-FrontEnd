import React, { useEffect, useState } from 'react'
import BoxCitaDisponible from './BoxCitaDisponible';

const CitaDisponibles = ({especialidad, citaTop ,  getCitaOrder}) => {
   


      /*****************CONFIGURACION******************* */
      const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
     
    /*****************STATES******************* */
      const [localDate, setLocalDate]=useState("")
      const [especialista, setEspecialista]= useState()
    


      


      const changeDate=(e)=>{
        const date = new Date(e.target.value+'T00:00:00')   
        setLocalDate(date.toLocaleDateString("es-ES", options) )

      }

      const changeEspecialista=(e)=>{
        setEspecialista(e.target.value)
        getCitaOrder(e.target.value)
       
      }

      useEffect(() => {
        getCitaOrder(especialista)
      }, []);
   



  return (
    <div className='col-span-4'>
         
        <div className='bg-gray-300 p-3' style={{minHeight : "380px"}}>
        <div className='flex items-center'>
            {localDate === ""
            ?  <span className='font-bold text_normal text-lg flex justify-center capitalize items-center w-full'>Recientes Citas Disponibles  </span>
            :  <div className='flex w-full justify-start items-start'>
                    <span  className='font-semibold w-max text_normal text-lg  items-center w-full mr-2'>Citas Disponible del - </span>
                    <span className='font-semibold w-max text_normal text-lg  capitalize items-center w-full'>{localDate}</span>
                </div>
            
            }
           
            <input className='form-date__input' onChange={(e)=> changeDate(e)}  type="date" />
        </div>
        <div className='py-4 ' style={{borderBottom: 'solid #365B73 2px'}} >
            <div className=' flex flex-col justify-around '>
                <label className='text_normal font-semibold text-xs '>ESPECIALIDAD</label>
                <select className='p-2 mt-1 inputText  ' placeholder='xxxxxx  ' type="text" onChange={(e)=>changeEspecialista(e)}  >
                    <option value="none" selected disabled hidden >Especialidad </option>
                    {especialidad.map(e=>(
                        <option value={e.id}>{e.descripcion}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className='pt-4 grid auto-rows-auto' style={{maxHeight: '380px', minHeight: '300px', overflowY: 'auto'}} >
            {citaTop.length === 0 ? 
            <div className='flex flex-col items-center '   >
                <span  className='text_normal font-light text-sm w-4/5 text-center'>No hay <strong className='uppercase'>citas disponibles</strong>  aun, desea entrar en Cola?</span>
                <button className='btn_primary p-2 mt-3' onClick={()=>postCola()} >Entrar en Cola</button>
            </div> :
            citaTop.map(c=>(
                    <div key={c.id}>
                    <BoxCitaDisponible data={c}  /> 
                    </div>
                ))
            }
            
           
        </div>
        </div>
    </div>
  )
}

export default CitaDisponibles