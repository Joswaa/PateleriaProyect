import { fireEvent, render, screen } from "@testing-library/react"
import Product from "./Product"
import React from "react"


beforeEach(()=>{
    Storage.prototype.getItem = jest.fn(()=>
        JSON.stringify([])
    )
    Storage.prototype.setItem = jest.fn()
    console.log(JSON.parse(JSON.stringify([])))
})

describe('Product component', ()=>{
    const mockProduct = {
        code: "1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsT3Jkn-ftLZapdkjBdTGoZRSmI6TyQUubA&s",
        name: "Chocotorta cuadrada de chocolate",
        description: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
        price: "$45.000"
    }

    it('muestra producto correctamente', ()=>{
        render(<Product {...mockProduct}/>)
        expect(screen.getByText("Chocotorta cuadrada de chocolate")).toBeInTheDocument()
        expect(screen.getByText("Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.")).toBeInTheDocument()
        expect(screen.getByText("$45.000")).toBeInTheDocument()
    })

    it('se guarda en localStorage al hacer clic en guardar',()=>{
        render(<Product {...mockProduct}/>)
        const button = screen.getByText("Añadir al carro")

        fireEvent.click(button)
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'products', JSON.stringify([mockProduct])
        )
    })
})