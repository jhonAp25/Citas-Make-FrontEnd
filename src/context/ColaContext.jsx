import React,{ useState} from 'react'

import axios from 'axios';
import toast from "react-hot-toast";

import { Security } from './Security';
import {url} from '../util/Constante'


let ColaContext = React.createContext();
let {Provider, Consumer} = ColaContext;

const ColaProvider = ({children}) => {
    
    /********* STATES ************ */
   
    const [evento , setEvento] =useState([])
    const [colaEspera , setColaEspera] =useState([])


    
/************************* P O S T *******************************/ 

    const postCola= ()=>{   
        Security.post(url +'cola', {
          estado: "PENDIENTE",
          estudiante: { id: localStorage.getItem('estudiante')},

        }).then((response)=>{
        
          toast.success('Nueva Cola  Creada! ✔'); 
       
         console.log(response);
         
         
        }).catch((error)=>{
          toast.error('Ya te encuentras en una Cola.. ✔');  
        })
      }


    /**********************  G E T -- C O L A  ********************************* */

    
      const getColaEspera=  ()=>{   
         Security.get(url +'cola/espera').then(({data})=>{       
          
         setColaEspera(data)
      
        }).catch((error)=>{
        
          console.log(error.response);
          
         
          
        })
      }



   





    return(
        <Provider value={{colaEspera, evento, setEvento, postCola  , getColaEspera}}>
        {children}
    </Provider>
    )
}



export  {ColaProvider, Consumer as ColaConsumer ,ColaContext};