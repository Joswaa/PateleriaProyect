import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Home from "./Home"

describe('Home component', () => {
    const mockProducts = [
        {
            code: "1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsT3Jkn-ftLZapdkjBdTGoZRSmI6TyQUubA&s",
            name: "Chocotorta cuadrada de chocolate",
            description: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
            price: "$45.000"
        },
        {
            code: "2",
            image: "http://example.com/image2.png",
            name: "Torta Circular de Vainilla",
            description: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
            price: "$40.000"
        }
    ]

    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockProducts))
    Storage.prototype.clear = jest.fn()


    it('muestra el catalogo', ()=>{
        render(<Home/>)
        expect(screen.getByText("Chocotorta cuadrada de chocolate")).toBeInTheDocument()
        expect(screen.getByText("Torta Circular de Vainilla")).toBeInTheDocument()
    })

})