import React,{ useState} from 'react'

import axios from 'axios';
import toast from "react-hot-toast";
import {Security} from "./Security"
import {url} from '../util/Constante'


let EstudianteContext = React.createContext();
let {Provider, Consumer} = EstudianteContext;


const EstudianteProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ estudiante , setEstudiante] = useState([])
    const [estudiantePendiente , setEstudiantePendiente] = useState([])
    const [idEstudiante, setIdEstudiante] = useState()




/************************* P O S T *******************************/ 

    const postEstudiante=  (dat, imgUrl)=>{   
         Security.post(url +'estudiante', {
        
          apellido: dat.apellido,
          dni: dat.dni,
          fecnac: dat.fecnac,
          foto: imgUrl,
          telefono: dat.celular,
          nombre: dat.nombre, 
          correo: dat.correo,
          carrera:{id : dat.carrera} 
        }).then((response)=>{
        
          toast.success('Estudiante nuevo Creado! ✔'); 
          getEstudiante()
         console.log(response);
         
         
        }).catch((error)=>{
          
          toast.error(error); 
          console.log(error);
          
        })
      }


      
      const putEstudiante=  (dat, imgUrl)=>{   
        Security.put(url +'estudiante', {
          id: dat.id,
          apellido: dat.apellido,
          dni: dat.dni,
          fecnac: dat.fecnac,
          foto: imgUrl,
          telefono: dat.celular,
          nombre: dat.nombre, 
          correo: dat.correo,
          carrera:{id : dat.carrera} 
               
        }).then((response)=>{
         
          getEstudiante()
          toast.success('Estudiante Actualizado! ✔'); 
        }).catch((error)=>{
          toast.error('Error Actualizado! ✔'); 
          console.log(error.response.data);
          
        })
      }


      const actualizarCliente = async(data)=>{ await axios.put(url + 'cliente/update' , data
    
      ).then((response)=> console.log('EXITO al actualizar')
      ).catch(error=> console.log(error) )}
  

    /********************** G E T -- T R A I N E R   ********************************* */

      const getEstudiante=  ()=>{   
         Security.get(url +'estudiante').then(({data})=>{
          setEstudiante(data);
          console.log(data)
        }).catch((error)=>{
        
          console.log(error);
          
        })
      }

      const getEstudiantePendiente=  ()=>{   
         Security.get(url +'estudiante/estudiante-pendiente').then(({data})=>{
          setEstudiantePendiente(data);
          console.log(data)
        }).catch((error)=>{
        
          console.log(error);
          
        })
      }

      const getEstudianteBusqueda=(dato)=>{   
        Security.get(url +'estudiante/filtroNombre?datos='+ dato).then(({data})=>{
          setEstudiante(data);
          console.log(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

      const getFiltroIdEstudiante=  (dni)=>{   
        Security.get(url +'estudiante/filtro/'+ dni).then(({data})=>{
          setIdEstudiante(data.id)
          localStorage.setItem("estudiante", data.id)
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

   





    return(
        <Provider value={{estudiante, getEstudiante,getEstudianteBusqueda , estudiantePendiente,getEstudiantePendiente,postEstudiante, putEstudiante , getFiltroIdEstudiante}}>
        {children}
    </Provider>
    )
}



export  {EstudianteProvider, Consumer as EstudianteConsumer ,EstudianteContext};