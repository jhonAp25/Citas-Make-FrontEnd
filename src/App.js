import {BrowserRouter as Router, Switch,Route , Redirect} from "react-router-dom";
import './App.css';
import './react-big-calendar.css';
import Navbar from "./components/Navbar";
import Notificacion from "./components/Notificacion";
import { DisciplinaProvider } from "./context/DisciplinaContext";
import DashboardAdmin from './pages/DashboardAdmin';

import { ClaseProvider } from "./context/ClaseContext";
import { SalonProvider } from "./context/SalonContext";
import Login from "./components/Login";
import { LoginProvider } from "./context/LoginContext";
import { PlanPagoProvider } from "./context/PlanPagoContext";
import { EstudianteProvider } from "./context/EstudianteContext";
import EstudiantePage from "./pages/EstudiantePage";
import { CarreraProvider } from "./context/CarreraContext";
import PrivateRoute from "./util/PrivateRoute";
import DefaultRoute from "./util/DefaultRoute";
import DefaultPage from "./pages/DefaultPage";
import CitaAdminPage from "./pages/admin/CitaAdminPage";
import { EspecialidadProvider } from "./context/EspecialidadContext";
import { CitaProvider } from "./context/CitaContext";
import { ReservaCitaProvider } from "./context/ReservaCitas";



/*
const RouteAdmin =({ component : Component , ...rest})=>{
  const token = localStorage.getItem('rol')
return <Route {...rest} > {token ==='ADMIN'  ?  <Component/> : <Redirect to="/" /> }  </Route> 
}

*/


function App() {
  return (
    <div className="App">
      <Router  >
      <LoginProvider>
      <EspecialidadProvider>
      <DisciplinaProvider>
      <EstudianteProvider>
      <CitaProvider>
      <SalonProvider>
      <PlanPagoProvider>
      <CarreraProvider>
      <ReservaCitaProvider>
     
      <Switch>

        <Route exact path="/login" component={Login} />
        <Route exact path="/noFound" component={DefaultPage} />
       
        <div className='flex w-full'> 
            <Navbar/> 
            
            <Notificacion/>
         <div style={{width: '80%'}} >
            <PrivateRoute exact path="/inicio" component={DashboardAdmin} />
            <PrivateRoute exact path="/estudiante" component={EstudiantePage} />
            <PrivateRoute exact path="/cita" component={CitaAdminPage} />
            
          {/***
           * 
           *  <RouteAdmin exact path="/cliente" component={ClientePage}  />
            <RouteAdmin exact path="/clase" component={ClasesPage} />
            <RouteAdmin exact path="/plan_pago" component={PlanPago}  />
            <RouteAdmin exact path="/trainer" component={TrainerPage} />
            <RouteAdmin exact path="/disciplina" component={DisciplinaPage} />
           
           * 
           */} 
         </div>
        

      </div>

      </Switch>
      </ReservaCitaProvider>
      </CarreraProvider>

      </PlanPagoProvider>
      </SalonProvider>
      </CitaProvider>
      </EstudianteProvider>
      </DisciplinaProvider>
      </EspecialidadProvider>
      </LoginProvider>
    </Router>

    </div>
  );
}

export default App;
