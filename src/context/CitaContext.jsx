import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { Security } from './Security';


let CitaContext = React.createContext();
let {Provider, Consumer} = CitaContext;

const url = 'https://citas-make.herokuapp.com/'

const CitaProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ cita , setCita] = useState([])
    const [ idCita , setIdCita]=useState(0)


    
/************************* P O S T *******************************/ 

    const postCita = async (dat)=>{   
        await Security.post(url +'cita', {
            nombre: dat.nombre,
            apellido: dat.apellido,
            celular: dat.celular,
            correo: dat.correo,
            sexo: dat.sexo ,
            dni : dat.dni,
            foto: null
          
          
        }).then((response)=>{
        
          getCita()
          alert(response.data.id)
          setIdCita(response.data.id)
          toast.success('Cita nuevo '+ response.data.nombre+' agregado ✔'); 

        }).catch((error)=> console.log(error))
      }


    

    /********************** G E T -- C I T A  ********************************* */

      const getCita= async ()=>{   
        await Security.get(url +'cita').then(({data})=>{
            setCita(data);
            console.log(data);

        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }


      const getBusquedaCita= async (fecha, id)=>{   
        await Security.get(url +'cita/'+ fecha +'/'+id).then(({data})=>{
          setCita(data);
         
        }).catch((error)=>{
          toast.error('No se encontro ningun cita')
          console.log(error.response);
          
        })
      }

   




    useEffect(() => {
    
    
    
    }, [ ])


    return(
        <Provider value={{getCita, cita,idCita, postCita, getBusquedaCita}}>
        {children}
    </Provider>
    )
}



export  {CitaProvider, Consumer as CitaConsumer ,CitaContext};