import React from 'react'
import Product from '../organisms/Product'
import { render, screen } from '@testing-library/react'
import Home from './Home' 


describe('Home component', () => {

    it('muestra el catalogo', ()=>{
        render(<Home/>)
        expect(screen.getByText("Chocotorta cuadrada de chocolate")).toBeInTheDocument()
        expect(screen.getByText("Torta Circular de Vainilla")).toBeInTheDocument()
        expect(screen.getByText("Mousse de Chocolate")).toBeInTheDocument()
        expect(screen.getByText("Torta Sin Azúcar de Naranja")).toBeInTheDocument()
        expect(screen.getByText("Brownie Sin Gluten")).toBeInTheDocument()
        expect(screen.getByText("Torta Vegana de Chocolate")).toBeInTheDocument()
    })

})