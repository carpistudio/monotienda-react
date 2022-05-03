import React from "react";
import { NavLink } from "react-router-dom";

const Categoria = ({ cat }) => {
  return (
    <>  
      <li className="cat"><NavLink activeclassname="active" to={`/categoria/${cat.id}`}>{cat.titulo}</NavLink></li>
    </>
  );
};

export default Categoria;