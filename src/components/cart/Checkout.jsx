import React, { useState, useContext } from 'react';
import {addDoc, collection, getFirestore, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { Context } from "../Context";
import CheckoutThankYou from './CheckoutThankYou';
import CheckoutForm from './CheckoutForm'

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
            <CheckoutForm 
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