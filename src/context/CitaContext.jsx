import React,{useEffect , useState} from 'react'


import toast from "react-hot-toast";
import { Security } from './Security';
import {url} from '../util/Constante'


let CitaContext = React.createContext();
let {Provider, Consumer} = CitaContext;


const CitaProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ cita , setCita] = useState([])
    const [citaDisponible, setCitaDisponible] = useState([])
    const [citaTop, setCitaTop] = useState([])
    const [citasAgregadas , setCitasAgregadas] = useState([])

    let fecha = localStorage.getItem("fecha")
    let idEspcialidad = localStorage.getItem("especialidad")


    
/************************* P O S T *******************************/ 

    const postCita = async (fecha,horaInicio, horaFin )=>{   
      await Security.post(url +'cita', {
          especialista: {id: localStorage.getItem("especialista") },
          fecha: fecha,
          horaFin: horaFin,
          horaInicio: horaInicio, 
      }).then((response)=>{

        console.log(response)
        toast.success('Cita creada ✔'); 

      }).catch((error)=> console.log(error))
    }

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

      const getfiltroFechaEspecialista=( id, fecha)=>{   
        Security.get(url +'cita/cita-especialista-fecha/'+ id +'/'+fecha ).then(({data})=>{
          
         setCitasAgregadas(data)
         console.log(data)
        }).catch((error)=>{
          
          console.log(error.response);
          
        })
      }

      const getCitaDisponible= (fecha , id)=>{   
        Security.get(url +'cita/cita-disponible/'+ fecha +'/'+id).then((data)=>{

          setCitaDisponible(data.data)
          
        }).catch((error)=>{
         
          console.log(error.response);
          
        })
      }

      const getCitaOrder= async (idEspc)=>{   
        await Security.get(url +'cita/top/'+ idEspc).then((data)=>{

          setCitaTop(data.data)
          console.log(data.data);
        }).catch((error)=>{
         
          console.log(error.response);
          
        })
      }

   




    useEffect(() => {
    
    
    
    }, [ ])


    return(
        <Provider value={{getCita, cita, postReservaCita, getBusquedaCita,citaDisponible , getCitaDisponible, citaTop, getCitaOrder, postCita,citasAgregadas, getfiltroFechaEspecialista}}>
        {children}
    </Provider>
    )
}



export  {CitaProvider, Consumer as CitaConsumer ,CitaContext};