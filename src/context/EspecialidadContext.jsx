import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import events from '../util/events';
import { Security } from './Security';


let EspecialidadContext = React.createContext();
let {Provider, Consumer} = EspecialidadContext;

const url = 'https://citas-make.herokuapp.com/'

const EspecialidadProvider = ({children}) => {
    
    /********* STATES ************ */
   
    const [evento , setEvento] =useState([])
    const [especialidad , setEspecialidad] =useState([])


    
/************************* P O S T *******************************/ 

    const postEspecialidad= async (dat,idDisciplina, dateTime)=>{   
        await Security.post(url +'Especialidad/realizar', {
            cuposmax: dat.cuposMax,
            disciplina: idDisciplina,
            salon: dat.salon,
            trainer: dat.trainer,
            horaFin: dateTime.fechaFin,
            horaIni: dateTime.fechaIni,

        }).then((response)=>{
        
          toast.success('Nueva Especialidad  Creada! ✔'); 
       
         console.log(response);
         
         
        }).catch((error)=>{
          console.log(error);       
        })
      }


    /********************** G E T -- E S P E C I A L I D A D    ********************************* */

    
      const getEspecialidad=  (id)=>{   
        Security.get(url +'especialidad').then(({data})=>{       
 
         setEspecialidad(data)
      
        }).catch((error)=>{
        
          console.log(error.response);
          
         
          
        })
      }



   





    return(
        <Provider value={{especialidad, evento, setEvento, postEspecialidad  , getEspecialidad}}>
        {children}
    </Provider>
    )
}



export  {EspecialidadProvider, Consumer as EspecialidadConsumer ,EspecialidadContext};