import React, { useState } from 'react'
import BoxCita from './BoxCita';
import BoxCitaDisponible from './BoxCitaDisponible';
import ModalConfirmacion from './ModalConfirmacion';

const CitaDisponibles = ({especialidad, citaDisponible ,  getCitaOrder}) => {


      /*****************CONFIGURACION******************* */
      const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
     
    /*****************STATES******************* */
      const [localDate, setLocalDate]=useState("")
      const [date, setDate ]=useState(hoy.toISOString().split("T")[0])
      const [especialista, setEspecialista]= useState()
      const [hidden , setHidden] = useState(false)


      


      const changeDate=(e)=>{
        const date = new Date(e.target.value+'T00:00:00')   
        setLocalDate(date.toLocaleDateString("es-ES", options) )

      }

      const changeEspecialista=(e)=>{
        getCitaOrder(e.target.value)
      }
      
      const openModal =()=>  setHidden(!hidden)

      const confirmarCita=()=>{
            openModal() 
      }



  return (
    <div>
         <ModalConfirmacion  hidden={hidden} openModal={openModal} />
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
                <label className='text_normal font-semibold text-xs '>SERVICIO</label>
                <select className='p-2 mt-1 inputText  ' placeholder='xxxxxx  ' type="text" onChange={(e)=>changeEspecialista(e)}  >
                    <option value="none" selected disabled hidden >Especialidad </option>
                    {especialidad.map(e=>(
                        <option value={e.id}>{e.descripcion}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className='pt-4 grid auto-rows-auto' style={{maxHeight: '380px', minHeight: '300px', overflowY: 'auto'}} >
            {
                citaDisponible.map(c=>(
                    <div onClick={()=>confirmarCita()}>
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