import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}