import React,{useContext,useEffect, useState } from 'react'

import {FiSearch} from "react-icons/fi";
import { EstudianteContext } from '../context/EstudianteContext';
import CardEstudiante from '../components/CardEstudiante';
import FormularioEstudiante from '../components/FormularioEstudiante';


const EstudiantePage = () => {

    let { getEstudiante , estudiante, postEstudiante, getEstudianteBusqueda} = useContext(EstudianteContext);


    const [hidden , setHidden] = useState(false)
    const [hiddenUpdat , setHiddenUpdat] = useState(false)
    const [dataEstudiante, setDateEstudiante]=useState([])

    const openModal =()=>  setHidden(!hidden)
    
    const openModalUpdat =(data)=> {
        setHiddenUpdat(!hiddenUpdat);
        console.log(data);
        setDateEstudiante(data)
    }



    const filtroestudiante=(e)=>{
        getEstudianteBusqueda(e.target.value)
    }




    useEffect(() => {
        getEstudiante()
    }, []);



    return (
        <div className='flex  w-full flex-col  px-20 pt-10  h-full  bg-gray-100' >
            
        <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>estudiante</h2>
        
       <FormularioEstudiante hidden={hidden} openModal={openModal}   />
       {/** <Updateestudiante hiddenUpdat={hiddenUpdat} dataestudiante={dataestudiante} openModalUpdat={openModalUpdat}/> */}
     

       

        <div className='w-full flex mt-10 mb-5'>
                <div className='w-full  rounded-full border flex items-center bg-white focus:ring-2   border border-gray-400  'style={{width: '40%'}}  >
                    <input type="text" onChange={(e)=>filtroestudiante(e) }  name="" className='w-full p-2 rounded-full  focus:outline-none'  />  <FiSearch size={20} color='#011826' className='mr-3' /> 
                </div>
                <button className='btn_primary px-5 ml-4' onClick={()=>openModal()} > Agregar </button>
        </div>

                        
         <div className='w-full  p-2 grid grid-cols-4 gap-10 overflow-y-auto' style={{maxHeight: '34rem'}} >

            {estudiante.map(t=>(
                <CardEstudiante data={t} openModalUpdat={openModalUpdat} />
            ))}
           
            
        </div>

            
        </div>
    )
}

export default EstudiantePage
