import React, { useContext } from 'react';
import { BagCheckFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function CartWidget() {

    const { cantidadTotal } = useContext(Context);

    return (
        <Link to="/cart">
            <div id="botonCarrito" className={cantidadTotal === 0 ? "cerrado" : ""}>
                <div className="numerito"><div><p id="numerito">{cantidadTotal}</p></div></div>
                <BagCheckFill/>
            </div>
        </Link>
    );

}

export default CartWidget