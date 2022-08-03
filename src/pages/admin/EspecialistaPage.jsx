import React, { useContext, useEffect, useState } from 'react'
import CardEspecialista from '../../components/CardEspecialista';
import {FiSearch} from 'react-icons/fi'
import { EspecialistaContext } from '../../context/EspecialistaContext';
import FormularioEspecialista from '../../components/FormularioEspecialista';

const EspecialistaPage = () => {

    let { especialista, getEspecialista} = useContext(EspecialistaContext);

    const [hidden , setHidden] = useState(false)

    const openModal =()=>  setHidden(!hidden)


    useEffect(() => {
        getEspecialista()
    }, []);
  return (
    <div className='flex  w-full flex-col  px-20 pt-10  h-full  bg-gray-100' >

        
            
        <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>especialista</h2>
        
        <div className='w-full flex mt-10 mb-5'>
                <div className='w-full  rounded-full border flex items-center bg-white focus:ring-2   border border-gray-400  'style={{width: '40%'}}  >
                    <input type="text"   name="" className='w-full p-2 rounded-full  focus:outline-none'  />  <FiSearch size={20} color='#011826' className='mr-3' /> 
                </div>
                <button className='btn_primary px-5 ml-4' onClick={()=>openModal()}> Agregar </button>
                <FormularioEspecialista hidden={hidden} openModal={openModal}   />
        </div>

        <div className='w-full  p-2 grid grid-cols-3 gap-10 overflow-y-auto' style={{maxHeight: '34rem'}} >

{especialista.map(t=>(
    <CardEspecialista data={t}  />
))}


</div>

</div>
  )
}

export default EspecialistaPage