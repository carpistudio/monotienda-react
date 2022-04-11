import React from "react";
import { Link, NavLink } from "react-router-dom";

const Categoria = ({ cat }) => {
  return (
    <>  
      <li className="cat"><NavLink activeClassName="active" to={`/categoria/${cat.titulo}`}>{cat.titulo}</NavLink></li>
    </>
  );
};

export default Categoria;