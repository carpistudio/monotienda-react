import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const ItemDetail = ({ prod }) => {

  const { cantidadTotal } = useContext(Context);

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
              <ItemCount initial={1} stock={prod.stock} prod={prod} />
            </div>
            {cantidadTotal > 0 ? <div><Link to="/cart" className="agregar">Ver carrito</Link></div> : null}
          </div>
        </div>
    </div>
  );
};

export default ItemDetail;