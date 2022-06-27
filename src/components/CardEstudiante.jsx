import React from 'react'
import {BsPhone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

const CardEstudiante = ({data}) => {
    return (
        <div className=' rounded-xl bg-white p-3   flex  flex-col p-5 ' style={{width: '100%' , height : '253px', boxShadow: '0px 5px 11px rgb(63 97 135 / 28%)'  }}>
             <div  className='flex  flex-col mb-5 justify-center items-center' >
                    <p className='font-bold text-xl capitalize text_titulo02'>{data?.nombre}, {data?.apellido}</p>
            </div>

            <div className='flex w-full'>

            <div className='flex flex-col flex-2  justify-center items-center'>
                
                {/** <img src="https://i.imgur.com/pMTKt20.jpg" alt=""  className='rounded-full' style={{width: '120px' , height : '120px'}} />* */}
                {data?.foto === ""  
                ? <div  className='rounded-full flex justify-center items-center '  style={{width: '120px' , height : '120px', background:'#011826'}} >
                     <span className='text-white font-semibold text-3xl uppercase'>  {data?.apellido?.charAt(0)}{data?.nombre?.charAt(0)} </span>
                 </div>
                :<img src={data.foto} alt=""  className='rounded-full' style={{width: '120px' , height : '120px', objectFit : 'cover'}} />}
                
                 <p className='text-sm font-ligth flex align-center justify-center  mt-3 truncate py-1 px-2  bg-red-400 rounded-full  capitalize' style={{color:'#349EB5', background: 'rgba(21, 193, 224, 0.37)'}} > {data?.carrera?.descripcion} </p>
             </div>
 
            
 
             <div className='flex flex-col flex-1 ' >
                
 
                 <div className='flex items-center ' style={{color:'#012340', fontSize: '15px'}}  >
                     <BsPhone size={20} className='mr-2'/>
                     <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{data?.dni}</span>
                 </div> 
                 <div className='flex items-center mt-1' style={{color:'#012340', fontSize: '15px'}}  >
                     <AiOutlineMail size={20} className='mr-2'/>
                     <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{data?.correo}</span>
                 </div> 
                
             </div>
            </div>
         
        </div>
    )
}

export default CardEstudiante
