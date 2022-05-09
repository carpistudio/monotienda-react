import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CategoriasListContainer from "../categorias/CategoriasListContainer";
import { collection, getDocs, getFirestore, query, where, doc } from 'firebase/firestore';

const ItemListContainer = () => {

  const { categoria } = useParams();

  // Trae las categorías de FireStore
  const [productos, setProductos] = useState([]);
  useEffect(() => {
      const db = getFirestore();

      const categoryDocRef = doc(db, "categorias/" + categoria);

      let productosRef = collection(db, 'productos');
      if (categoria) productosRef = query(productosRef, where("categoria", "==", categoryDocRef));
      
      getDocs(productosRef).then((res) => {
          setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()})));
      });
        
  }, [categoria]);


  return (
    <>
      <div className="container-fluid bg_light min-height-100">
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
