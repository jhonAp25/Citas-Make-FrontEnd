import {BrowserRouter as Router, Switch,Route , Redirect} from "react-router-dom";
import './App.css';
import './react-big-calendar.css';
import Navbar from "./components/Navbar";
import Notificacion from "./components/Notificacion";
import { DisciplinaProvider } from "./context/DisciplinaContext";
import DashboardAdmin from './pages/DashboardAdmin';

import { ColaProvider } from "./context/ColaContext";
import { SalonProvider } from "./context/SalonContext";
import Login from "./components/Login";
import { LoginProvider } from "./context/LoginContext";
import { PlanPagoProvider } from "./context/PlanPagoContext";
import { EstudianteProvider } from "./context/EstudianteContext";
import EstudiantePage from "./pages/EstudiantePage";
import { CarreraProvider } from "./context/CarreraContext";
import PrivateRoute from "./util/PrivateRoute";
import DefaultPage from "./pages/DefaultPage";
import CitaAdminPage from "./pages/admin/CitaAdminPage";
import { EspecialidadProvider } from "./context/EspecialidadContext";
import { CitaProvider } from "./context/CitaContext";
import { ReservaCitaProvider } from "./context/ReservaCitas";
import CitaEstudiantePage from "./pages/estudiante/CitaEstudiantePage";





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
        <ColaProvider>
        
     
      <Switch>

        <Route exact path="/login" component={Login} />
        <Route exact path="/noFound" component={DefaultPage} />
       
        <div className='flex w-full'> 
            <Navbar/> 
            
            <Notificacion/>
         <div style={{width: '80%'}} >
            <PrivateRoute exact path="/inicio" component={DashboardAdmin} />
            <PrivateRoute exact path="/estudiante-admin" component={EstudiantePage} />
            <PrivateRoute exact path="/cita-admin" component={CitaAdminPage} />
            <PrivateRoute exact path="/cita-estudiante" component={CitaEstudiantePage} />
           

         </div>
        

      </div>

      </Switch>
      </ColaProvider>
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
