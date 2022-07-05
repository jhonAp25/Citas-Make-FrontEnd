import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import events from '../util/events';
import { Security } from './Security';


let ReservaCitaContext = React.createContext();
let {Provider, Consumer} = ReservaCitaContext;

const url = 'https://idat-gym.herokuapp.com/'

const ReservaCitaProvider = ({children}) => {
    
    /********* STATES ************ */
   
    const [evento , setEvento] =useState([])
    const [reservaCita , setReservaCita] =useState([])


    
/************************* P O S T *******************************/ 

    const postReservaCita= async (dat,idDisciplina, dateTime)=>{   
        await axios.post(url +'reservaCita/realizar', {
            cuposmax: dat.cuposMax,
            disciplina: idDisciplina,
            salon: dat.salon,
            trainer: dat.trainer,
            horaFin: dateTime.fechaFin,
            horaIni: dateTime.fechaIni,

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
        <Provider value={{reservaCita, evento, setEvento, postReservaCita  , getFiltroReservaCita}}>
        {children}
    </Provider>
    )
}



export  {ReservaCitaProvider, Consumer as ReservaCitaConsumer ,ReservaCitaContext};