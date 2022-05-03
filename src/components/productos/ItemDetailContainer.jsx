import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import CategoriasListContainer from "../categorias/CategoriasListContainer";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {

      const db = getFirestore();
      const prodRef = doc(db, "productos", id);
      getDoc(prodRef).then((res) => {
          setProducto({id: res.id, ...res.data()});
      });

  }, [id])

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
