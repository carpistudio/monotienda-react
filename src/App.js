import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ItemListContainer from "./components/productos/ItemListContainer";
import ItemDetailContainer from "./components/productos/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import CartWidget from "./components/cart/CartWidget";
import "./components/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./components/Context";
import Checkout from "./components/cart/Checkout";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Header/>
          <CartWidget/>
          <Routes>
            <Route exact path="/" element={<><Hero/><ItemListContainer/></>}/>
            <Route exact path="/producto/:id" element={<ItemDetailContainer/>}></Route>
            <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/checkout" element={<Checkout/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}