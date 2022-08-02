import React from 'react'

const EstudianteRouter = () => {
  return (
    <div>
      
            <Routes>
                <Route path='/' element={<PageLogin/>} />
                <Route path="/mesa" element={<PageMesa />} />
                <Route path="/mesa/:mesaId" element={<PagePlatos />} />
                <Route path='/mesa/:mesaId/:platoId' element={<PagePedido/>} />

            
            </Routes>
        
    </div>
  )
}

export default EstudianteRouter