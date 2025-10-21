import React from 'react'
import Catalogo from '../organisms/Catalogo'
import Registro from "./Registro";
import Promociones from '../organisms/Promociones'
import Header from '../organisms/Header'
import Hero from '../organisms/Hero'
import Footer from '../organisms/Footer'
import Nosotros from '../organisms/Nosotros'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Promociones />
      <Catalogo />
      <Registro />
      <Nosotros /> 
      <Footer />
    </>
  )
}