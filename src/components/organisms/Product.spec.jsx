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
        image: "http://example.com/image1.png",
        name: "Oso patriarcal",
        description: "Un oso machista y opresor",
        price: "15990"
    }

    it('muestra producto correctamente', ()=>{
        render(<Product {...mockProduct}/>)
        expect(screen.getByText("Oso patriarcal")).toBeInTheDocument()
        expect(screen.getByText("Un oso machista y opresor")).toBeInTheDocument()
        expect(screen.getByText("15990")).toBeInTheDocument()
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