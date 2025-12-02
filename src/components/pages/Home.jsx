import React from 'react'
import Catalogo from '../organisms/Catalogo'
import Registro from "./Registro";
import Promociones from '../organisms/Promociones'
import Hero from '../organisms/Hero'
import Nosotros from '../organisms/Nosotros'

export default function Home() {
  return (
    <>
      <Hero />
      <Promociones />
      <Catalogo />
      <Registro />
      <Nosotros /> 
    </>
  )
}