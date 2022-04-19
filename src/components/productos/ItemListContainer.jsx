import React, { useState, useEffect } from "react";
import { FetchProductos } from "./Productos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CategoriasListContainer from "../categorias/CategoriasListContainer";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
      
    FetchProductos(categoria)
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err));

  }, [categoria]);


  return (
    <>
      <div className="container-fluid bg_light">
        <div className="container">
            <div className="row">
                {categoria && (
                  <CategoriasListContainer />
                )}
                <ItemList prods={productos} />
            </div>
        </div>
      </div>  
    </>
  );
};

export default ItemListContainer;
