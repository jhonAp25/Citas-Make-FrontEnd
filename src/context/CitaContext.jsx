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
    const [citaDisponible, setCitaDisponible] = useState([])
    const [citaTop, setCitaTop] = useState([])

    let fecha = localStorage.getItem("fecha")
    let idEspcialidad = localStorage.getItem("espc")


    
/************************* P O S T *******************************/ 

    const postReservaCita = async (data)=>{   
        await Security.post(url +'reservaCita', {
          cita: {id: data.cita },
          descripcion: data.descripcion,
          estudiante:  {id: data.estudiante }  
        }).then((response)=>{

          getBusquedaCita(fecha , idEspcialidad)
          toast.success('Cita reservada ✔'); 

        }).catch((error)=> console.log(error))
      }


    

    /********************** G E T -- C I T A  ********************************* */

      const getCita= async ()=>{   
        await Security.get(url +'cita').then((data)=>{
            setCita(data.data);

           
         


            console.log(data);

        }).catch((error)=>{
          setCita([])
          console.log(error.response);
          
        })
      }


      const getBusquedaCita= async (fecha, id)=>{   
        await Security.get(url +'cita/'+ fecha +'/'+id).then((data)=>{
          
          if(data.data.length === 0 ){
            setCita([])
            toast.error("No hay citas")
          }else{
             setCita(data.data)
            
          }
         
        }).catch((error)=>{
          toast.error('Seleccione el servicio')
          console.log(error.response);
          
        })
      }

      const getCitaDisponible= async (fecha , id)=>{   
        await Security.get(url +'cita/cita-disponible/'+ fecha +'/'+id).then((data)=>{

          setCitaDisponible(data.data)
         
        }).catch((error)=>{
         
          console.log(error.response);
          
        })
      }

      const getCitaOrder= async (idEspc)=>{   
        await Security.get(url +'cita/top/'+ idEspc).then((data)=>{

          setCitaTop(data.data)
         
        }).catch((error)=>{
         
          console.log(error.response);
          
        })
      }

   




    useEffect(() => {
    
    
    
    }, [ ])


    return(
        <Provider value={{getCita, cita, postReservaCita, getBusquedaCita,citaDisponible , getCitaDisponible, citaTop, getCitaOrder}}>
        {children}
    </Provider>
    )
}



export  {CitaProvider, Consumer as CitaConsumer ,CitaContext};