import React from 'react'
import Product from '../organisms/Product'

describe('Home component', () => {

    it('muestra el catalogo', ()=>{
        render(<Home/>)
        expect(screen.getByText("Chocotorta cuadrada de chocolate")).toBeInTheDocument()
        expect(screen.getByText("Torta Circular de Vainilla")).toBeInTheDocument()
    })

})