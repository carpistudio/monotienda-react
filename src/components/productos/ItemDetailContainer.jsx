import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import CategoriasListContainer from "../categorias/CategoriasListContainer";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Jelly } from '@uiball/loaders';

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
      <div className="container-fluid bg_light  min-height-100">
        <div className="container">
            <div className="row">
              {
                producto.id ? 
                <>
                  <CategoriasListContainer/>
                  <ItemDetail prod={producto} />
                </>
                : <Jelly color="#fd571b" />
              }
            </div>
        </div>
      </div>  
    </>
  );
};

export default ItemDetailContainer;
