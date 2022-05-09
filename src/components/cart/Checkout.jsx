import React, { useState, useContext } from 'react';
import {addDoc, collection, getFirestore, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import { Context } from "../Context";
import CheckoutThankYou from './CheckoutThankYou';
import CheckoutPage from './CheckoutPage'

function Checkout() {

    const { cart, valorTotal, clearCart } = useContext(Context);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [checkoutID, setCheckoutID] = useState("");

    const order = {
        buyer: { name, phone, email, address },
        items: cart.map((prod) => ({
            id: prod.id,
            titulo: prod.titulo,
            precio: prod.precio,
            cantidad: prod.cantidad,
            subtotal: prod.precio * prod.cantidad
        })),
        total: valorTotal,
        date: serverTimestamp()
    }

    const sendOrder = () => {
        const db = getFirestore();
        
        // Actualiza stock
        cart.forEach((prod) => {
            const prodRef = doc(db, "productos", prod.id);

            getDoc(prodRef).then((res) => {
                updateDoc(prodRef, {
                    "stock": res.data().stock - prod.cantidad
                })
            })
        })
        
        // Carga la venta y vacía el carrito
        const ventasRef = collection(db, "ventas");
        addDoc(ventasRef, order).then(({ id }) => {
          setCheckoutID(id);
          clearCart();
        })
    }


  return (
    <>
        { 
            !checkoutID ?
            <CheckoutPage 
                name={name}
                email={email}
                phone={phone}
                address={address}
                setName={setName}
                setPhone={setPhone}
                setEmail={setEmail}
                setAddress={setAddress}
                sendOrder={sendOrder}
            /> :
            <CheckoutThankYou
                checkoutID={checkoutID}
            />
        } 
    </>
  )
}

export default Checkout