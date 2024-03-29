import React, { useContext } from 'react'
import logo from  '../Img/logoGYM.png'
import { AiOutlineDashboard,AiOutlineTeam ,AiOutlinePartition, AiOutlineException } from "react-icons/ai";
import {IoMdLogIn} from 'react-icons/io'
import { IoTrophyOutline } from "react-icons/io5";
import {VscNotebook} from 'react-icons/vsc'
import {FiSlack} from "react-icons/fi";
import {GiGymBag} from  "react-icons/gi";
import { NavLink, Outlet} from 'react-router-dom';
import { useEffect } from 'react';
import { LoginContext } from '../context/LoginContext';
const Navbar = () => {
    let {getUser, nameUser, rol, LogoutUser} = useContext(LoginContext) 

    const Logout=()=>{
        LogoutUser()   
    }


    useEffect(() => {
       
        getUser()

    }, []);


    return (
        <div className='w-full flex'>
        <div className='h-screen w-1/5'  >
            <div className='w-full p-5 flex flex-col justify-center items-center' style={{height: '28%'}}>
                <img src={logo} alt='logoGymForte' style={{width: 'auto',height: '81px'}} className='mt-3' />
                <span className='text_normal text-xs mt-4 uppercase'> { nameUser} - {rol}</span>
            </div>

  
            <hr className='w-full mb-4' />
           
            <div className=''  style={{height: '68%'}}>

            {rol === "ESTUDIANTE"
            ?
            <ul className='h-full w-full flex relative  flex-col relative '>
                                                                                                
            <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex font-semibold text_normal  cursor-pointer nav_item  mt-4" )}  to="dashboard" exact>
                <div className='flex py-4'>
                    <AiOutlineDashboard  size={25} className='mx-5 '   /> <p  >Dashboard </p> 
                </div>
               
            </NavLink>

            

            <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex font-semibold text_normal  cursor-pointer nav_item  mt-4" )}  to="reserva-cita-estudiante"  >
                <div className='flex py-4'>
                <AiOutlineException size={25}  className='mx-5 ' />  <p   >Reservar Citas</p> 
                </div>
            </NavLink>

            <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex font-semibold text_normal  cursor-pointer nav_item  mt-4" )}  to="cita-estudiante"  >
                <div className='flex py-4'>
                <AiOutlineException size={25}  className='mx-5 ' />  <p   >Mis Citas</p> 
                </div>
            </NavLink>

            <NavLink activeClassName="nav_active  bg-blue-200  text-blue-500 font-bold "className='flex  absolute inset-x-0 bottom-0  text_normal  cursor-pointer nav_item  mt-4'  to="/" onClick={()=>Logout()} >
          <div className='flex py-4'>
              <IoMdLogIn size={25}  className='mx-5 '/> <p   > Cerrar Sesion </p> 
          </div>
      </NavLink>
            

            

        </ul>
        : rol === "ESPECIALISTA" 
        ?
        <ul className='h-full w-full flex  flex-col relative '>
                                                                                                
        <NavLink className={ ({isActive})=> (isActive ? "nav_active " : "flex font-semibold text_normal  cursor-pointer nav_item  mt-4" )}  to="dashboard" exact>
            <div className='flex py-4'>
                <AiOutlineDashboard  size={25} className='mx-5 '   /> <p  >Dashboard </p> 
            </div>
           
        </NavLink>

        <NavLink className={ ({isActive})=> (isActive ? "nav_active " : "flex font-semibold text_normal  cursor-pointer nav_item  mt-4" )}   to="estudiante-especialista" exact >
            <div className='flex py-4'>
                <AiOutlineTeam  size={25}  className='mx-5 '  />  <p   >Estudiantes </p> 
            </div>
        </NavLink>

        <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex font-semibold text_normal  cursor-pointer nav_item  mt-4" )}  to="cita-especialista"  >
            <div className='flex py-4'>
            <AiOutlineException size={25}  className='mx-5 ' />  <p   > Citas</p> 
            </div>
        </NavLink>

        <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex font-semibold text_normal  cursor-pointer nav_item  mt-4" )}  to="asistencia-especialista"  >
            <div className='flex py-4'>
            <AiOutlineException size={25}  className='mx-5 ' />  <p   > Asistencia</p> 
            </div>
        </NavLink>

        
        
        

        <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : " absolute inset-x-0 bottom-0  flex font-semibold text_normal  cursor-pointer nav_item  mt-4" )}   to="/" onClick={()=>Logout()} >
          <div className='flex py-4'>
              <IoMdLogIn size={25}  className='mx-5 '/> <p   > Cerrar Sesion </p> 
          </div>
        </NavLink>

    </ul> 
    : rol === "ADMIN" ? 
      <ul className='h-full relative w-full flex  flex-col '>
                                                                                                
        <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex  text_normal  cursor-pointer nav_item  mt-4" )}  to="dashboard" >
          <div className='flex py-4'>
              <AiOutlineDashboard  size={25} className='mx-5 '   /> <p  >Dashboard </p> 
          </div>
         
        </NavLink>

      <NavLink  className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex  text_normal  cursor-pointer nav_item  mt-4" )}   to="estudiante-admin"  >
          <div className='flex py-4'>
              <AiOutlineTeam  size={25}  className='mx-5 '  />  <p   >Estudiantes </p> 
          </div>
      </NavLink>

      <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex  text_normal  cursor-pointer nav_item  mt-4" )} to="cita-admin"  >
          <div className='flex py-4'>
          <AiOutlineException size={25}  className='mx-5 ' />  <p   > Citas</p> 
          </div>
      </NavLink>

      <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex  text_normal  cursor-pointer nav_item  mt-4" )}  to="especialidad-admin"  >
          <div className='flex py-4'>
          <GiGymBag size={25}  className='mx-5 ' /> <p   > Especialidad </p> 
          </div>
      </NavLink>
      
      <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex text_normal  cursor-pointer nav_item  mt-4" )}  to="especialista-admin" > 
          <div className='flex py-4'>
              <IoTrophyOutline size={25}  className='mx-5 '/> <p   > Especialista </p>
          </div>
      </NavLink>

      <NavLink className={ ({isActive})=> (isActive ? "nav_active font-bold " : "flex  text_normal  cursor-pointer nav_item  mt-4" )}  to="asistencia-admin" > 
          <div className='flex py-4'>
              <VscNotebook size={25}  className='mx-5 '/> <p   > Asistencia </p>
          </div>
      </NavLink>

      <NavLink activeClassName="nav_active  bg-blue-200  text-blue-500 font-bold "className='flex  absolute inset-x-0 bottom-0  text_normal  cursor-pointer nav_item  mt-4'  to="/" onClick={()=>Logout()} >
          <div className='flex py-4'>
              <IoMdLogIn size={25}  className='mx-5 '/> <p   > Cerrar Sesion </p> 
          </div>
      </NavLink>

        </ul> :
        <ul className='h-full w-full flex  flex-col '>

        </ul>    
            }
                                                                                                                                    
            </div>
      
 
        </div>

        <div className='flex w-full' >
            <Outlet/>
        </div>

        </div>
    )
}

export default Navbar
