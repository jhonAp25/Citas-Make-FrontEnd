import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import InputHora from './InputHora';
import { useContext } from 'react';
import { CitaContext } from '../context/CitaContext';
import { useEffect } from 'react';



const schema = yup.object().shape({
    fecha: yup.string().required('Seleccione al fecha'),  
  });


const FormularioCitaEspecialista = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
    const {postCita} =useContext(CitaContext)
    
    
    const [fecha, setFecha]=useState()
    const [cupo, setCupo] = useState(1)


    const onSubmit=(data)=>{
        console.log(data?.fecha);
        setFecha(data?.fecha)
    }

    const AgregarCupos=()=>{
        setCupo(cupo + 1 )
    }

    const changeFecha=(e)=>{
        setFecha(e.target.value)
        setCupo(1)
    }


  

  return (
    <div>
        <form className='bg-white' style={{maxHeight : 'fit-content'}} onSubmit={handleSubmit(onSubmit)} >
          <div className='bg_primary p-3' >
            <span className='text-lg' >Formulario Citas</span> 
          </div>

          <div className='mt-4 p-3 grid grid-cols-1 gap-3'>

            <div className=' col-span-1 flex flex-col justify-around'>
              <span className='text_normal font-semibold text-xs '>Fecha Disponible</span>
              <input className='p-2 mt-1 inputText  ' placeholder='Nombre estudiante' type="date"  {...register("fecha", { required: true })} onChange={(e)=>changeFecha(e)}  />
              <p className={` ${errors.fecha? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600 `}>{errors.fecha?.message}</p>

            </div>
            {[...Array(cupo)].map((x, i) =>
                <InputHora key={i + 1} postCita={postCita} fecha={fecha} />
            )}
            
          

            <div className=' col-span-1 flex flex-col justify-around'>
              <div className='btn_custom p-2 text-center' onClick={()=>AgregarCupos()} >
                + Agregar Cupo
              </div>
            </div>
          </div>

         
      </form>
    </div>
  )
}

export default FormularioCitaEspecialista