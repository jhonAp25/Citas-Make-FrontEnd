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
    const [asistenciaHoy , setAsistenciaHoy] =useState([])





    /********************** G E T -- A S I S T E N C I A  ********************************* */

      const getAsistencia=(estado, especialidad, fecha)=>{   
        let paramEstado= estado!= '' ? 'estado=' + estado : ''
        let paramFecha= fecha!= '' ? 'fecha=' + fecha :''
        let paramEspecialidad=  especialidad!= '' ? 'idEspecialista=' + especialidad  : ''

        Security.get( url+'asistencia/fitro-x-custom?'+ paramEstado +'&' + paramEspecialidad +'&' + paramFecha).then(({data})=>{
          setAsistencia(data);
        }).catch((error)=>{
        
          console.log('ASIS ' ,error.response);
          
        })
      }



      const getAsistenciaEstudiante =  (id)=>{   
        Security.get(url +'asistencia/fitro-estudiante/' + id).then(({data})=>{       
          
          setAsistenciaEstudiante(data)
        
       }).catch((error)=>{
       
         console.log(error.response);
       })
      
     }

     const getAsistenciaxEspecialistaxHoy =  ()=>{   
      Security.get(url +'asistencia/fitro-x-especialista/' + localStorage.getItem("especialista")).then(({data})=>{       
        
        setAsistenciaHoy(data)
      
     }).catch((error)=>{
     
       console.log(error.response);
     })
    
   }

   const postAsistenciaEstado =  (estado, idCita)=>{   
      Security.put(url +'asistencia/update-estado/' + estado+'/' +idCita ).then(({data})=>{       
        
        toast.success('Registro asistencia correctamente')
        getAsistenciaxEspecialistaxHoy()
    }).catch((error)=>{
    
      console.log(error.response);
    })
    
    }

    const getPDFAsistencia=(estado, especialidad, fecha)=>{   
      let paramEstado= estado!= '' ? 'estado=' + estado : ''
      let paramFecha= fecha!= '' ? 'fecha=' + fecha :''
      let paramEspecialidad=  especialidad!= '' ? 'idEspecialista=' + especialidad  : ''

      Security.get( url+'asistencia/report/pdf?'+ paramEstado +'&' + paramEspecialidad +'&' + paramFecha).then(({data})=>{
        
        window.open(url+'asistencia/report/pdf?'+ paramEstado +'&' + paramEspecialidad +'&' + paramFecha)
      }).catch((error)=>{
      
     
      })
    }






    return(
        <Provider value={{asistencia,asistenciaEstudiante ,asistenciaHoy, getAsistencia, getAsistenciaEstudiante , getAsistenciaxEspecialistaxHoy, postAsistenciaEstado, getPDFAsistencia}}>
        {children}
    </Provider>
    )
}



export  {AsistenciaProvider, Consumer as AsistenciaConsumer ,AsistenciaContext};