import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import {Security} from "./Security"


let EstudianteContext = React.createContext();
let {Provider, Consumer} = EstudianteContext;

const url = 'https://citas-make.herokuapp.com/'

const EstudianteProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ estudiante , setEstudiante] = useState([])
    const [estudiantePendiente , setEstudiantePendiente] = useState([])



    
/************************* P O S T *******************************/ 

    const postEstudiante= async (dat, imgUrl)=>{   
        await Security.post(url +'estudiante', {
        
          apellido: dat.apellido,
          dni: dat.dni,
          fecnac: dat.fecnac,
          foto: imgUrl,
          telefono: dat.celular,
          nombre: dat.nombre, 
          correo: dat.correo,
          carrera:{id : dat.carrera.split("-")[1]} 
        }).then((response)=>{
        
          toast.success('Estudiante nuevo Creado! ✔'); 
          getEstudiante()
         console.log(response);
         
         
        }).catch((error)=>{
          
          toast.error(error); 
          console.log(error);
          
        })
      }


      
      const putEstudiante=  (dat, dataEstudiante)=>{   
        Security.put(url +'estudiante/update', {
             altura: dat.altura,
             descripcion: dat.descripcion,
             disciplinas: dataEstudiante.disciplinas.id,
             foto: dataEstudiante.foto,
             genero: dataEstudiante.genero,
             id: dataEstudiante.id,
             peso: dat.peso,
             telefono: dat.telefono
               
        }).then((response)=>{
          console.log(response);
          getEstudiante()
          toast.success('Estudiante Actualizado! ✔'); 
        }).catch((error)=>{
          toast.error('Estudiante Actualizado! ✔'); 
          console.log(error.response.data);
          
        })
      }


      const actualizarCliente = async(data)=>{ await axios.put(url + 'cliente/update' , data
    
      ).then((response)=> console.log('EXITO al actualizar')
      ).catch(error=> console.log(error) )}
  

    /********************** G E T -- T R A I N E R   ********************************* */

      const getEstudiante= async ()=>{   
        await Security.get(url +'estudiante').then(({data})=>{
          setEstudiante(data);
          console.log(data)
        }).catch((error)=>{
        
          console.log(error);
          
        })
      }

      const getEstudiantePendiente= async ()=>{   
        await Security.get(url +'estudiante/estudiante-pendiente').then(({data})=>{
          setEstudiantePendiente(data);
          console.log(data)
        }).catch((error)=>{
        
          console.log(error);
          
        })
      }

      const getEstudianteBusqueda= async (dato)=>{   
        await Security.get(url +'estudiante/filtroNombre?datos='+ dato).then(({data})=>{
          setEstudiante(data);
          console.log(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

   





    return(
        <Provider value={{estudiante, getEstudiante,getEstudianteBusqueda , estudiantePendiente,getEstudiantePendiente,postEstudiante, putEstudiante}}>
        {children}
    </Provider>
    )
}



export  {EstudianteProvider, Consumer as EstudianteConsumer ,EstudianteContext};