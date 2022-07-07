import React from 'react'
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail, AiFillEdit } from "react-icons/ai";

const CardEstudiante = ({ data }) => {
    return (
        <div className=' rounded-xl bg-white   flex justify-between ' style={{ width: '100%', height: 'auto', boxShadow: '0px 5px 11px rgb(63 97 135 / 28%)' }}>

            <div className='flex flex-col flex-auto '>

                <div className='flex  flex-col mb-2 justify-center items-center mt-3' >
                    <p className='font-normal  text-xl uppercase text_titulo02'>{data?.nombre}, {data?.apellido}</p>
                </div>


                <div className='flex w-full'>

                    <div className='flex flex-col flex-initial  justify-center items-center mb-4 ml-4' style={{width: "20%"}} >

                        {/** <img src="https://i.imgur.com/pMTKt20.jpg" alt=""  className='rounded-full' style={{width: '120px' , height : '120px'}} />* */}
                        {data?.foto === ''
                            ? <div className='rounded-full flex justify-center items-center ' style={{ width: '90px', height: '90px', background: '#011826' }} >
                                <span className='text-white font-semibold text-3xl uppercase'>  {data?.apellido?.charAt(0)}{data?.nombre?.charAt(0)} </span>
                            </div>
                            : <img src={data.foto} alt="" className='rounded-full' style={{ width: '90px', height: '90px', objectFit: 'cover' }} />}

                        <p className='text-xs font-ligth flex align-center justify-center  mt-3 truncate py-1 px-2  bg-red-400 rounded-full  capitalize' style={{ color: '#349EB5', background: 'rgba(21, 193, 224, 0.37)' }} > {data?.carrera?.descripcion} </p>
                    </div>



                    <div className='grid grid-cols-2 grid-rows-3 justify-start pt-6 gap-2 w-full ml-5' >


                        <div className='flex items-center col-span-1' style={{ color: '#012340', fontSize: '15px' }}  >
                            <BsPhone size={20} className='mr-2' />
                            <span style={{ color: 'rgba(63, 97, 140, 0.7)' }} >{data?.telefono}</span>
                        </div>
                        <div className='flex items-center col-span-1' style={{ color: '#012340', fontSize: '15px' }}  >
                            <AiOutlineMail size={20} className='mr-2' />
                            <span style={{ color: 'rgba(63, 97, 140, 0.7)' }} >{data?.correo}</span>
                        </div>
                        <div className='flex items-center col-span-1' style={{ color: '#012340', fontSize: '15px' }}  >
                            <AiOutlineMail size={20} className='mr-2' />
                            <span style={{ color: 'rgba(63, 97, 140, 0.7)' }} >{data?.correo}</span>
                        </div>
                        <div className='flex items-center row-span-1' style={{ color: '#012340', fontSize: '15px' }}  >
                            <AiOutlineMail size={20} className='mr-2' />
                            <span style={{ color: 'rgba(63, 97, 140, 0.7)' }} >{data?.correo}</span>
                        </div>

                    </div>


                </div>
            </div>

            <div className='flex justify-center flex-initial rounded-br-xl rounded-tr-xl items-center btn_secondary h-full p-2'>
                <AiFillEdit size={20} className='mr-2' />
            </div>

        </div>
    )
}

export default CardEstudiante
