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



    
/************************* P O S T *******************************/ 

   

    /********************** G E T -- S A L O N  ********************************* */

      const getAsistencia= async ()=>{   
        Security.get(url +'asistencia').then(({data})=>{
          setAsistencia(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

     


   





    return(
        <Provider value={{asistencia, getAsistencia}}>
        {children}
    </Provider>
    )
}



export  {AsistenciaProvider, Consumer as AsistenciaConsumer ,AsistenciaContext};