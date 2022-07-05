import React, { useContext } from 'react'
import {  Redirect, Route } from 'react-router-dom';



function DefaultRoute({ children, ...rest  }) {
  
   // user ? children : <Redirect to="/login" />;
    return (
        <Route {...rest}>{true ? <Redirect to="/noFound" /> :   children}</Route>
    ) 
  }
  
  export default DefaultRoute