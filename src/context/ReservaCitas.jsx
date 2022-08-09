import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { Security } from './Security';
import {url} from '../util/Constante'


let ReservaCitaContext = React.createContext();
let {Provider, Consumer} = ReservaCitaContext;


const ReservaCitaProvider = ({children}) => {
    
    /********* STATES ************ */
   
    const [evento , setEvento] =useState([])
    const [reservaCita , setReservaCita] =useState([])
    

    
/************************* P O S T *******************************/ 

    const postReservaCita=  (idCita)=>{   
        Security.post(url +'reservaCita', {
          cita: { id: idCita  },
          descripcion: "deea",
          estudiante  : { id: localStorage.getItem("estudiante") }
      

        }).then((response)=>{
        
          toast.success('Nueva reservaCita  Creada! ✔'); 
       
         console.log(response);
         
         
        }).catch((error)=>{
          console.log(error);       
        })
      }


    /********************** G E T -- R E S E R V A  ********************************* */

    
      const getFiltroReservaCita =  (id)=>{   
         Security.get(url +'reservaCita/fitroReserva/' + id).then(({data})=>{       
           
            setReservaCita(data)
           
      
        }).catch((error)=>{
        
          console.log(error.response);
        })
       
      }

 


   





    return(
        <Provider value={{reservaCita, evento ,setEvento, postReservaCita  , getFiltroReservaCita}}>
        {children}
    </Provider>
    )
}



export  {ReservaCitaProvider, Consumer as ReservaCitaConsumer ,ReservaCitaContext};