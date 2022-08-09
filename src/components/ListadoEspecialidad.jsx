import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'

const ListadoEspecialidad = ({especialidad, setData}) => {
  return (
    <div >
        {especialidad.map(e=>(
            <div className="w-full p-3 flex justify-between items-center border_box mb-3">
                <span className="text_normal font-light tracking-wider ">
                   {e.descripcion}
                </span>
                <span className='btn_icon_edit mr-3' onClick={()=>setData(e)}>
                     <AiOutlineEdit size={20} color='#365B73' />
                </span>
               
            </div>
        ))}
        
    </div>
  )
}

export default ListadoEspecialidad