import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";


let EstudianteContext = React.createContext();
let {Provider, Consumer} = EstudianteContext;

const url = 'https://citas-make.herokuapp.com/'

const EstudianteProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ estudiante , setEstudiante] = useState([])


    
/************************* P O S T *******************************/ 

    const postEstudiante= async (dat, imgUrl)=>{   
        await axios.post(url +'estudiante', {
          altura: dat.altura,
          apellido: dat.apellido,
          descripcion: dat.descripcion,
          dni: dat.dni,
          fechaNac: dat.fechaNac,
          foto: imgUrl,
          genero: dat.genero,
          nombre: dat.nombre,
          peso: dat.peso,
          telefono: dat.telefono,
          disciplinas:{id : dat.disciplina} 
        }).then((response)=>{
        
          toast.success('Estudiante nuevo Creado! ✔'); 
          getEstudiante()
         console.log(response);
         
         
        }).catch((error)=>{
          
        
          console.log(error);
          
        })
      }


      
      const putEstudiante=  (dat, dataEstudiante)=>{   
         axios.put(url +'estudiante/update', {
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
        await axios.get(url +'estudiante').then(({data})=>{
          setEstudiante(data);
          console.log(data)
        }).catch((error)=>{
        
          console.log(error);
          
        })
      }

      const getEstudianteBusqueda= async (dato)=>{   
        await axios.get(url +'estudiante/buscar?dato='+ dato).then(({data})=>{
          setEstudiante(data);
          console.log(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

   





    return(
        <Provider value={{estudiante, getEstudiante,getEstudianteBusqueda , postEstudiante, putEstudiante}}>
        {children}
    </Provider>
    )
}



export  {EstudianteProvider, Consumer as EstudianteConsumer ,EstudianteContext};