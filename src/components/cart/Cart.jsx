import React, { useContext } from 'react';
import { Context } from '../Context';
import Item from '../productos/Item';

const Cart = () => {

    const { cart } = useContext(Context);

    return (
        <>
            {cart.map((prod) => (
          <Item key={prod.sku} prod={prod} />
        ))}
        </>
    );
}
 
export default Cart;