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

  const postEspecialista=(data)=>{   
         Security.post(url +'especialista', {
          apellido: data.apellido ,
          correo: data.correo,
          dni : data.dni,
          especialidad: { id: data.especialidad
          },
          fecnac : data.fecnac,
          nombre: data.nombre,
          telefono: data.celular

        }).then((response)=>{
        
          toast.success('Nuevo Especialista  Creada! ✔'); 

        getEspecialista()
        console.log(response);
         
         
        }).catch((error)=>{
          console.log(error);       
        })
      }


      const putEspecialista=(data)=>{   
        Security.put(url +'especialista', {
         id: data.id,
         apellido: data.apellido ,
         correo: data.correo,
         dni : data.dni,
         especialidad: { id: data.especialidad
         },
         fecnac : data.fecnac,
         nombre: data.nombre,
         telefono: data.celular

       }).then((response)=>{
       
         toast.success('Especialista  Actualizado! ✔'); 

       getEspecialista()
       console.log(response);
        
        
       }).catch((error)=>{
         console.log(error);       
       })
     }


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
        <Provider value={{especialista, getEspecialista,idEspecialista, getFiltroIdEspecialista, postEspecialista, putEspecialista}}>
        {children}
    </Provider>
    )
}



export  {EspecialistaProvider, Consumer as EspecialistaConsumer ,EspecialistaContext};