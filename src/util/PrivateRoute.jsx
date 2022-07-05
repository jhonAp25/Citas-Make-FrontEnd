import React, { useContext } from 'react'
import {  Redirect, Route, useHistory } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';


function PrivateRoute({ children, ...rest  }) {
    let {user} = useContext(LoginContext) 
    let history = useHistory()
    let ruta = history.location.pathname

    var privada =  <Route {...rest}>{!user ? <Redirect to="/login" /> :   children}</Route>

/*
    const rutasExist = ["/inicio","/estudiante","/cita"]

    rutasExist.map(r=>{
        console.log(ruta + r);
        if(ruta !== r){
          
              privada =  <Route {...rest}>{!user ? <Redirect to="/login" /> :   children}</Route>
              
          }else{
             privada =  <Redirect to="/noFound" />
          }
  
        }
       
       
    )*/

    
    return  privada
    
  
    
  }
  
  export default PrivateRoute