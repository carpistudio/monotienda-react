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
        console.log(item);
    };
    console.log(cart);

    const removeFromCart = (item) => {
        setCart(cart.filter((prod) => prod.sku !== item.sku));
    }

    const buyAll = () => setCart([]);

    return (
        <Context.Provider value={{cart, addToCart, removeFromCart, buyAll}}>
            {children}
        </Context.Provider>
    );
}
 
export default ContextProvider;