import React from 'react'

const BoxCitaReciente = ({data}) => {
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}

  return (
    <div className="w-full p-3 flex justify-between border_box mb-3">
        <span className="text_normal font-light tracking-wider capitalize ">{new Date(data?.fecha+'T00:00:00').toLocaleDateString("es-ES", options)  }</span>
        <span className="text_normal font-bold ">{data?.horaInicio.split(":")[0]+":"+ data?.horaInicio.split(":")[1]} - {parseInt(data?.horaInicio.split(":")[0]) + 1 + ':00 PM'} </span>
    </div>
  )
}

export default BoxCitaReciente