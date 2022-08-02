import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import {url} from '../util/Constante'
import { Security } from './Security';


let EspecialistaContext = React.createContext();
let {Provider, Consumer} = EspecialistaContext;


const EspecialistaProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ especialista , setEspecialista] = useState([])
    const [idEspecialista , setIdEspecialista] = useState([ ])



    
/************************* P O S T *******************************/ 

  /*  const postClase= async (dat,idDisciplina, dateTime)=>{   
        await axios.post(url +'clase/realizar', {
            cuposmax: dat.cuposMax,
            disciplina: idDisciplina,
            especialista: dat.especialista,
            trainer: dat.trainer,
            horaFin: dateTime.fechaFin,
            horaIni: dateTime.fechaIni,

        }).then((response)=>{
        
          toast.success('Nueva Clase  Creada! ✔'); 
       
         console.log(response);
         
         
        }).catch((error)=>{
          console.log(error);       
        })
      }
*/

    /********************** G E T --  E S P E C I A L I S T A  ********************************* */

      const getEspecialista=  ()=>{   
         Security.get(url +'especialista').then(({data})=>{
          setEspecialista(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

      const getFiltroIdEspecialista=  (dni)=>{   
        Security.get(url +'especialista/filtro/'+ dni).then(({data})=>{
          setIdEspecialista(data.id)
          localStorage.setItem("especialista", data.id)
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }


     


   





    return(
        <Provider value={{especialista, getEspecialista,idEspecialista, getFiltroIdEspecialista}}>
        {children}
    </Provider>
    )
}



export  {EspecialistaProvider, Consumer as EspecialistaConsumer ,EspecialistaContext};