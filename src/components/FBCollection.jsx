import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import React from 'react'

export default function FBCollection() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const db = getFirestore();

        const productosRef = collection(db, 'productos');

        getDocs(productosRef).then((res) => {
            console.log(res);
        })
    
        const celuRef = doc(db, "productos", "LcJYYAihZt7h04YN2G6x");
        getDoc(celuRef).then((res) => {
            setProductos(res.docs.map(item => ({id: item.id, ...item.data()})));
        });

    }, [])
    

    return (
        <>
            {productos.length ? <div>{JSON.stringify(productos)}</div> : "Loading..."}
        </>
    )
}
