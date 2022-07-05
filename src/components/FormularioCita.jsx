import React from 'react'

const FormularioCita = () => {
  return (
    <div  >
      <div className='bg-gray-300' style={{maxHeight : 'fit-content'}}>
          <div className='bg_primary p-3' >
            <span className='text-lg' >Formulario Citas</span> 
          </div>

          <div className='mt-4 p-3 grid grid-cols-1 gap-3'>

            <div className=' col-span-1 flex flex-col justify-around'>
              <span className='text_normal font-semibold text-xs '>Estudiante Disponible</span>
              <input className='p-2 mt-1 inputText ' placeholder='Nombre estudiante' type="text"   />
              <p className={`  "hidden"  text-left text-xs font-normal m-0 text-red-600`}></p>

            </div>

            <div className=' col-span-1 flex flex-col justify-around'>
              <span className='text_normal font-semibold text-xs '>Horario</span>
              <input className='p-2 mt-1 inputText ' placeholder='00:00' type="text"   />
              <p className={`  "hidden"  text-left text-xs font-normal m-0 text-red-600`}></p>

            </div>

            <div className=' col-span-1 flex flex-col justify-around'>
              <span className='text_normal font-semibold text-xs '>Descripcion</span>
              <textarea className='p-2 mt-1 inputText ' placeholder='Lorem ipsum' type="text"   />
              <p className={`  "hidden"  text-left text-xs font-normal m-0 text-red-600`}></p>

            </div>
          </div>

          <div className='w-full p-3 grid  grid-cols-1 gap-2'>
            <button type='submit' className='  btn_primary p-2' >Confirmar Cita</button>
            
          </div>
      </div>

    </div>
  )
}

export default FormularioCita