import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

import React from 'react'

export default function FBProduct() {

    const [producto, setProducto] = useState({});

    useEffect(() => {

        const db = getFirestore();
    
        const celuRef = doc(db, "productos", "LcJYYAihZt7h04YN2G6x");
        getDoc(celuRef).then((res) => {
            console.log(res.data());
            console.log(res.id);

            const objetoEntero = {id: res.id, ...res.data()};
            console.log(objetoEntero);

            setProducto(objetoEntero);
        });

    }, [])
    

    return (
        <>
            {producto.id ? <div>{producto.id + " " + producto.name}<br/><img src={producto.img}/></div> : "Loading..."}
        </>
    )
}
