import React from "react";
import ItemCount from "./ItemCount";

export default function itemListContainer() {

    let stock = 7;
    let initial = 1;

    return (
        <>
            <ItemCount stock={stock} initial={initial} />
        </>
    );
}