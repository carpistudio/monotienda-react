import React, { useState, useContext } from "react";
import { Context } from "../Context";

 const ItemCount = ({ initial, stock, prod }) => {
    
        const { cart, addToCart } = useContext(Context);

        const [counter, setCounter] = useState(initial);
    
        const Increase = () => {
            // Solo deja aumentar el counter si
            //a. El producto no está en el carrito y el counter sea menor al stock
            //b. El producto está en el carrito y el counter sea menor al stock menos esa cantidad del carrito
            if ((!prodInCart && counter < stock) || (prodInCart && counter < stock - prodInCart.cantidad)) {
                setCounter(counter + 1)
            }
        };
    
        const Decrease = () => {
            if (counter > initial) {
                setCounter(counter - 1)
            }
        }
    
        const handleClick = () => {
            addToCart({...prod, cantidad: counter});
            setCounter(1);
        }

        const prodInCart = cart.find((cartprod) => cartprod.sku === prod.sku);

  return (
    <>
    <div className="counter">
        <button className="counter__button counter__decrease" onClick={Decrease}>-</button>
        <div className="counter__counter">{counter}</div>
        <button className="counter__button counter__increase" onClick={Increase}>+</button>
    </div>
    {
        prodInCart && prodInCart.cantidad + counter - 1 >= prod.stock ?
        <div className="agregar sinStock">NO HAY STOCK</div> :
        <div className="agregar" onClick={(handleClick)}>AGREGAR AL CARRITO</div>
    }
    </>
  );
}
export default ItemCount;