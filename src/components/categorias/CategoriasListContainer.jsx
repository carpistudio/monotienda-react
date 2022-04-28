import React, { useState, useEffect } from "react";
import CategoriasList from "./CategoriasList";
import { collection, getDocs, getFirestore, query, orderBy } from 'firebase/firestore';

const CategoriasListContainer = () => {
  
  // Trae las categorías de FireStore
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
      const db = getFirestore();
      const categoriasRef = query((collection(db, 'categorias')), orderBy("titulo", "asc"));
      
      getDocs(categoriasRef).then((res) => {
          setCategorias(res.docs.map(cat => ({id: cat.id, ...cat.data()})));
      });
        
  }, []);

  return (
    <>
      <CategoriasList cats={categorias} />
    </>
  );
};

export default CategoriasListContainer;
