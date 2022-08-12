import React, { useEffect } from 'react'
import { useContext } from 'react'
import { EstudianteContext } from '../context/EstudianteContext'

import { BsCalendar2Date, BsFillFileEarmarkPersonFill, BsPerson } from "react-icons/bs";
import { MdOutlineViewInAr } from "react-icons/md";
import { FaUserGraduate , FaUserMd} from "react-icons/fa";
import { EspecialistaContext } from '../context/EspecialistaContext';
import { EspecialidadContext } from '../context/EspecialidadContext';
import { CitaContext } from '../context/CitaContext';
const CardDashboard = () => {
  
    const {estudiante,getEstudiante} =useContext(EstudianteContext)
    const {especialista,getEspecialista} =useContext(EspecialistaContext)
    const {especialidad,getEspecialidad} =useContext(EspecialidadContext)
    const {cita,getCita} =useContext(CitaContext)
   



    useEffect(() => {
   
      getEstudiante()
      getEspecialista() 
      getEspecialidad()
      getCita()
      
    }, []);
    return (
        <div className='w-full grid grid-cols-3 gap-x-16 gap-y-10 '>

            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-2 cursor-pointer card_dashboard p-4' >
               <div className='col-span-1 flex items-center number_card'>
                   <span className='font-bold text-8xl'  >{estudiante.length}</span>
               </div>

               <div className='content_info col-span-1 flex flex-col justify-around items-center justify-center pl-5' >
                    <span className=' text_normal tracking-widest uppercase' >Estudiantes</span>
                    <div className='p-3 flex justify-center items-center  rounded content_icon'>
                            <FaUserGraduate size={23}className='icon'  />
                    </div>
               </div>
            </div>



            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-2 cursor-pointer card_dashboard p-4' >
               <div className='col-span-1 flex items-center number_card'>
                   <span className='font-bold text-8xl'  >{especialidad.length}</span>
               </div>

               <div className='content_info col-span-1 flex flex-col justify-around items-center justify-center pl-5' >
                    <span className=' text_normal tracking-widest uppercase' >especialidades</span>
                    <div className='p-3 flex justify-center items-center  rounded content_icon'>
                            <MdOutlineViewInAr size={25}className='icon'  />
                    </div>
               </div>
            </div>


            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-2 cursor-pointer card_dashboard p-4' >
               <div className='col-span-1 flex items-center number_card'>
                   <span className='font-bold text-8xl'  >{especialista.length}</span>
               </div>

               <div className='content_info col-span-1 flex flex-col justify-around items-center justify-center pl-5' >
                    <span className=' text_normal tracking-widest uppercase' >especialistas</span>
                    <div className='p-3 flex justify-center items-center  rounded content_icon'>
                            <FaUserMd size={25}className='icon'  />
                    </div>
               </div>
            </div>





            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-2 cursor-pointer card_dashboard p-4' >
               <div className='col-span-1 flex items-center number_card'>
                   <span className='font-bold text-8xl'  >{cita.length}</span>
               </div>

               <div className='content_info col-span-1 flex flex-col justify-around items-center justify-center pl-5' >
                    <span className=' text_normal tracking-widest uppercase' >Citas</span>
                    <div className='p-3 flex justify-center items-center  rounded content_icon'>
                            <BsCalendar2Date size={25}className='icon'  />
                    </div>
               </div>
            </div>


        </div>
    )
}

export default CardDashboard
