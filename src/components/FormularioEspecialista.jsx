import React, { useContext, useEffect, useState } from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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


const FormularioEspecialista = ({ hidden, openModal , data, setData}) => {

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({ resolver: yupResolver(schema) });

    const { postEspecialista, putEspecialista } = useContext(EspecialistaContext);
    const {especialidad , getEspecialidad} = useContext(EspecialidadContext)

    const [typeForm , setTypeForm] =useState()

    const cerrarModal=(e)=>{
        setData([])
        openModal();
        reset(yupResolver)
        setTypeForm(false)


    }

    const onSubmitReg = (data, e) => {
       
        postEspecialista(data)
        
        e.target.reset()
        reset(yupResolver)
        openModal();

    }


    const onSubmitUpd=(data,e)=>{
         putEspecialista(data)
        e.target.reset()
        reset(yupResolver)
        openModal();
     
    }

    useEffect(() => {
        getEspecialidad()
       
        setTypeForm(data.length !== 0)

        setValue("id", data.id);
        setValue("nombre", data.nombre);
        setValue("apellido", data.apellido);
        setValue("correo", data.correo);
        setValue("celular", data.telefono);
        setValue("fecnac", data.fecnac);
        setValue("dni", data.dni);
        setValue("especialidad", data?.especialidad?.id);

       
    }, [data])
    


  return (
    <div className='modal flex justify-center items-center' style={{ display: hidden ? ' ' : 'none' }}>
            <div className=' bg-white text_subtitulo font-semibold ' style={{ width: '50%' }}>
                <div className='text-center p-5  text-xl font-normal bg_primary'>
                    {typeForm ?
                    <p>Actualizar - Especialista</p>:
                    <p>Nuevo - Especialista</p>
                    }
                    
                </div>

               
                <form onSubmit={ typeForm ?  handleSubmit(onSubmitUpd): handleSubmit(onSubmitReg)} className={`  block flex flex-col justify-between  `} >

                    <div className={`w-full p-5 grid grid-cols-2  ${typeForm ?'grid-rows-2' :'grid-rows-4'}  gap-x-4 gap-y-2`}>

                        


                        <div className=' col-span-1 flex flex-col justify-around'>
                            <input className='p-2 mt-1 inputText ' placeholder='Juan  ' type="hidden"   {...register("id", { required: true })}  />
                            <label className='text_normal font-semibold text-xs '>NOMBRE</label>
                            <input className='p-2 mt-1 inputText ' placeholder='Juan  ' type="text"   {...register("nombre", { required: true })}  />
                            {errors?.nombre && <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.nombre?.message}</p>}

                        </div>
                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>APELLIDO</span>
                            <input className='p-2 mt-1 inputText ' placeholder='Apaza Larico' type="text"  {...register("apellido", { required: true })} />
                            <p className={` ${errors.apellido? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.apellido?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>CELULAR</span>
                            <input className='p-2 mt-1 inputText ' placeholder='999-999-999' type="text" {...register("celular", { required: true })}  />
                            <p className={` ${errors.celular? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.celular?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>CORREO </span>
                            <input className='p-2 mt-1 inputText ' placeholder='xxxxxxx@gmail.com' type="text"  {...register("correo", { required: true })}  />
                            <p className={` ${errors.correo? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.correo?.message}</p>

                        </div>
                    {typeForm ?
                    null:
                    <div className=' col-span-1 flex flex-col justify-around'>
                        <span className='text_normal font-semibold text-xs '>FECHA DE NACIMIENTO </span>
                        <input className='p-2 mt-1 inputText ' placeholder='00/00/2000'   max="2005-12-31" type="date"  {...register("fecnac", { required: true })} />
                        <p className={` ${errors.fecnac? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.fecnac?.message}</p>

                    </div>
                    }
                        
                    {typeForm ?
                     null: 
                    <div className=' col-span-1 flex flex-col justify-around'>

                            <span className='text_normal font-semibold text-xs '>ESPECIALIDAD </span>
                            <select className='p-2 mt-1 inputText ' placeholder='00000000'{...register("especialidad", { required: true })}  >
                            <option value="" selected disabled hidden >Seleccione la especialidad </option>
                            {especialidad.map(e=>(
                                <option key={e.id} value={e.id} >{e.descripcion}</option>
                            ))}
                            </select>  
                            <p className={` ${errors.especialidad? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.especialidad?.message}</p>

                    </div>
                     }
                       
                       {typeForm ?
                     null: 
                     <div className=' col-span-1 flex flex-col justify-around'>
                        <span className='text_normal font-semibold text-xs' >DNI </span>
                        <input className='p-2 mt-1 inputText ' placeholder='00000000' type="text" {...register("dni", { required: true })}/>
                        <p className={` ${errors.dni? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.dni?.message}</p>

                    </div>
                     }
                        

                       
                    </div>

                    <div className='w-full p-5 grid  grid-cols-5 gap-2'>
                           
                       {typeForm ?
                    <button  className='col-span-4 font-normal text-center btn_primary p-2'  >Actualizar Registro</button>: 
                    <button type='submit' className='col-span-4  btn_primary p-2' >Confirmar Registro</button>}
                        <a className='col-span-1 text-center font-normal cursor-pointer btn_secondary p-2' onClick={(e) =>cerrarModal(e)} >Cancelar</a>
                    </div>
                </form>




            </div>
        </div>
  )
}

export default FormularioEspecialista