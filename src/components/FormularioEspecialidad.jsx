import React, { useEffect } from 'react'
import { useState } from 'react'

const FormularioEspecialidad = ({postEspecialidad ,putEspecialidad, data, setData}) => {

    const [descripcion , setDescripcion]=useState('')
    const [error , setError]=useState('')
   

    const ChangeDescripcion=(e)=>{
        let valor = e.target.value
        setDescripcion(valor)
        setError('')
    }
  
    const Registro=()=>{
        console.log(descripcion)
        if(descripcion === '' || descripcion === undefined ){
            setError('Ingrese Nombre')
        }else{
            data?.id != null? putEspecialidad(data?.id, descripcion) :  postEspecialidad(descripcion)
        }
        
        
        
        setDescripcion('')
        setData([])
    }
    useEffect(() => {
        setDescripcion(data?.descripcion)
        console.log(data)
    }, [data]);



  return (
    
    <div className='  text_subtitulo font-semibold ' style={{ width: '100%' }}>
        <div className='bg-white'>

        
            <div className='text-center p-3  text-lg font-normal bg_primary '>
                {data?.id != null?
                    <p>Actualizar - Especialidad</p>:
                    <p>Nueva - Especialidad</p>
                }
                
                
                        
            </div>

            <div className={`w-full p-5 grid grid-cols-2 grid-rows-2   gap-x-4 gap-y-6`}>

                <div className=' col-span-2 flex flex-col justify-around'>
                    <input className='p-2 mt-1 inputText ' value={data?.id} placeholder='id' type="hidden"   />
                    <label className='text_normal font-semibold text-xs '>NOMBRE</label>
                    <input className='p-2 mt-1 inputText ' value={ descripcion} placeholder='new especialidad  ' type="text" onChange={(e)=>ChangeDescripcion(e)}    />
                   
                    <p className={` ${error ? "" : "hidden" } text-left text-xs font-normal m-0 text-red-600`}>{error}</p>
                  
                </div>
                
                <div className='w-full grid col-span-2  ' style={{marginTop: '20px' , height: '71%'}}>
                   
                    <button type='submit' className='col-span-2  btn_primary' onClick={()=> Registro()} >Confirmar Registro</button>

                </div>
            </div>

        </div>            
    </div>
  )
}

export default FormularioEspecialidad