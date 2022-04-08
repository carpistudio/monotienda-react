import React from "react";
import { Whatsapp } from 'react-bootstrap-icons';
import ItemCount from "./ItemCount";

const Item = ({ prod }) => {
  return (
    <>  
      <div className="producto">
        <div className="producto__img">
            <img src={prod.imagen} alt={prod.titulo} />
        </div>
        <h4 className="producto__titulo">{prod.titulo.toUpperCase()}</h4>
        <h4 className="producto__precio">$<span>{prod.precio}</span></h4>
        <ItemCount initial={1} stock={prod.stock}/>
        <div className="producto__whatsapp">
            <Whatsapp/>
            <p>CONSULTAR POR WHATSAPP</p>
        </div>
      </div>
    </>
  );
};

export default Item;