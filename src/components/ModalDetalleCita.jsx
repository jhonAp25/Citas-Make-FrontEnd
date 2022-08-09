import React, { useContext } from 'react'
import { useEffect } from 'react'
import { ReservaCitaContext } from '../context/ReservaCitas'

const ModalDetalleCita = ({hidden, openModal, idCita}) => {

    const {getFiltroReservaCita, reservaCita} =useContext(ReservaCitaContext)


    useEffect(() => {
        getFiltroReservaCita(idCita)
    }, [idCita])
    
  return (
    <div className='modal flex justify-center items-center' style={{ display: hidden ? ' ' : 'none' }}>
        <div className=' bg-white font-semibold ' style={{ width: '35%' }}>

            <div className='text_normal font-normal text-sm p-5'>

                <div className='flex items-center'>
                    <span className='uppercase mr-2 tracking-wider text-sm'>Estudiante </span>
                    <hr className='bg-primary w-full' />
                </div>

                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic text-xs'>Nombres y apellidos: </span>
                    <span className='font-bold'> {reservaCita?.estudiante?.nombre}, {reservaCita?.estudiante?.apellido} </span>
                </div>

                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic  text-xs'>Telefono: </span>
                    <span className='font-bold'> {reservaCita?.estudiante?.telefono} </span>
                </div>

                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic  text-xs'>Correo: </span>
                    <span className='font-bold'> {reservaCita?.estudiante?.correo} </span>
                </div>

                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic  text-xs'>Carrera: </span>
                    <span className='font-bold'> {reservaCita?.estudiante?.carrera?.descripcion} </span>
                </div>

                <div className='flex items-center mt-3'>
                    <span className='uppercase mr-2 tracking-wider  text-sm'>Especialista </span>
                    <hr className='bg-primary w-full' />
                </div>

                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic  text-xs'>Nombres y apellidos: </span>
                    <span className='font-bold'> {reservaCita?.cita?.especialista?.nombre}, {reservaCita?.cita?.especialista?.apellido} </span>
                </div>

                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic  text-xs'>Celular: </span>
                    <span className='font-bold'> {reservaCita?.cita?.especialista?.telefono}</span>
                </div>

                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic  text-xs'>Especialidad: </span>
                    <span className='font-bold'> {reservaCita?.cita?.especialista?.especialidad?.descripcion}</span>
                </div>

                <div className='flex items-center mt-3'>
                    <span className='uppercase mr-2 tracking-wider  text-sm'>CITA </span>
                    <hr className='bg-primary w-full' />
                </div>

                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic  text-xs'>fecha: </span>
                    <span className='font-bold'> {reservaCita?.cita?.fecha}</span>
                </div>
                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic  text-xs'>Hora Inicio: </span>
                    <span className='font-bold'> {reservaCita?.cita?.horaInicio}</span>
                </div>
                <div className='flex items-center'>
                    <span className='uppercase mr-2 italic  text-xs'>Hora Fin: </span>
                    <span className='font-bold'> {reservaCita?.cita?.horaFin}</span>
                </div>
                
            </div>

            <div className='w-full p-5 grid  grid-cols-5 gap-2'>
                <button className='col-span-5    text-center font-normal cursor-pointer btn_secondary p-2' onClick={(e) =>openModal(e)} >Cerrar</button>
            </div>
        </div>
        
    </div>
  )
}

export default ModalDetalleCita