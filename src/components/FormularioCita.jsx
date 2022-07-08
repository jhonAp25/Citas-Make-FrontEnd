import React, { useContext } from 'react'
import { useEffect } from 'react'
import { CitaContext } from '../context/CitaContext'
import { EspecialidadContext } from '../context/EspecialidadContext'
import { EstudianteContext } from '../context/EstudianteContext'

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ColaContext } from '../context/ColaContext'




const schema = yup.object().shape({
  estudiante: yup.string().required('Seleccione al Estudiante'),
  cita: yup.string().required('Seleccionne su Horario'),
  descripcion: yup.string().required('Ingrese Descripcion')
  
});

const FormularioCita = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

  const {citaDisponible, getCitaDisponible, postReservaCita} = useContext(CitaContext)
  const {estudiantePendiente , getEstudiantePendiente} = useContext(EstudianteContext)
  const {getColaEspera , colaEspera} =useContext( ColaContext )

  let idEspc = localStorage.getItem("espc")
  let fecha = localStorage.getItem("fecha")



  const onSubmit = (data, e) => {
       
    console.log(data)
    e.target.reset()
    reset(yupResolver)
    postReservaCita(data)

}

  useEffect(() => {
    getCitaDisponible(localStorage.getItem("fecha"), localStorage.getItem("espc"))
    getColaEspera()
 
  }, [fecha, idEspc])
  



  return (
    <div  >
      <form className='bg-gray-300' style={{maxHeight : 'fit-content'}} onSubmit={handleSubmit(onSubmit)} >
          <div className='bg_primary p-3' >
            <span className='text-lg' >Formulario Citas</span> 
          </div>

          <div className='mt-4 p-3 grid grid-cols-1 gap-3'>

            <div className=' col-span-1 flex flex-col justify-around'>
              <span className='text_normal font-semibold text-xs '>Estudiante Disponible</span>
              <select className='p-2 mt-1 inputText capitalize ' placeholder='Nombre estudiante' type="text"  {...register("estudiante", { required: true })}  >
                <option value="" selected disabled hidden >Seleccione al Estudiante </option>
                {colaEspera.map(e=>(
                  <option value={e?.estudiante?.id}>{e?.estudiante?.nombre}, {e?.estudiante?.apellido}  </option>
                ))}
                

              </select>
              <p className={` ${errors.estudiante? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600 `}>{errors.estudiante?.message}</p>

            </div>

            <div className=' col-span-1 flex flex-col justify-around'>
              <span className='text_normal font-semibold text-xs '>Horario</span>
              <select className='p-2 mt-1 inputText ' placeholder='00:00' type="text"  {...register("cita", { required: true })}  >
                <option value="" selected disabled hidden >Selecciones su Horario </option>
                {citaDisponible.map(c=>(
                  <option value={c.id} >{c.horaInicio.split(":")[0]+":"+c.horaInicio.split(":")[1]} - {c.horaFin.split(":")[0]+":"+c.horaFin.split(":")[1]}</option>
                ))}
                
              </select>
              <p className={` ${errors.cita? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600 `}>{errors.cita?.message}</p>

            </div>

            <div className=' col-span-1 flex flex-col justify-around'>
              <span className='text_normal font-semibold text-xs '>Descripcion</span>
              <textarea className='p-2 mt-1 inputText ' placeholder='Lorem ipsum' type="text"   {...register("descripcion", { required: true })} />
              <p className={` ${errors.descripcion? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600 `}>{errors.descripcion?.message}</p>

            </div>
          </div>

          <div className='w-full p-3 grid  grid-cols-1 gap-2'>
            <button type='submit' className='  btn_primary p-2' >Confirmar Cita</button>
            
          </div>
      </form>

    </div>
  )
}

export default FormularioCita