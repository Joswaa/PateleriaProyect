import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Home from "./Home"

describe('Home component', () => {

    it('muestra el catalogo', ()=>{
        render(<Home/>)
        expect(screen.getByText("Oso de peluche patriarcal")).toBeInTheDocument()
        expect(screen.getByText("Oso grizzli")).toBeInTheDocument()
    })

})