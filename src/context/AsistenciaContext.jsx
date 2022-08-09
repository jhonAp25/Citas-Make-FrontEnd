import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import {url} from '../util/Constante'
import { Security } from './Security';


let AsistenciaContext = React.createContext();
let {Provider, Consumer} = AsistenciaContext;


const AsistenciaProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ asistencia , setAsistencia] = useState([])
    const [asistenciaEstudiante , setAsistenciaEstudiante] =useState([])



    
/************************* P O S T *******************************/ 

   

    /********************** G E T -- S A L O N  ********************************* */

      const getAsistencia= async ()=>{   
        Security.get(url +'asistencia').then(({data})=>{
          setAsistencia(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }



      const getAsistenciaEstudiante =  (id)=>{   
        Security.get(url +'asistencia/fitro-estudiante/' + id).then(({data})=>{       
          
          setAsistenciaEstudiante(data)
          
     
       }).catch((error)=>{
       
         console.log(error.response);
       })
      
     }

     


   





    return(
        <Provider value={{asistencia,asistenciaEstudiante , getAsistencia, getAsistenciaEstudiante}}>
        {children}
    </Provider>
    )
}



export  {AsistenciaProvider, Consumer as AsistenciaConsumer ,AsistenciaContext};