import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Trash3Fill } from 'react-bootstrap-icons';
import { Context } from '../Context'

function CartProduct({prod}) {

    const { removeFromCart } = useContext(Context);
    
  return (
      <>
        <tr className="carritoProducto">
            <td className="carritoProducto__img">
                <img src={prod.imagen} alt={prod.titulo}/>
            </td>
            <td className="carritoProducto__titulo">
                <Link to={`/producto/${prod.sku}`}>{prod.titulo}</Link>
            </td>
            <td className="carritoProducto__precio">
                {prod.precio}
            </td>
            <td className="carritoProducto__cantidad">
                {prod.cantidad}
            </td>
            <td className="carritoProducto__subtotal">
                {prod.precio * prod.cantidad}
            </td>
            <td className="carritoProducto__eliminar">
                <Trash3Fill title="Eliminar" onClick={() => removeFromCart(prod)} />
            </td>
        </tr>
      </>
  )
}

export default CartProduct