import React, { useContext, useEffect } from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { EspecialistaContext } from '../context/EspecialistaContext';
import { EspecialidadContext } from '../context/EspecialidadContext';

const schema = yup.object().shape({
    nombre: yup.string().required('Ingrese nombre'),
    apellido: yup.string().required('Ingrese apellido'),
    fecnac: yup.string().required('Ingrese Fecha de nacimiento'),
    especialidad: yup.string("Obligatorio").required('Ingrese la especialidad'),
    correo: yup.string().email('Ingrese correo valido').required('Obligatorio su correo'),
    dni: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Ingrese DNI valido").max(8,"Maximo 8 caracteres").min(8,"Minimo 8 caracteres").matches(),
    celular: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Ingrese nro de celular valido").max(9,"Maximo 9 caracteres").min(9,"Minimo 9 caracteres"),
});


const FormularioEspecialista = ({ hidden, openModal }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

    const { postEspecialista } = useContext(EspecialistaContext);
    const {especialidad , getEspecialidad} = useContext(EspecialidadContext)

    const cerrarModal=(e)=>{
        openModal();
        reset(yupResolver)


    }

    const onSubmit = (data, e) => {
       postEspecialista(data)
        console.log(data)
        e.target.reset()
        reset(yupResolver)
        openModal();

    }

    useEffect(() => {
        getEspecialidad()
    }, [])
    


  return (
    <div className='modal flex justify-center items-center' style={{ display: hidden ? ' ' : 'none' }}>
            <div className=' bg-white text_subtitulo font-semibold ' style={{ width: '50%' }}>
                <div className='text-center p-5  text-xl'>
                    <p>Nuevo - Especialista</p>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className={`  block flex flex-col justify-between  `} style={{ height: '60%' }}>

                    <div className='w-full p-5 grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-2'>

                        


                        <div className=' col-span-1 flex flex-col justify-around'>
                            <label className='text_normal font-semibold text-xs '>NOMBRE</label>
                            <input className='p-2 mt-1 inputText ' placeholder='Juan  ' type="text"    {...register("nombre", { required: true })}  />
                            {errors?.nombre && <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.nombre?.message}</p>}

                        </div>
                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>APELLIDO</span>
                            <input className='p-2 mt-1 inputText ' placeholder='Apaza Larico' type="text"  {...register("apellido", { required: true })} />
                            <p className={` ${errors.apellido? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.apellido?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>CELULAR</span>
                            <input className='p-2 mt-1 inputText ' placeholder='999-999-999' type="text"  {...register("celular", { required: true })}  />
                            <p className={` ${errors.celular? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.celular?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>CORREO </span>
                            <input className='p-2 mt-1 inputText ' placeholder='xxxxxxx@gmail.com' type="text"   {...register("correo", { required: true })}  />
                            <p className={` ${errors.correo? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.correo?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>FECHA DE NACIMIENTO </span>
                            <input className='p-2 mt-1 inputText ' placeholder='00/00/2000'   max="2005-12-31" type="date"   {...register("fecnac", { required: true })} />
                            <p className={` ${errors.fecnac? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.fecnac?.message}</p>

                        </div>

                       

                        <div className=' col-span-1 flex flex-col justify-around'>

                            <span className='text_normal font-semibold text-xs '>ESPECIALIDAD </span>
                            <select className='p-2 mt-1 inputText ' placeholder='00000000' {...register("especialidad", { required: true })}  >
                            <option value="" selected disabled hidden >Seleccione la especialidad </option>
                            {especialidad.map(e=>(
                                <option key={e.id} value={e.id} >{e.descripcion}</option>
                            ))}
                            </select>  
                            <p className={` ${errors.especialidad? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.especialidad?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs' >DNI </span>
                            <input className='p-2 mt-1 inputText ' placeholder='00000000' type="text" {...register("dni", { required: true })}/>
                            <p className={` ${errors.dni? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.dni?.message}</p>

                        </div>
                    </div>

                    <div className='w-full p-5 grid  grid-cols-5 gap-2'>
                        <button type='submit' className='col-span-4  btn_primary p-2' >Confirmar Registro</button>
                        <a className='col-span-1 text-center font-normal cursor-pointer btn_secondary p-2' onClick={(e) =>cerrarModal(e)} >Cancelar</a>
                    </div>
                </form>




            </div>
        </div>
  )
}

export default FormularioEspecialista