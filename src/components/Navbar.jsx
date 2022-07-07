import React, { useContext } from 'react'
import logo from  '../Img/logoGYM.png'
import { AiOutlineDashboard,AiOutlineTeam ,AiOutlinePartition, AiOutlineException } from "react-icons/ai";
import { IoTrophyOutline } from "react-icons/io5";
import {FiSlack} from "react-icons/fi";
import {GiGymBag} from  "react-icons/gi";
import { NavLink} from 'react-router-dom';
import { useEffect } from 'react';
import { LoginContext } from '../context/LoginContext';
const Navbar = () => {
    let {getUser, nameUser, rol} = useContext(LoginContext) 



    useEffect(() => {
       
        getUser()

    }, []);


    return (
        <div className='h-screen w-1/5'  >
            <div className='w-full p-5 flex flex-col justify-center items-center' style={{height: '28%'}}>
                <img src={logo} alt='logoGymForte' style={{width: 'auto',height: '81px'}} className='mt-3' />
                <span className='text_normal mt-4 uppercase'> { nameUser} - {rol}</span>
            </div>

  
            <hr className='w-full mb-4' />
           
            <div className='' style={{height: '50%'}}>

            {rol === "ESTUDIANTE"
            ?
            <ul className='h-full w-full flex   flex-col '>
                                                                                                
            <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold " className='flex font-semibold text_normal  cursor-pointer nav_item mt-4 ' to="/inicio" exact>
                <div className='flex py-4'>
                    <AiOutlineDashboard  size={25} className='mx-5 '   /> <p  >Dashboard </p> 
                </div>
               
            </NavLink>

            

            <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold  "className='flex font-semibold text_normal  cursor-pointer nav_item mt-4 ' to="/cita-estudiante"  >
                <div className='flex py-4'>
                <AiOutlineException size={25}  className='mx-5 ' />  <p   > Citas</p> 
                </div>
            </NavLink>

            

            

        </ul>
        : rol === "ESPECIALISTA" 
        ?
        <ul className='h-full w-full flex  flex-col '>
                                                                                                
        <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold " className='flex font-semibold text_normal  cursor-pointer nav_item mt-4 ' to="/inicio" exact>
            <div className='flex py-4'>
                <AiOutlineDashboard  size={25} className='mx-5 '   /> <p  >Dashboard </p> 
            </div>
           
        </NavLink>

        <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold " className='flex font-semibold text_normal  cursor-pointer nav_item mt-4 '  to="/estudiante-especialista" exact >
            <div className='flex py-4'>
                <AiOutlineTeam  size={25}  className='mx-5 '  />  <p   >Estudiantes </p> 
            </div>
        </NavLink>

        <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold  "className='flex font-semibold text_normal  cursor-pointer nav_item mt-4 ' to="/cita-especialista"  >
            <div className='flex py-4'>
            <AiOutlineException size={25}  className='mx-5 ' />  <p   > Citas</p> 
            </div>
        </NavLink>

        
        
        <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold  "className='flex font-semibold text_normal  cursor-pointer nav_item mt-4 '  to="/trainer" > 
            <div className='flex py-4'>
                <IoTrophyOutline size={25}  className='mx-5 '/> <p   > Especialista </p>
            </div>
        </NavLink>

        <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold "className='flex font-semibold text_normal  cursor-pointer nav_item  mt-4'  to="/disciplina" >
            <div className='flex py-4'>
                <FiSlack size={25}  className='mx-5 '/> <p   >Disciplina </p> 
            </div>
        </NavLink>

    </ul> 
    : rol === "ADMIN" ? 
      <ul className='h-full w-full flex  flex-col '>
                                                                                                
      <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold " className='flex font-semibold text_normal  cursor-pointer nav_item  mt-4' to="/inicio" exact>
          <div className='flex py-4'>
              <AiOutlineDashboard  size={25} className='mx-5 '   /> <p  >Dashboard </p> 
          </div>
         
      </NavLink>

      <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold " className='flex font-semibold text_normal  cursor-pointer nav_item  mt-4'  to="/estudiante-admin" exact >
          <div className='flex py-4'>
              <AiOutlineTeam  size={25}  className='mx-5 '  />  <p   >Estudiantes </p> 
          </div>
      </NavLink>

      <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold  "className='flex font-semibold text_normal  cursor-pointer nav_item mt-4 ' to="/cita-admin"  >
          <div className='flex py-4'>
          <AiOutlineException size={25}  className='mx-5 ' />  <p   > Citas</p> 
          </div>
      </NavLink>

      <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold  "className='flex font-semibold text_normal  cursor-pointer nav_item mt-4' to="/plan_pago"  >
          <div className='flex py-4'>
          <GiGymBag size={25}  className='mx-5 ' /> <p   > Especialidad </p> 
          </div>
      </NavLink>
      
      <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold  "className='flex font-semibold text_normal  cursor-pointer nav_item mt-4 '  to="/trainer" > 
          <div className='flex py-4'>
              <IoTrophyOutline size={25}  className='mx-5 '/> <p   > Especialista </p>
          </div>
      </NavLink>

      <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold "className='flex font-semibold text_normal  cursor-pointer nav_item  mt-4'  to="/disciplina" >
          <div className='flex py-4'>
              <FiSlack size={25}  className='mx-5 '/> <p   >Disciplina </p> 
          </div>
      </NavLink>

        </ul> :
        <ul className='h-full w-full flex  flex-col '>

        </ul>    
            }
                                                                                                                                    
            </div>
      
 
        </div>
    )
}

export default Navbar
