import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ prod }) => {
     
  const [number, setNumber] = useState(0);

  function onAdd (counter) {
    setNumber (counter);
  }

  return (    
    <div className="col-md-9 offset-md-3 single">
        <div className="row">
          <div className="col-md-4">
            <div className="single__imagen">
              <img src={prod.imagen} alt={prod.titulo}/>
            </div>
          </div>
          <div className="col-md-8 single__izq">
            <h4 className="single__titulo">{prod.titulo}</h4>
            <h4 className="single__precio">$<span>{prod.precio}</span></h4>
            <div className="counter-container">
              {  number === 0 ? <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} /> : <Link to="/cart" className="agregar">Ir al carrito</Link> }
            </div>
          </div>
        </div>
    </div>
  );
};

export default ItemDetail;