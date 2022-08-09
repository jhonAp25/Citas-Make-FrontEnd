import React,{ useState} from 'react'

import axios from 'axios';
import toast from "react-hot-toast";
import { Security } from './Security';
import {url} from '../util/Constante'


let EspecialidadContext = React.createContext();
let {Provider, Consumer} = EspecialidadContext;

const EspecialidadProvider = ({children}) => {
    
    /********* STATES ************ */
   
    const [evento , setEvento] =useState([])
    const [especialidad , setEspecialidad] =useState([])


    
/************************* P O S T *******************************/ 

    const postEspecialidad= (descripcion)=>{   
        Security.post(url +'especialidad', {
            descripcion: descripcion,
        }).then((response)=>{
        
          toast.success('Nueva Especialidad  Creada! ✔'); 
       
          getEspecialidad()
         
         
        }).catch((error)=>{
          console.log(error);       
        })
      }


      const putEspecialidad= (id, descripcion)=>{   
        Security.put(url +'especialidad', {
            id : id,
            descripcion: descripcion,
        }).then((response)=>{
        
          toast.success('Especialidad  Actuallizada! ✔'); 
          
          getEspecialidad()
         
         
        }).catch((error)=>{
          console.log(error);       
        })
      }

    /********************** G E T -- E S P E C I A L I D A D    ********************************* */

    
      const getEspecialidad=  ()=>{   
        Security.get(url +'especialidad').then(({data})=>{       
 
         setEspecialidad(data)
      
        }).catch((error)=>{
        
          console.log(error.response);
          
         
          
        })
      }



   





    return(
        <Provider value={{especialidad, evento, setEvento, postEspecialidad ,putEspecialidad , getEspecialidad}}>
        {children}
    </Provider>
    )
}



export  {EspecialidadProvider, Consumer as EspecialidadConsumer ,EspecialidadContext};