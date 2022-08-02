import React from 'react'

const EspecialistaRouter = () => {
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

export default EspecialistaRouter