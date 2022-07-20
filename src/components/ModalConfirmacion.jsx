import React from 'react'
import {BsCalendarDate} from 'react-icons/bs'

const ModalConfirmacion = ({ hidden, openModal }) => {
  return (
    <div className='modal flex flex-col justify-center items-center' style={{ display: hidden ? ' ' : 'none' }}>
         <div className=' bg-white text_subtitulo  ' style={{ width: '30%' }}>
            <div className='p-2 text_normal text-center'>
                Seguro que desea <strong>CONFIRMAR</strong>  esta cita ? 
            </div>

            <div className='flex justify-center items-center my-5'>
                <BsCalendarDate size={40} color='#365B73' />
            </div>

            <div className='w-full p-2 grid  grid-cols-5 gap-2'>
                <button type='submit' className='col-span-3  btn_primary p-2' >Si Confirmo</button>
                <a className='col-span-2 text-center font-normal cursor-pointer btn_secondary p-2' onClick={() =>openModal()} >Aun no</a>
            </div>
         </div>

        
    </div>
  )
}

export default ModalConfirmacion