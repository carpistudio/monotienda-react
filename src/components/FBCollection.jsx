import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import React from 'react'

export default function FBCollection() {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const categoriasRef = collection(db, 'categorias');

        getDocs(categoriasRef).then((res) => {
            setCategorias(res.docs.map(item => ({id: item.id, ...item.data()})));
        });

    }, []);
    

    return (
        <>
            {productos.length ? <div>{JSON.stringify(productos)}</div> : "Loading..."}
        </>
    )
}
