import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { CitaContext } from '../context/CitaContext'
import BoxCitaReciente from './BoxCitaReciente'

const DetalleCitaAgregada = ({refresh}) => {

    const {citasAgregadas, getfiltroFechaEspecialista} = useContext(CitaContext)

/******************* F E C H A **************** */

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    useEffect(() => {
      setTimeout(() => {
        getfiltroFechaEspecialista( localStorage.getItem('especialista'), new Date( hoy.setDate(hoy.getDate()-1)).toLocaleDateString('fr-CA'))  
      }, 1000);
      
        
      
    }, [refresh]);

  return (
    <div className='' style={{maxHeight: '580px', minHeight: '300px', overflowY: 'auto'}}>

        {citasAgregadas.map(c=>(
            <BoxCitaReciente  data={c}/>
        ))}

    </div>
  )
}

export default DetalleCitaAgregada