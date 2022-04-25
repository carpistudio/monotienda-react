import React from 'react'
import CartSidebar from './CartSidebar';
import CartProducts from './CartProducts';

function FullCart({cart}) {
  return (
    <>
        <div className="col-md-8">
            <CartProducts cart={cart}/>
        </div>
        <div className="col-md-4">
            <CartSidebar/>
        </div>
    </>
  )
}

export default FullCart