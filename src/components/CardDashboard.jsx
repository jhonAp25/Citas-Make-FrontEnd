import React, { useEffect } from 'react'
import { useContext } from 'react'
import { EstudianteContext } from '../context/EstudianteContext'

import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaHandHoldingMedical , FaLaptopMedical} from "react-icons/fa";
const CardDashboard = () => {
  
    const {estudiante,getEstudiante} =useContext(EstudianteContext)
   



    useEffect(() => {
   
      getEstudiante()
        
      
    }, []);
    return (
        <div className='w-full grid grid-cols-3 gap-x-16 gap-y-10 '>

            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-2 cursor-pointer card_dashboard p-4' >
               <div className='col-span-1 flex items-center'>
                   <span className='font-bold text-8xl' style={{color: "rgba(54, 91, 115, 0.2)"}} >{estudiante.length}0</span>
               </div>

               <div className=' col-span-1 flex flex-col justify-around items-center justify-center pl-5' >
                    <span className=' text_normal tracking-widest uppercase' >Estudiantes</span>
                    <div className='p-3 flex justify-center items-center  rounded shadow-xl'>
                            <BsCalendar2Date size={25} color="#E67E22 " />
                    </div>
               </div>
            </div>



            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-2 cursor-pointer card_dashboard p-4' >
               <div className='col-span-1 flex items-center'>
                   <span className='font-bold text-8xl' style={{color: "rgba(54, 91, 115, 0.2)"}} >{estudiante.length}0</span>
               </div>

               <div className=' col-span-1 flex flex-col justify-around items-center justify-center pl-5' >
                    <span className=' text_normal tracking-widest uppercase' >Estudiantes</span>
                    <div className='p-3 flex justify-center items-center  rounded shadow-xl'>
                            <BsCalendar2Date size={25} color="#E67E22 " />
                    </div>
               </div>
            </div>


            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-2 cursor-pointer card_dashboard p-4' >
               <div className='col-span-1 flex items-center'>
                   <span className='font-bold text-8xl' style={{color: "rgba(54, 91, 115, 0.2)"}} >{estudiante.length}0</span>
               </div>

               <div className=' col-span-1 flex flex-col justify-around items-center justify-center pl-5' >
                    <span className=' text_normal tracking-widest uppercase' >Estudiantes</span>
                    <div className='p-3 flex justify-center items-center  rounded shadow-xl'>
                            <BsCalendar2Date size={25} color="#E67E22 " />
                    </div>
               </div>
            </div>




            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-2 cursor-pointer card_dashboard p-4' >
               <div className='col-span-1 flex items-center'>
                   <span className='font-bold text-8xl' style={{color: "rgba(54, 91, 115, 0.2)"}} >{estudiante.length}0</span>
               </div>

               <div className=' col-span-1 flex flex-col justify-around items-center justify-center pl-5' >
                    <span className=' text_normal tracking-widest uppercase' >Estudiantes</span>
                    <div className='p-3 flex justify-center items-center  rounded shadow-xl'>
                            <BsCalendar2Date size={25} color="#E67E22 " />
                    </div>
               </div>
            </div>


        </div>
    )
}

export default CardDashboard
