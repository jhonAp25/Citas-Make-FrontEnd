import React from "react";
import {AiFillInfoCircle, AiOutlineClockCircle} from "react-icons/ai"

import {RiUserHeartLine} from 'react-icons/ri'

const BoxCita = ({ data , setIdCita , openModal}) => {


  const DetalleCita =()=>{
      setIdCita(data.id)
      openModal()
  }



  return (
    <div className="w-full  mt-2 ">
      { !data.estado ? 
        <div className="w-full flex  text-center bg-gray-100   ">

          <div className="w-full flex flex-col justify-center  p-2  border_box_danger " onClick={()=>DetalleCita()} >

          <div className='flex '>
            <AiOutlineClockCircle size={18}  className='mr-2 text_danger'/>
            <span className="text_danger text-xs ">{data?.horaInicio.split(":")[0]+":"+ data?.horaInicio.split(":")[1]} -  {data?.horaFin.split(":")[0]+":"+data?.horaFin.split(":")[1]}</span>
          </div> 

          <div className='flex mt-1'>
            <RiUserHeartLine size={18}  className='text_danger mr-2'/>
          <span className="text_danger text-xs capitalize ">{data?.especialista?.apellido}, {data?.especialista?.nombre} </span>
          </div> 

          <div className='flex mt-1'>
            <span size={18}  className='text-xs text_danger mr-2 font-bold'>Estado </span>
            <span  className="text_danger text-xs uppercase ">Cita Reservada</span>
          </div> 


          

          </div>

          

        </div>
       : 
        <div className="w-full p-2 text-center border_box">
          <div className='flex '>
            <AiOutlineClockCircle size={18}  className='mr-2 text_normal'/>
            <span className="text_normal text-xs ">{data?.horaInicio.split(":")[0]+":"+ data?.horaInicio.split(":")[1]} -  {data?.horaFin.split(":")[0]+":"+data?.horaFin.split(":")[1]}</span>
          </div> 

          <div className='flex mt-1'>
            <RiUserHeartLine size={18}  className='text_normal mr-2'/>
          <span className="text_normal text-xs capitalize ">{data?.especialista?.apellido}, {data?.especialista?.nombre} </span>
          </div> 

          <div className='flex mt-1'>
            <span size={18}  className='text-xs text_normal mr-2 font-bold'>Estado </span>
            <span  className="text_normal text-xs uppercase ">Cita disponible</span>
          </div> 
        </div>
      }
    </div>
  );
};

export default BoxCita;
