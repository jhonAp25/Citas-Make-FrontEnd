import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useContext } from 'react';
import { CitaContext } from '../context/CitaContext';
import toast from "react-hot-toast";




const schema = yup.object().shape({
    fecha: yup.string().required('Seleccione al fecha'),  
  });


const FormularioCitaEspecialista = ({setRefresh , refresh}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
    const {postCita} =useContext(CitaContext)
        
    
  
    const [horaInicial , setHoraInicial]=useState(12)
    const [cupo, setCupo] = useState(1)


    



    const changeHora=(e)=>{
      let hora = e.target.value
      if(hora > 18 || hora < 12){
        setHoraInicial(12)
      }else{
        setHoraInicial(hora)
      }  
    } 
    
    const onSubmit=(data)=>{
       
        let ini = horaInicial;

        [...Array(cupo)].map(c=>{
        
          postCita(data.fecha,ini)
          ini += 1
          
        })
       // toast.success(cupo + " Cupos de Citas Agregados")

        setRefresh(!refresh)
       
       
    }

 

  

  return (
    <div>
        <form className='bg-white' style={{maxHeight : 'fit-content'}} onSubmit={handleSubmit(onSubmit)} >
          <div className='bg_primary p-3' >
            <span className='text-lg ' >Formulario Horario de Citas</span> 
          </div>

          <div className='mt-4 p-3 grid grid-cols-1 gap-3'>

            <div className=' col-span-1 flex flex-col justify-around'>
              <span className='text_normal font-semibold text-xs '>Fecha Disponible</span>
              <input className='p-2 mt-1 inputText  ' placeholder='Nombre estudiante' type="date" min={new Date(Date.now()).toLocaleDateString('fr-CA')} {...register("fecha", { required: true })}   />
              <p className={` ${errors.fecha? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600 `}>{errors.fecha?.message}</p>

            </div>

            <div className='col-span-1 grid grid-cols-6 gap-x-3 gap-y-0 mb-2' >
                <div className=' col-span-3 flex flex-col justify-around'>
                    <span className='text_normal font-semibold text-xs '>Hora Inicio</span>
                    <input className='p-2 mt-1 inputText input_time_ini w-1/4 text-center' value={horaInicial } onChange={(e)=>changeHora(e)} type="number"  />
                    <p className='error_time_ini col-span-7 text-left text-xs font-normal m-0 text-red-600'></p>
                </div>

                <div className=' col-span-3 flex flex-col justify-around'>
                    <span className='text_normal font-semibold text-xs '>Cupos</span>
                    <div className='flex justify-between w-full'>
                      <span className={`rounded-lg  p-3 mr-2 ${cupo===1 ? 'btn_selected' : 'btn_outline_primary'}  `}  onClick={()=>setCupo(1)} >1</span>
                      <span className={`rounded-lg  p-3 mr-2 ${cupo===2 ? 'btn_selected' : 'btn_outline_primary'}  `}   onClick={()=>setCupo(2)}>2</span>
                      <span className={`rounded-lg  p-3 mr-2 ${cupo===3 ? 'btn_selected' : 'btn_outline_primary'}  `}  onClick={()=>setCupo(3)}>3</span>
                      <span className={`rounded-lg  p-3 mr-2 ${cupo===4 ? 'btn_selected' : 'btn_outline_primary'}  `}  onClick={()=>setCupo(4)}>4</span>
                      <span className={`rounded-lg  p-3 mr-2 ${cupo===10 ? 'btn_selected' : 'btn_outline_primary'}  `}   onClick={()=>setCupo(10)}>5</span>
                    </div>
                    <p className='error_time_ini col-span-7 text-left text-xs font-normal m-0 text-red-600'></p>
                </div>
              </div>
          
          

            <div className=' col-span-1 flex flex-col justify-around'>
              <button className='btn_primary  p-2 text-center' type='submit' >
                Crear 
              </button>
            </div>
          </div>

         
      </form>
    </div>
  )
}

export default FormularioCitaEspecialista