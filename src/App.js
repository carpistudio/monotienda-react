import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ItemListContainer from "./components/productos/ItemListContainer";
import ItemDetailContainer from "./components/productos/ItemDetailContainer";
import "./components/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<><Hero/><ItemListContainer/></>}/>
          <Route exact path="/producto/:sku" element={<ItemDetailContainer/>}></Route>
          <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}