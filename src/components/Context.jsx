import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {

    // Crear el cart vacío
    const [cart, setCart] = useState([]);

    // Si está el producto, le suma la cantidad elegida - Si no está, lo agrega al carrito
    const addToCart = (item) => {
        const indexProd = cart.findIndex((prod) => prod.id === item.id);
        if (indexProd !== -1) {
            const newCart = [...cart];
            newCart[indexProd].cantidad = newCart[indexProd].cantidad + item.cantidad;
            setCart(newCart);
        } else {
            setCart([...cart, item]);
        }
    };

    // Elimina el producto seleccionado del carrito
    const removeFromCart = (item) => {
        setCart(cart.filter((prod) => prod.id !== item.id));
    }

    // Vacía el carrito
    const clearCart = () => setCart([]);

    // Calcula la cantidad total de productos en el carrito
    const cantidadTotal = cart.reduce((total, prod) => total + prod.cantidad, 0);

    // Calcula el valor total del carrito
    const valorTotal = cart.reduce((total, prod) => total + (prod.cantidad * prod.precio), 0);

    return (
        <Context.Provider value={{cart, addToCart, removeFromCart, clearCart, cantidadTotal, valorTotal}}>
            {children}
        </Context.Provider>
    );
}
 
export default ContextProvider;