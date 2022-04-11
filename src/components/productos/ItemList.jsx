import React from "react";
import Item from "./Item";

const ItemList = ({ prods }) => {
  return (    
    <div class="col-md-9 offset-md-3 productos" id="listadoProductos">
        {prods.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
    </div>
  );
};

export default ItemList;