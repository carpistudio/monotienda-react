import React from 'react';
import { Link } from 'react-router-dom';
import { EmojiFrown } from 'react-bootstrap-icons';

function EmptyCart() {
  return (
    <>
        <div className="emptyCart">
            <EmojiFrown/>
            <h4>Tu carrito está vacío.</h4>
            <Link to="/">Volver a la tienda</Link>
        </div>
    </>
  )
}

export default EmptyCart;