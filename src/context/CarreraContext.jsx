import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import events from '../util/events';
import { Security } from './Security';


let CarreraContext = React.createContext();
let {Provider, Consumer} = CarreraContext;

const url = 'https://citas-make.herokuapp.com/'

const CarreraProvider = ({children}) => {
    
    /********* STATES ************ */
   
    const [evento , setEvento] =useState([])
    const [carrera , setCarrera] =useState([])


    
/************************* P O S T *******************************/ 

    const postCarrera= async (dat,idDisciplina, dateTime)=>{   
        await Security.post(url +'carrera', {
            cuposmax: dat.cuposMax,
            disciplina: idDisciplina,
            salon: dat.salon,
            trainer: dat.trainer,
            horaFin: dateTime.fechaFin,
            horaIni: dateTime.fechaIni,

        }).then((response)=>{
        
          toast.success('Nueva Carrera  Creada! ✔'); 
       
         console.log(response);
         
         
        }).catch((error)=>{
          console.log(error);       
        })
      }


    /********************** G E T -- T R A I N E R   ********************************* */

    
      const getCarrera=  ()=>{   
         Security.get(url +'carrera' ).then(({data})=>{       
 
         setCarrera(data)
      
        }).catch((error)=>{
        
          console.log(error.response);
          
         
          
        })
      }



     



    return(
        <Provider value={{carrera, evento, setEvento, postCarrera  , getCarrera}}>
        {children}
    </Provider>
    )
}



export  {CarreraProvider, Consumer as CarreraConsumer ,CarreraContext};