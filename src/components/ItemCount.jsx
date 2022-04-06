import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({initial, stock}) => {

      const [counter, setCounter] = useState(initial);

      const Incremento = () =>{
            if (counter < stock){
                setCounter (counter + 1)
            }
          };
      const Decremento = () => {
            if (counter > initial){
                setCounter (counter - 1)
            }
          }
      const Reset = () => {
            setCounter(1);
          }
  return (
    <>
    <div className="counter">
          <button className='btn btn-success' onClick={Decremento}>-</button>
          <p>{counter}</p>
          <button className='btn btn-success' onClick={Incremento}>+</button>
          <button className='btn btn-danger' onClick={Reset}>Reset</button>
    </div>
    </>
  )
}

export default ItemCount;