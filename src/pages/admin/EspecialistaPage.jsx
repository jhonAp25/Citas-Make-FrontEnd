import React, { useContext, useEffect } from 'react'
import CardEspecialista from '../../components/CardEspecialista';
import CardEstudiante from '../../components/CardEstudiante';
import { EspecialistaContext } from '../../context/EspecialistaContext';

const EspecialistaPage = () => {

    let { especialista, getEspecialista} = useContext(EspecialistaContext);


    useEffect(() => {
        getEspecialista()
    }, []);
  return (
    <div className='flex  w-full flex-col  px-20 pt-10  h-full  bg-gray-100' >
            
        <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>especialista</h2>
        

        <div className='w-full  p-2 grid grid-cols-3 gap-10 overflow-y-auto' style={{maxHeight: '34rem'}} >

{especialista.map(t=>(
    <CardEspecialista data={t}  />
))}


</div>

</div>
  )
}

export default EspecialistaPage