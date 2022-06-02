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
import { ClienteProvider } from "./context/ClienteContext";
import { PlanPagoProvider } from "./context/PlanPagoContext";
import { EstudianteProvider } from "./context/EstudianteContext";
import EstudiantePage from "./pages/EstudiantePage";




const RouteAdmin =({ component : Component , ...rest})=>{
  const token = localStorage.getItem('rol')
return <Route {...rest} > {token ==='ADMIN'  ?  <Component/> : <Redirect to="/" /> }  </Route> 
}




function App() {
  return (
    <div className="App">
      <Router>
      <LoginProvider>
<ClaseProvider>
<DisciplinaProvider>
<EstudianteProvider>
  <ClienteProvider>
<SalonProvider>
  <PlanPagoProvider>
     
      <Switch>
      <Route exact path="/" component={Login} />

      <div className='flex w-full'> 
         <Navbar/> 
         
         <Notificacion/>
         <div style={{width: '80%'}} >
            <RouteAdmin exact path="/inicio" component={DashboardAdmin} />

            <RouteAdmin exact path="/estudiante" component={EstudiantePage} />
            
          {/***
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

      </PlanPagoProvider>
      </SalonProvider>
      </ClienteProvider>
      </EstudianteProvider>
      </DisciplinaProvider>
      </ClaseProvider>
      </LoginProvider>
    </Router>

    </div>
  );
}

export default App;
