import React, { useState, useContext , useRef} from 'react'

import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { ClienteContext } from '../context/ClienteContext';
import axios from 'axios';


const schema = yup.object().shape({
    nombre: yup.string().required('Ingrese nombre'),
    apellido: yup.string().required('Ingrese apellido'),
    sexo: yup.string().required('Ingrese el Genero'),
    correo: yup.string().email('Ingrese correo valido').required('Obligatorio su correo'),
    dni: yup.string().required('Obligatorio su DNI'),
    celular: yup.number('Solo numeros').integer('Solo numeros!!').positive().required('Ingrese Su numero telefonico'),
});




const FormularioEstudiante = ({ hidden, openModal }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
    const { postCliente, idCliente } = useContext(ClienteContext);



    const [active, setActive] = useState(false)
    const [selectGen, setSelectGen] = useState('')
    const [cardSelect, setCardSelect] = useState(0)
    const [imgurl, setImgUrl]=useState('')

    const selectGenero = (gen) => setSelectGen(gen)



    const siguienteFormulario = () => {
        setActive(!active)
    }

    const textFile = useRef()
  
/******************* IMG *************************** */
  const obtenerImg = (e) => {
  
    

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



    const onSubmit = (data, e) => {
        siguienteFormulario()
        postCliente(data)
        e.target.reset()
        reset(yupResolver)

    }

    const cerrarModal=(e)=>{
        openModal();
        setImgUrl('')
       // e.target.reset()
        reset(yupResolver)
    }



    return (
        <div className='modal flex justify-center items-center' style={{ display: hidden ? ' ' : 'none' }}>
            <div className=' bg-white text_subtitulo font-semibold ' style={{ width: '50%' }}>
                <div className='text-center p-5  text-xl'>
                    <p>Nuevo - Estudiante</p>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className={`  ${active ? 'hidden ' : 'block '} flex flex-col justify-between  `} style={{ height: '80%' }}>

                    <div className='w-full p-5 grid grid-cols-2 grid-rows-5 gap-x-4 gap-y-2'>

                        <div className=' row-span-4 col-span-1  flex '>
                            <div onClick={() => textFile.current.click()} className='flex flex-col w-full justify-around'>

                                <label className=' text_normal font-semibold mb-1 uppercase text-xs' htmlFor="nombre"  >Imagen</label>

                                <div className='bg-gray-100 flex flex-col justify-center items-center h-full  p-2 justify-center items-center  cursor-pointer  hover:bg-gray-200' style={{ border: '1px dashed #3F618C' }} >
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
                            <input className='p-2 mt-1 inputText ' placeholder='Juan' type="text"   {...register("nombre", { required: true })} />
                            <p className=' text-left text-xs font-normal m-0 text-red-600'>{errors.nombre?.message}</p>

                        </div>
                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>APELLIDO</span>
                            <input className='p-2 mt-1 inputText ' placeholder='Apaza Larico' type="text"   {...register("apellido", { required: true })} />
                            <p className='hidden text-left text-xs font-normal m-0 text-red-600'>{errors.apellido?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>CELULAR</span>
                            <input className='p-2 mt-1 inputText ' placeholder='999-999-999' type="text"   {...register("celular", { required: true })} />
                            <p className='hidden text-left text-xs font-normal m-0 text-red-600'>{errors.celular?.message}</p>

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>CORREO </span>
                            <input className='p-2 mt-1 inputText ' placeholder='xxxxxxx@gmail.com' type="text"   {...register("correo", { required: true })} />
                            <p className='hidden text-left text-xs font-normal m-0 text-red-600'>{errors.correo?.message}</p>

                        </div>

                       

                        <div className=' col-span-1 flex flex-col justify-around'>

                            <div className='' >
                                <span className='text_normal font-semibold text-xs '>GENERO </span>
                                <div className='flex w-full justify-between space-x-3'>

                                    <div className=' w-1/2 flex items-center ' onClick={() => selectGenero('M')} >
                                        <label className='w-full p-2 btn_darck cursor-pointer text-center font-semibold hover:text-white focus:ring focus:ring-4 focus:ring-blue-100' style={selectGen === 'M' ? { background: "#012340", color: 'white' } : null} htmlFor="masculino"> <span> M  </span> </label>
                                        <input className='hidden' type="radio" id="masculino" name="genero" value="M"{...register("sexo", { required: true })} />
                                    </div>

                                    <div className='w-1/2 flex items-center' onClick={() => selectGenero('F')}>
                                        <label className='w-full p-2 btn_darck cursor-pointer text-center font-semibold hover:text-white' style={selectGen === 'F' ? { background: "#012340", color: 'white' } : null} htmlFor="femenino"> <span> F  </span></label>
                                        <input className='hidden' type="radio" id="femenino" name="genero" value="F " {...register("sexo", { required: true })} />
                                    </div>


                                </div>
                                <p className='hidden text-left text-xs font-normal m-0 text-red-600'>{errors.sexo?.message}</p>
                            </div>

                            

                        </div>

                        <div className=' col-span-1 flex flex-col justify-around'>
                            <span className='text_normal font-semibold text-xs '>DNI </span>
                            <input className='p-2 mt-1 inputText ' placeholder='00000000' type="text"   {...register("dni", { required: true })} />
                            <p className='hidden text-left text-xs font-normal m-0 text-red-600'>{errors.dni?.message}</p>

                        </div>
                    </div>

                    <div className='w-full p-5 grid  grid-cols-5 gap-2'>
                        <button type='submit' className='col-span-4  btn_primary p-2' >Siguiente</button>
                        <a className='col-span-1 text-center font-normal cursor-pointer btn_secondary p-2' onClick={(e) =>cerrarModal(e)} >Cancelar</a>
                    </div>
                </form>




            </div>
        </div>
    )
}

export default FormularioEstudiante
