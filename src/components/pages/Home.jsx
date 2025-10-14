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
      <Product
                code="3" 
                image="https://buildabear.cl/cdn/shop/files/27633_9e54d773-09e0-4297-8bea-1433c320dce2.jpg"
                name="Mousse de Chocolate"
                description="Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate."
                price="$5.000"/>                
      <Product
                code="4" 
                image="https://buildabear.cl/cdn/shop/files/27633_9e54d773-09e0-4297-8bea-1433c320dce2.jpg"
                name="Torta Sin Azúcar de Naranja"
                description="Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables."
                price="$48.000"/>
      <Product
                code="5" 
                image="https://buildabear.cl/cdn/shop/files/27633_9e54d773-09e0-4297-8bea-1433c320dce2.jpg"
                name="Brownie Sin Gluten"
                description="Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor."
                price="$4.000"/>                      
      <Product
                code="6" 
                image="https://buildabear.cl/cdn/shop/files/27633_9e54d773-09e0-4297-8bea-1433c320dce2.jpg"
                name="Torta Vegana de Chocolate"
                description="Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos."
                price="$50.000"/>                      
         
    </div>
  )
}
