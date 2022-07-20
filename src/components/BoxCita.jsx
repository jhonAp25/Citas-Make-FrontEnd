import React, { useEffect } from "react";
import { useContext } from "react";
import {AiFillInfoCircle, AiOutlineClockCircle} from "react-icons/ai"
import {BsPhone} from "react-icons/bs"
import { ReservaCitaContext } from "../context/ReservaCitas";

const BoxCita = ({ data }) => {

  const {getFiltroReservaCita, reservaCita} = useContext(ReservaCitaContext)




  return (
    <div className="w-full  mt-2 ">
      { !data.estado ? 
        <div className="w-full flex  text-center bg-gray-100  ">

          <div className="w-full flex justify-center items-center  p-6  border_box_danger">
            <span className="text_danger mr-3">Cita Reservada   {data?.horaInicio.split(":")[0]+":"+ data?.horaInicio.split(":")[1]} -  {data?.horaFin.split(":")[0]+":"+data?.horaFin.split(":")[1]}</span> 
            <AiFillInfoCircle className="btn_detalle"  size={20} /> 

          </div>

          

        </div>
       : 
        <div className="w-full p-6 text-center border_box">
          <span className="text_normal ">Cita Disponible {data?.horaInicio.split(":")[0]+":"+ data?.horaInicio.split(":")[1]} -  {data?.horaFin.split(":")[0]+":"+data?.horaFin.split(":")[1]}</span>
        </div>
      }
    </div>
  );
};

export default BoxCita;
