import React from "react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {

  return (
    <>  
      <div className="producto">
        <div className="producto__img">
            <img src={prod.imagen} alt={prod.titulo} />
        </div>
        <h4 className="producto__titulo">{prod.titulo.toUpperCase()}</h4>
        <h4 className="producto__precio">$<span>{prod.precio}</span></h4>
        <Link className="producto__ver" to={`/producto/${prod.sku}`}>VER PRODUCTO</Link>
      </div>
    </>
  );
};

export default Item;