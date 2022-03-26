import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "../components/cartWidget.css";

export default function CartWidget() {

    return (
        <> 
            <div className="cartIcon">
                <FontAwesomeIcon icon={faCartShopping} /> <span>4</span>
            </div>
        </>
    );
}