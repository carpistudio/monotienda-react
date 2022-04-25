import React, { useContext } from 'react';
import { Context } from '../Context';
import EmptyCart from './EmptyCart';
import FullCart from './FullCart';

const Cart = () => {

    const { cart } = useContext(Context);

    return (
        <>
            <div className="container carritoContainer">
                <div className="row">
                    <div className="carritoTitulo">
                        Carrito
                    </div>
                    { cart.length > 0 ? <FullCart cart={cart}/> : <EmptyCart/> }
                </div>
            </div>
        </>
    );
}
 
export default Cart;