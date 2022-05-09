import React from 'react'
import { Link } from 'react-router-dom';

function CheckoutThankYouProduct({item}) {
    
  return (
      <>
        <tr className="carritoProducto">
            <td className="carritoProducto__titulo">
                <Link to={`/producto/${item.id}`}>{item.titulo}</Link>
            </td>
            <td className="carritoProducto__precio">
                {item.precio}
            </td>
            <td className="carritoProducto__cantidad">
                {item.cantidad}
            </td>
            <td className="carritoProducto__subtotal">
                {item.precio * item.cantidad}
            </td>
        </tr>
      </>
  )
}

export default CheckoutThankYouProduct