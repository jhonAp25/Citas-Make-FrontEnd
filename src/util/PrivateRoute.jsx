import React, { useContext } from 'react'
import {  Navigate, Redirect, Route, useHistory } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';


function PrivateRoute({ children, ...rest  }) {
    let {user} = useContext(LoginContext) 
  
    var privada =  <Route {...rest}>{!user ? <Navigate to="/login" /> :   children}</Route>


    
    return  privada
    
  
    
  }
  
  export default PrivateRoute