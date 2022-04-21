import React, { useState, useContext } from "react";
import { Context } from "../Context";

 const ItemCount = ({ initial, stock, prod }) => {
    
        const { addToCart } = useContext(Context);

        const [counter, setCounter] = useState(initial);
    
        const Increase = () => {
            if (counter < stock){
                setCounter(counter + 1);
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

  return (
    <>
    <div className="counter">
        <button className="counter__button counter__decrease" onClick={Decrease}>-</button>
        <div className="counter__counter">{counter}</div>
        <button className="counter__button counter__increase" onClick={Increase}>+</button>
    </div>
    <div className="agregar" onClick={(handleClick)}>AGREGAR AL CARRITO</div>
    </>
  );
}
export default ItemCount;