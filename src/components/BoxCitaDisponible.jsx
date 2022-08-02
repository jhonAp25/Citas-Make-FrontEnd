import React, { useContext, useState } from 'react'
import {AiOutlineClockCircle, AiOutlineCalendar} from "react-icons/ai"
import {RiUserHeartLine} from 'react-icons/ri'
import { ReservaCitaContext } from '../context/ReservaCitas'
import ModalConfirmacion from './ModalConfirmacion'

const BoxCitaDisponible = ({ data }) => {


  /****************STATE************* */
    const [hidden , setHidden] = useState(false)
     /*****************CONFIGURACION******************* */
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}


    const openModal =()=>  setHidden(!hidden)

    const confirmarCita=()=>{
          openModal() 
    }

  return (
    <div className="w-full  mt-2 "  onClick={()=>confirmarCita()}>
       
       <ModalConfirmacion  hidden={hidden} openModal={openModal}  idCita={data.id} />
      <div className="w-full flex  text-center bg-gray-100 hover:bg-gray-300 cursor-pointer">

      <div className="w-full flex flex-col items-start p-4 border_box">
        <span className="text_normal font-semibold ">Cita Disponible </span>
        <div className='flex'>
            <AiOutlineCalendar size={18} color='#365B73' className='mr-2'/>
            <span className="text_normal capitalize italic text-sm"> {new Date(data?.fecha+'T00:00:00').toLocaleDateString("es-ES", options)  }</span>
        </div>

        <div className='flex'>
            <AiOutlineClockCircle size={18} color='#365B73' className='mr-2'/>
          <span className="text_normal text-sm ">{data?.horaInicio.split(":")[0]+":"+ data?.horaInicio.split(":")[1]} -  {data?.horaFin.split(":")[0]+":"+data?.horaFin.split(":")[1]}</span>
        </div> 

        <div className='flex'>
            <RiUserHeartLine size={18} color='#365B73' className='mr-2'/>
          <span className="text_normal text-sm capitalize ">{data?.especialista?.apellido}, {data?.especialista?.nombre} </span>
        </div> 
         

        </div>
      </div>
       
  </div>
  )
}

export default BoxCitaDisponible