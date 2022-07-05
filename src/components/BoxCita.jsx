import React, { useEffect } from "react";
import { useContext } from "react";
import {AiOutlineUser, AiOutlineClockCircle} from "react-icons/ai"
import {BsPhone} from "react-icons/bs"
import { ReservaCitaContext } from "../context/ReservaCitas";

const BoxCita = ({ data }) => {

  const {getFiltroReservaCita, reservaCita} = useContext(ReservaCitaContext)


 
  useEffect(() => {
 
  }, [data]);


  return (
    <div className="w-full  mt-2 ">
      { false ? 
        <div className="w-full flex  text-center bg-gray-100">

          <div className="w-4/5 grid p-4 grid-cols-2 gap-3">
            <div className="flex items-center"> <AiOutlineUser color="#365B73"/> <span className="ml-2 text-sm text_normal capitalize">{reservaCita?.estudiante?.nombre } {reservaCita?.estudiante?.apellido}</span> </div>
            <div className="flex items-center"> <AiOutlineClockCircle  color="#365B73"/><span className="ml-2 text-sm text_normal capitalize italic">02:00pm - 03:00pm</span></div>
            <div className="flex items-center"> <BsPhone  color="#365B73"/><span className="ml-2 text-sm text_normal capitalize ">987546321</span></div>
          </div>

          <div className="w-1/5 grid grid-cols-1" >
            <button className="btn_secondary text-sm"> Editar </button>
            <button className="btn_secondary text-sm"> Castigo </button>
            
          </div>

        </div>
       : 
        <div className="w-full p-6 text-center border_box">
          <span className="text_normal ">Cita Disponible</span>
        </div>
      }
    </div>
  );
};

export default BoxCita;
