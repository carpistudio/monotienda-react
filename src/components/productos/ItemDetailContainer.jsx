import React, { useState, useEffect } from "react";
import { FetchProducto } from "./Productos";
import ItemDetail from "./ItemDetail";
import CategoriasListContainer from "../categorias/CategoriasListContainer";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { sku } = useParams();

  useEffect(() => {
      
    FetchProducto(sku)
        .then((resp) => setProducto(resp))
        .catch((err) => console.log(err));

  }, [sku]);

  return (
    <>
      <div className="container-fluid bg_light">
        <div className="container">
            <div className="row">
                <CategoriasListContainer/>
                <ItemDetail prod={producto} />
            </div>
        </div>
      </div>  
    </>
  );
};

export default ItemDetailContainer;
