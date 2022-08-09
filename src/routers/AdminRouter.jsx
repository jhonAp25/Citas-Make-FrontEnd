import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import CitaAdminPage from '../pages/admin/CitaAdminPage'
import EstudiantePage from '../pages/EstudiantePage'
import DashboardAdmin from '../pages/DashboardAdmin';
import { LoginContext } from '../context/LoginContext'
import CitaEspecialistaPage from '../pages/especialista/CitaEspecialistaPage'
import CitaEstudiantePage from '../pages/estudiante/CitaEstudiantePage'
import EspecialistaPage from '../pages/admin/EspecialistaPage'
import AsistenciaPage from '../pages/admin/AsistenciaPage'
import EspecialidadPage from '../pages/admin/EspecialidadPage'
import MisCitasPage from '../pages/estudiante/MisCitasPage'


const AdminRouter = () => {


    let {getUser,  rol} = useContext(LoginContext) 


    useEffect(() => {
       
        getUser()

    }, []);
 
  return (
    <Routes>

    <Route path='/' element={<Login/>} />
   
   {rol === "ADMIN" ?
    <Route path='/admin' element={<Navbar/>} >
      <Route path="dashboard"  element={<DashboardAdmin />} />
      <Route path="estudiante-admin" element={<EstudiantePage/>} />
      <Route path="cita-admin" element={<CitaAdminPage />} />
      <Route path="especialista-admin" element={<EspecialistaPage />} />
      <Route path="asistencia-admin" element={<AsistenciaPage />} />
      <Route path="especialidad-admin" element={<EspecialidadPage />} />
    </Route>
  :rol === "ESPECIALISTA" ?

    <Route path='/especialista' element={<Navbar/>} >
      <Route path="dashboard"  element={<DashboardAdmin />} />
      <Route path="estudiante-especialista" element={<EstudiantePage/>} />
      <Route path="cita-especialista" element={<CitaEspecialistaPage />} />
    </Route>
    :rol === "ESTUDIANTE" ?

    <Route path='/estudiante' element={<Navbar/>} >
      <Route path="dashboard"  element={<DashboardAdmin />} />
      <Route path="cita-estudiante" element={<MisCitasPage/>} />
      <Route path="reserva-cita-estudiante" element={<CitaEstudiantePage  />} />
    </Route>
    :
    <Route path='*' element={<h1>404</h1>} ></Route>
   }
   
  
    

  
  </Routes>
  )
}

export default AdminRouter