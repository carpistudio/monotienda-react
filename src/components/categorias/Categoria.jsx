import React from "react";
import { NavLink } from "react-router-dom";

const Categoria = ({ cat }) => {
  return (
    <>  
      <li className="cat"><NavLink activeclassname="active" to={`/categoria/${cat.titulo}`}>{cat.titulo}</NavLink></li>
    </>
  );
};

export default Categoria;