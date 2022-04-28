import React from "react";
import Categoria from "./Categoria";

const CategoriasList = ({ cats }) => {
  return (    
    <div className="col-md-3 hero__categorias">
        <div className="listadoCategoriasPadre">
            <ul className="hero__categorias__menu" id="listadoCategorias">
                <li className="titulo">CATEGORÍAS</li>
                {cats.length > 0 ? cats.map((cat) => (<Categoria key={cat.key} cat={cat} />)) : <li className="catCargando">Cargando...</li>}
            </ul>
        </div>
    </div>
  );
};

export default CategoriasList;