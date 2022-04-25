import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        
        const indexProd = cart.findIndex((prod) => prod.sku === item.sku);
        if (indexProd !== -1) {
            const newCart = [...cart];
            newCart[indexProd].cantidad = newCart[indexProd].cantidad + item.cantidad;
            setCart(newCart);
        } else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (item) => {
        setCart(cart.filter((prod) => prod.sku !== item.sku));
    }

    const buyAll = () => setCart([]);

    const cantidadTotal = cart.reduce((total, prod) => total + prod.cantidad, 0);
    const valorTotal = cart.reduce((total, prod) => total + (prod.cantidad * prod.precio), 0);

    return (
        <Context.Provider value={{cart, addToCart, removeFromCart, buyAll, cantidadTotal, valorTotal}}>
            {children}
        </Context.Provider>
    );
}
 
export default ContextProvider;