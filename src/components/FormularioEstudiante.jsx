import React, { useState, useContext , useRef} from 'react'

import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from 'axios';
import { EstudianteContext } from '../context/EstudianteContext';
import { CarreraContext } from '../context/CarreraContext';
import { useEffect } from 'react';


const schema = yup.object().shape({
    nombre: yup.string().required('Ingrese nombre'),
    apellido: yup.string().required('Ingrese apellido'),
    fecnac: yup.string().required('Ingrese Fecha de nacimiento'),
    carrera: yup.string("Obligatorio").required('Ingrese el Carrera'),
    correo: yup.string().email('Ingrese correo valido').required('Obligatorio su correo'),
    dni: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Ingrese DNI valido").max(8,"Maximo 8 caracteres").min(8,"Minimo 8 caracteres").matches().required("Ingrese Dni"),
    celular: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Ingrese nro de celular valido").max(9,"Maximo 9 caracteres").min(9,"Minimo 9 caracteres").required("Ingrese Celular"),
});




const FormularioEstudiante = ({ hidden, openModal, data , setData}) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({ resolver: yupResolver(schema) });
    const { postEstudiante , putEstudiante } = useContext(EstudianteContext);
    const { getCarrera, carrera} = useContext(CarreraContext);



    const [imgurl, setImgUrl]=useState('')



  

    const textFile = useRef()
  
/******************* IMG *************************** */
  const obtenerImg = (e) => {
  
    console.log(e.target.files);

    let body = new FormData()
    body.set("key" , '2ba0a90ff55eacd533a5bef7c9f45418')
    body.append('image',e.target.files[0])

/******************* Guardar IMG *************************** */

const myPromise =  axios({
    method: "post",
    url: "https://api.imgbb.com/1/upload",
    data: body,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((response)=>{
       setImgUrl(response.data.data.url); 
       
      // setData({ ...data, 'img': response.data.data.url  })
  }).catch((error)=>{ console.log(error); })

  toast.promise(myPromise, {
    loading: 'Loading',
    success: 'Foto Subidaa 📷⭐',
    error: 'Error en el Servidor ❌',
  });

};  



    const onSubmitReg = (data, e) => {
     
        postEstudiante(data, imgurl)
        e.target.reset()
        reset(yupResolver)
        openModal();

    }

    const onSubmitUpd =(datas, e)=>{
        putEstudiante(datas, imgurl)
        e.target.reset()
        reset(yupResolver)
        openModal();
    }

    const cerrarModal=(e)=>{
        openModal();
        setImgUrl('')
        reset(yupResolver)
        setData([])


    }

   
    useEffect(() => {
        
        setValue("id", data.id);
        setValue("nombre", data.nombre);
        setValue("apellido", data.apellido);
        setValue("correo", data.correo);
        setValue("celular", data.telefono);
        setValue("fecnac", data.fecnac);
        setValue("dni", data.dni);
        setImgUrl(data.foto)
        setValue("carrera", data?.carrera?.id);

        getCarrera()
     }, [data]);




    return (
        <div className='modal flex justify-center items-center' style={{ display: hidden ? ' ' : 'none' }}>
            <div className=' bg-white text_subtitulo font-semibold ' style={{ width: '50%' }}>
                <div className='text-center p-5  text-xl font-normal bg_primary'>
                    {data.length !== 0 ? 
                    <p>Actualizar - Estudiante</p>:
                    <p>Nuevo - Estudiante</p>
                    }
                  
                </div>


                <form onSubmit={ data.length !== 0 ?  handleSubmit(onSubmitUpd): handleSubmit(onSubmitReg)} className={` block  flex flex-col justify-between  `} style={{ height: '80%' }}>

                    <div className={`w-full p-5 grid grid-cols-2 ${data.length !== 0 ? 'grid-rows-4' : 'grid-rows-6' }  gap-x-4 gap-y-2`}>

                        <div className=' row-span-5 col-span-1  flex '>
                            <div onClick={() => textFile.current.click()} className='flex flex-col w-full justify-around'>

                                <label className=' text_normal font-semibold mb-1 uppercase text-xs' htmlFor="nombre"  >Imagen</label>

                                <div className='bg-gray-100 flex flex-col justify-center items-center h-full  p-2 justify-center items-center  cursor-pointer  hover:bg-gray-200' style={{ border: '1px dashed #3F618C', maxHeight : "328px" }} >
                                    {imgurl
                                        ? <img style={{ maxHeight: '100%', maxWidth: '100%', height: '100%', objectFit: 'cover' }} src={imgurl} alt="perfil de trainer" />
                                        : <div className='flex flex-col justify-center items-center'>
                                            <AiOutlineCloudUpload size={30} color='#2563EB' />
                                            <span className='text-sm text-center text_normal'  >Seleccione una imagen</span>
                                        </div>}

                                </div>

                                <input type="file" ref={textFile} className='hidden' onChange={obtenerImg} id="btnFoto" />

                            </div>
                        </div>


                        <div className=' col-span-1 flex flex-col justify-around'>
                            <label className='text_normal font-semibold text-xs '>NOMBRE</label>
                            <input className='p-2 mt-1 inputText ' placeholder='Juan  ' type="text"   {...register("nombre", { required: true })} />
                            <p className={` ${errors.nombre? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600 `}>{errors.nombre?.message}</p>

                        </div>
                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>APELLIDO</span>
                            <input className='p-2 mt-1 inputText ' placeholder='Apaza Larico' type="text"   {...register("apellido", { required: true })} />
                            <p className={` ${errors.apellido? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.apellido?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>CELULAR</span>
                            <input className='p-2 mt-1 inputText ' placeholder='999-999-999' type="text"   {...register("celular", { required: true })} />
                            <p className={` ${errors.celular? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.celular?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>CORREO </span>
                            <input className='p-2 mt-1 inputText ' placeholder='xxxxxxx@gmail.com' type="text"   {...register("correo", { required: true })} />
                            <p className={` ${errors.correo? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.correo?.message}</p>

                        </div>
                        {data.length !== 0 ? null :
                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>FECHA DE NACIMIENTO </span>
                            <input className='p-2 mt-1 inputText ' placeholder='00/00/2000'   max="2005-12-31" type="date"   {...register("fecnac", { required: true })} />
                            <p className={` ${errors.fecnac? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.fecnac?.message}</p>

                        </div>
                        }              
                        

                       
                        {data.length !== 0 ? null :
                        <div className=' col-span-1 flex flex-col justify-around'>

                            <span className='text_normal font-semibold text-xs '>CARRERA </span>
                            
                            <select  className='p-2 mt-1 inputText '  {...register("carrera", { required: true })} >
                            <option value="" selected disabled hidden >Seleccione la especialidad </option>
                                {carrera.map(c=>(
                                    <option  key={c.id}  value={c.id} > {c.descripcion}</option>   
                                ))}    
                            </select>
                            <p className={` ${errors.carrera? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.carrera?.message}</p>
                            

                        </div>
                        }

                        {data.length !== 0 ? null :
                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>DNI </span>
                            <input className='p-2 mt-1 inputText ' placeholder='00000000' type="text"   {...register("dni", { required: true })} />
                            <p className={` ${errors.dni? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{errors.dni?.message}</p>

                        </div> 
                        }
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

export default FormularioEstudiante
