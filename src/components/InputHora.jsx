import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'

const InputHora = ({postCita, fecha}) => {

    const [horaInicio, setHoraInicio]= useState('');
    const [horaFin, setHoraFin]= useState('');
    const [block, setBlock] = useState(false)

    const inputTime= useRef() 


    const agregarCupo=()=>{
       if (horaInicio && horaFin) {
            postCita(fecha, horaInicio, horaFin)
            setBlock(true)
       }  
       console.log(inputTime)
    }

    useEffect(() => {
        setHoraInicio('')
        setHoraFin('')
        setBlock(false)
    }, [fecha]);


  return (
        <div className='col-span-1 grid grid-cols-7 gap-x-3 gap-y-0 mb-2' >
                <div className=' col-span-3 flex flex-col justify-around'>
                    <span className='text_normal font-semibold text-xs '>Hora Inicio</span>
                    <input ref={inputTime}  formNoValidate={true} disabled={block} className='p-2 mt-1 inputText input_time_ini' value={horaInicio}  min="12:00" max="18:00"  type="time" onChange={(e)=>setHoraInicio(e.target.value)} />
                    <p className='error_time_ini col-span-7 text-left text-xs font-normal m-0 text-red-600'></p>
                </div>

                <div className=' col-span-3 flex flex-col justify-around'>
                    <span className='text_normal font-semibold text-xs '>Hora Final</span>
                    <input disabled={block} formNoValidate={true} className='p-2 mt-1 inputText input_time_fin'  min={horaInicio} value={horaFin} max="18:00"  type="time" onChange={(e)=>setHoraFin(e.target.value)}   />
                    <p className='error_time_fin col-span-7 text-left text-xs font-normal m-0 text-red-600 '></p>
                  
                </div>
                {block
                ?
                <button  className={` ${!block ? "" : " opacity-25"} col-span-1 flex pointer justify-center border-t-8 border-l-8 border-white items-center btn_primary`}  >
                    <BsFillCheckCircleFill size={23}/>
                </button>               
                :
               
                <button   className={` ${horaInicio && horaFin ? "" : " opacity-25"} col-span-1 flex pointer justify-center border-t-8 border-l-8 border-white items-center btn_primary`}onClick={()=>agregarCupo()} >
                    <BsFillCheckCircleFill size={23}/>
                </button>
                }
                
              
                
            </div>
  )
}

export default InputHora