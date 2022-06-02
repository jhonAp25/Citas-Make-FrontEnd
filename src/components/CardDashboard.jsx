import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ClienteContext } from '../context/ClienteContext'
import { EstudianteContext } from '../context/EstudianteContext'
import { DisciplinaContext } from '../context/DisciplinaContext'
import { PlanPagoContext } from '../context/PlanPagoContext'
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaHandHoldingMedical , FaLaptopMedical} from "react-icons/fa";
const CardDashboard = () => {
    const {disciplina,getDisciplina} =useContext(DisciplinaContext)
    const {cliente,getCliente} =useContext(ClienteContext)
    const {estudiante,getEstudiante} =useContext(EstudianteContext)
    const {plan,getPlan} =useContext(PlanPagoContext)




    useEffect(() => {
      getDisciplina()
      getCliente()
      getEstudiante()
      getPlan()
      
    }, []);
    return (
        <div className='w-full grid grid-cols-3 gap-x-16 gap-y-10 '>

            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-7 cursor-pointer card_dashboard' >
               <div className='col-span-2 flex items-center'>
                   <div className='h-full w-full p-3 flex justify-center items-center  rounded' style={{background: '#9DDCD4'}}>
                   <BsCalendar2Date size={35} color="#E67E22 " />
                   </div>
               </div>

               <div className=' col-span-5 flex justify-around items-center pl-5' >
                   <span className=' text-md tracking-widest font-bold' >Citas</span>
                   <span className='font-bold text-3xl' >{estudiante.length}</span>
               </div>
            </div>



            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-7 cursor-pointer card_dashboard'>
               <div className='col-span-2 flex items-center'>
                   <div className='h-full w-full p-3 flex justify-center items-center  rounded' style={{background: '#9DDCD4'}}>
                   <MdOutlinePersonalInjury size={35} color="#1F618D" />

                   </div>
               </div>

               <div className='text_card col-span-5 flex justify-around items-center pl-5' >
                   <span className=' text-md tracking-widest font-bold' >Estudiantes</span>
                   <span className='font-bold text-3xl'>{cliente.length}</span>
               </div>
            </div>

            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-7 cursor-pointer card_dashboard'>
               <div className='col-span-2 flex items-center'>
                   <div className='h-full w-full p-3 flex justify-center items-center  rounded' style={{background: '#9DDCD4'}}>
                   <FaLaptopMedical  size={35} color="#239B56" />
                 
                   </div>
               </div>

               <div className=' text_card col-span-5 flex justify-around items-center pl-5' >
                   <span className=' text-md tracking-widest font-bold' >Especialidad</span>
                   <span className='font-bold text-3xl' >{disciplina.length}</span>
               </div>
            </div>



            <div className='rounded-xl bg-white  col-span-1 grid grid-cols-7 cursor-pointer card_dashboard' >
               <div className='col-span-2 flex items-center'>
                   <div className='h-full w-full p-3 flex justify-center items-center  rounded' style={{background: '#9DDCD4  '}}>

                   <FaHandHoldingMedical   size={35} color="#B03A2E" />

                   </div>
               </div>

               <div className=' text_card col-span-5 flex justify-around items-center pl-5' >
                   <span className=' text-md tracking-widest font-bold' >Especialistas</span>
                   <span className='font-bold text-3xl'>{plan.length}</span>
               </div>
            </div>


        </div>
    )
}

export default CardDashboard
