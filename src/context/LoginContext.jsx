import React,{useEffect, useState} from 'react'

import axios from 'axios';
import toast from "react-hot-toast";
import jwt_decode from "jwt-decode";
import {  useNavigate} from 'react-router-dom';
import {url} from '../util/Constante'
import { useContext } from 'react';
import { EspecialistaContext } from './EspecialistaContext';
import { EstudianteContext } from './EstudianteContext';



let LoginContext = React.createContext();
let {Provider, Consumer} = LoginContext;


const LoginProvider = ({children}) => {

  /*********************** C O N T E X T *********************** */
  const {getFiltroIdEspecialista} =useContext(EspecialistaContext)
  const {getFiltroIdEstudiante} = useContext(EstudianteContext)

    
    //*********************** S T A T E S ************/

    const [error , setError]=useState("")
    let [authToken , setAuthToken] = useState(()=>localStorage.getItem('token') )
    let [user , setUser] =useState(()=>localStorage.getItem('token') ?  jwt_decode(localStorage.getItem('token')) : null  )
    const [nameUser, setNameUser] = useState("")
    const [rol , setRol] =useState("")

   
    const navigate = useNavigate()
    
    //************* */ URL ************
  


    const signIn=  (data)=>{   
         axios.post(url +'auth/log-in', {
          password: data.contrasena,
          username: data.usuario
      }).then(({data})=>{

       
          setAuthToken(data.token)
          setUser(jwt_decode(data.token))
          localStorage.setItem("token" , data.token)
          localStorage.setItem("user", jwt_decode(data.token).sub)
          let rol_user = jwt_decode(data.token).rol[0].authority
          localStorage.setItem("rol", rol_user)
           
           getUser(jwt_decode(data.token))
           rol_user === 'ROLE_ADMIN' ? navigate('/admin/dashboard') : rol_user === 'ROLE_ESTUDIANTE' ? navigate('/estudiante/dashboard') : navigate('/especialista/dashboard')

        }).catch((error)=>{
        
          console.log(error);
          toast.error("Intente de nuevo"); 
          
        })
      }


      const getUser=()=>{   
         axios.get(url +'auth/find-user/'+ localStorage.getItem("user"))
        .then(({data})=>{
           console.log(data)
           setNameUser(data.names) 
           setRol(data.roles[0].name)   
           if(data.roles[0].name==="ESPECIALISTA"){

            getFiltroIdEspecialista(data.surnames)
           }else if(data.roles[0].name==="ESTUDIANTE"){
            getFiltroIdEstudiante(data.surnames)
           }
           
           
           
        }).catch((error)=>{
        
          console.log(error);
          toast.error("No existe User");
          navigate('/')
          localStorage.removeItem("token" )

          
        })
      }



      const LogoutUser=()=>{
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem("token" )
        localStorage.removeItem("rol" )
        navigate('/')
      }

    const RefreshToken=()=>{
        
         axios.post(url +'auth/refresh', {
            token: authToken       
        }).then(({data})=>{
            console.log("REFRESHING...")
            setAuthToken(data.token)
            setUser(jwt_decode(data.token))
            localStorage.setItem("token" , data.token)
            
          
  
          }).catch((error)=>{
           
            alert(error);
            LogoutUser()
           
            
          })
    }


   useEffect(()=>{

    let interval = setInterval(()=>{
        if(authToken){
            RefreshToken()
        }
    },3000)
    
    return ()=> clearInterval(interval)

}, [authToken])


    return(
        <Provider value={{signIn  ,error ,setError , user ,rol, getUser, nameUser, LogoutUser}}>
        {children}
        </Provider>
    )
}



export  {LoginProvider, Consumer as LoginConsumer , LoginContext};  