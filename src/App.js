import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ItemListContainer from "./components/productos/ItemListContainer";
import "./components/css/style.css";

export default function App() {
  return (
    <>
        <Header/>
        <Hero/>
        <ItemListContainer/>
    </>
  );
}