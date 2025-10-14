import React from 'react'
import Product from '../organisms/Product'

export default function Home() {
  return (
    <div id="products">
      <Product
               code="1"
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsT3Jkn-ftLZapdkjBdTGoZRSmI6TyQUubA&s"
               name="Chocotorta cuadrada de chocolate"
               description="Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales."
               price="$45.000"/>

      <Product
                code="2" 
                image="https://buildabear.cl/cdn/shop/files/27633_9e54d773-09e0-4297-8bea-1433c320dce2.jpg"
                name="Torta Circular de Vainilla"
                description="Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión."
                price="$40.000"/>
      
         
    </div>
  )
}
