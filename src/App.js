import { BrowserRouter} from "react-router-dom";
import './App.css';
import './react-big-calendar.css';

import { ColaProvider } from "./context/ColaContext";
import { SalonProvider } from "./context/SalonContext";
import { LoginProvider } from "./context/LoginContext";
import { EstudianteProvider } from "./context/EstudianteContext";
import { CarreraProvider } from "./context/CarreraContext";
import { EspecialidadProvider } from "./context/EspecialidadContext";
import { CitaProvider } from "./context/CitaContext";
import { ReservaCitaProvider } from "./context/ReservaCitas";
import AdminRouter from "./routers/AdminRouter";
import React from "react";
import Notificacion from "./components/Notificacion";
import { EspecialistaProvider } from "./context/EspecialistaContext";
import { AsistenciaProvider } from "./context/AsistenciaContext";





function App() {



  return (
    <div className="App">
    <BrowserRouter>
      <Notificacion/> 
      <AsistenciaProvider>
      <EspecialistaProvider>
      <EstudianteProvider>
      <LoginProvider>
      <EspecialidadProvider>  
      <CitaProvider>
      <SalonProvider>   
      <CarreraProvider>
      <ReservaCitaProvider>
      <ColaProvider>


        <AdminRouter/>


      </ColaProvider>
      </ReservaCitaProvider>
      </CarreraProvider>
      </SalonProvider>
      </CitaProvider>
      </EspecialidadProvider>
      </LoginProvider>
      </EstudianteProvider>
      </EspecialistaProvider>
      </AsistenciaProvider>
         
        </BrowserRouter>
    

    </div>
  );
}

export default App;
