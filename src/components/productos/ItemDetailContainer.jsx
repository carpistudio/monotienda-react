import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import CategoriasListContainer from "../categorias/CategoriasListContainer";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});
  const { sku } = useParams();

  useEffect(() => {

      const db = getFirestore();
      const prodRef = doc(db, "productos", sku);
      getDoc(prodRef).then((res) => {
          setProducto({id: res.id, ...res.data()});
      });

  }, [])

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
