import React, { useState, useEffect } from "react";
import { Promesa } from "./Promesa";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
      
    Promesa
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err));

  }, []);

  return (
    <>
      <div class="container-fluid bg_light">
        <div class="container">
            <div class="row">
                <ItemList prods={productos} />
            </div>
        </div>
      </div>  
    </>
  );
};

export default ItemListContainer;
