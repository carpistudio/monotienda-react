import React, { useState, useEffect } from "react";
import Context from "./Context"

export default function TestFormulario() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function terminarCompra() {

        //example buyer
        let order = {
            buyer: { name, phone, email },
            items: [{ id, title, price },{ id, title, price }],
            total: 100,
        };

        alert("quiere terminar la compra " + name + email + phone);

    }

    useEffect(() => {

        console.log(name, email, phone);

    }, [name, email, phone]);

    return (
    <>
        <input type="name" value={name} onChange={ setName(e.currentTarget.value) }/>
        <input type="email" value={email} onChange={ setEmail(e.currentTarget.value) }/>
        <input type="phone" value={phone} onChange={ setPhone(e.currentTarget.value) }/>
        <button onClick={() => terminarCompra()} />
    </>

    );

}