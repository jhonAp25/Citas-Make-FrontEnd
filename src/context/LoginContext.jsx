import React,{useContext , useEffect, useState} from 'react'

import axios from 'axios';
import toast from "react-hot-toast";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';



let LoginContext = React.createContext();
let {Provider, Consumer} = LoginContext;

const url = 'https://citas-make.herokuapp.com/auth/'

const LoginProvider = ({children}) => {
    
    //********* */ STATES ************

    const [error , setError]=useState("")
    let [authToken , setAuthToken] =useState(()=>localStorage.getItem('token') )
    let [user , setUser] =useState(()=>localStorage.getItem('token') ?  jwt_decode(localStorage.getItem('token')) : null  )
    const [nameUser, setNameUser] = useState("")
    const [rol , setRol] =useState("")

    const history = useHistory()
    
    //************* */ URL ************
  


    const signIn= async (data)=>{   
        await axios.post(url +'log-in', {
          password: data.contrasena,
          username: data.usuario
      }).then(({data})=>{
           console.log(data)
           setAuthToken(data.token)
           setUser(jwt_decode(data.token))
           localStorage.setItem("token" , data.token)
           history.push('/inicio')
        

        }).catch((error)=>{
        
          console.log(error);
          toast.error("Intente de nuevo"); 
          
        })
      }


      const getUser= async ()=>{   
        await axios.get(url +'find-user/'+ user?.sub)
        .then(({data})=>{
           console.log(data)
           setNameUser(data.names) 
           setRol(data.roles[0].name)   

        }).catch((error)=>{
        
          console.log(error);
          toast.error("No existe User"); 
          
        })
      }



      const LogoutUser=()=>{
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem("token" )
        history.push('/login')
      }

    const RefreshToken=async()=>{
        console.log("Resfreshing");
        await axios.post(url +'refresh', {
            token: localStorage.getItem('token')
          
        }).then(({data})=>{
             console.log(data)
             setAuthToken(data.token)
             setUser(jwt_decode(data.token))
             localStorage.setItem("token" , data.token)
            
          
  
          }).catch((error)=>{
        
            console.log(error);
           LogoutUser()
            
          })
    }


   useEffect(()=>{

    let interval = setInterval(()=>{
        if(authToken){
            RefreshToken()
        }
    },30000)
    return ()=> clearInterval(interval)

}, authToken)


    return(
        <Provider value={{signIn  ,error ,setError , user ,rol, getUser, nameUser}}>
        {children}
    </Provider>
    )
}



export  {LoginProvider, Consumer as LoginConsumer , LoginContext};  