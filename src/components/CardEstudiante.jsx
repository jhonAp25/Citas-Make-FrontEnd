import React from 'react'
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {GiSandsOfTime} from 'react-icons/gi'

const CardEstudiante = ({ data }) => {
    return (
        <div className='border  rounded-lg flex flex-col mt-5 cursor-pointer shadow-xl card_estudiante ' style={{width : '100%'}} >
        <div  className='h-3/4 relative  header_estudiante ' style={{zIndex: '100'}} >
        <img className=' object-cover rounded-t-lg  ' style={{minWidth: 184, maxHeight: 180 , width: '100%'}}  src={data.foto} alt="perfil " width={278} height={230} />
            <div className='bottom-2 left-2  absolute pl-2 pr-2 etiqueta_carrera '  ><span className='font-light text-xs '>{data?.carrera?.descripcion}</span></div>
        </div>

        <div className='flex p-2 flex-col h-full ' >
           
                
            <p className='w-full  text-sm text_normal uppercase  truncate tracking-wide '>{data.nombre}, {data.apellido}</p>
              
            
            
            <div className='flex flex-col w-full justify-between mt-2'>
                <div className='flex'>   
                <GiSandsOfTime size={20} className='mr-2' color='#365B73' />
                    <p className=' text-sm text_normal '>{new Date().getFullYear()  - new Date(data.fecnac).getFullYear()   } años</p>
                </div>

                <div  className='flex mt-2'>
                 <AiOutlineMail size={20} className='mr-2' color='#365B73' />
                    <p className=' text-sm text_normal italic '>{data?.correo}</p>
                </div>

                <div className='flex mt-2'>
                    <BsPhone size={20} className='mr-2' color='#365B73' />
                    <a className=' text-sm text_normal focus:border-b-2 border-blue-300' href={`https://wa.me/${data?.telefono}`} >{data?.telefono}</a>
                </div>

               
                
            </div>
        </div>
        
    </div>


    )
}

export default CardEstudiante
