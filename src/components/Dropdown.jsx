import React, { useState } from 'react'
import {AiOutlineMore} from 'react-icons/ai'

const Dropdown = ({updateEstado, data}) => {

    const [opcion , setOpcion]=useState(false)

    

  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
        <p className="text_normal whitespace-no-wrap capitalize">
            <button className='btn_outline_primary rounded-full'  onClick={()=>setOpcion(!opcion)}>
                <AiOutlineMore size={25} />
            </button>
            <div className={`${opcion ? 'flex' : 'hidden'} bg-white border  flex-col absolute `}>
                <span className='p-3 hover:bg-gray-100 cursor-pointer' onClick={()=>{updateEstado( 'ASISTIDO',data?.cita?.id   );setOpcion(false)} }>ASISTIDO</span>
                <span className='p-3 hover:bg-gray-100 cursor-pointer' onClick={()=> {updateEstado( 'NO ASISTIDO',data?.cita?.id );setOpcion(false)}}>NO ASISTIDO</span>
            </div>
        </p>
    </td>
  )
}

export default Dropdown