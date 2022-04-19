import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
     
  const [number, setNumber] = useState(0);

  function onAdd (counter) {
    setNumber (counter);
  }

  return (
    <>  
      <div className="producto">
        <div className="producto__img">
            <img src={prod.imagen} alt={prod.titulo} />
        </div>
        <h4 className="producto__titulo">{prod.titulo.toUpperCase()}</h4>
        <h4 className="producto__precio">$<span>{prod.precio}</span></h4>
        {  number === 0 ? <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} /> : <Link to="/cart" className="agregar">Ir al carrito</Link> }
        <Link className="producto__ver" to={`/producto/${prod.sku}`}>VER PRODUCTO</Link>
      </div>
    </>
  );
};

export default Item;