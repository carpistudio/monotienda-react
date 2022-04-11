import React, { useState, useEffect } from "react";
import { FetchCategorias } from "./Categorias";
import CategoriasList from "./CategoriasList";

const CategoriasListContainer = ({}) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
      
    FetchCategorias()
        .then((resp) => setCategorias(resp))
        .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <CategoriasList cats={categorias} />
    </>
  );
};

export default CategoriasListContainer;
