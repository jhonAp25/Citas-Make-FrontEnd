import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { CitaContext } from '../context/CitaContext'
import BoxCitaReciente from './BoxCitaReciente'

const DetalleCitaAgregada = () => {

    const {citasAgregadas, getfiltroFechaEspecialista} = useContext(CitaContext)

/******************* F E C H A **************** */

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    useEffect(() => {
       getfiltroFechaEspecialista( localStorage.getItem('especialista'), new Date( hoy.setDate(hoy.getDate()-1)).toLocaleDateString('fr-CA'))
        
      
    }, []);

  return (
    <div className='bg-white'>

        {citasAgregadas.map(c=>(
            <BoxCitaReciente  data={c}/>
        ))}
ss

    </div>
  )
}

export default DetalleCitaAgregada