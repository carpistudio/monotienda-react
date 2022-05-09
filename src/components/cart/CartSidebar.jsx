import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function CartSidebar({checkout}) {

    const { valorTotal, cart } = useContext(Context);

    return (
      <div className="cartSidebar">
          <div className="cartSidebar__top">
              <h4>Tu pedido</h4>
              <div className="cartSidebar__table">
                  {cart.map((item) => (
                      <Fragment key={item.id}>
                        <p className="left">{item.cantidad} x {item.titulo}</p>
                        <p className="right">${item.precio * item.cantidad}</p>
                      </Fragment>
                  ))}
                  <p className="left">Subtotal</p>
                  <p className="right">${valorTotal}</p>
                  <p className="left">Envío</p>
                  <p className="right free">Gratis</p>
              </div>
          </div>
          <div className="cartSidebar__bottom">
              <div className="cartSidebar__table">
                  <p className="left total">Total</p>
                  <p className="right total">${valorTotal}</p>
              </div>
          </div>
          {
            !checkout &&
            <Link to="/checkout">
                <button className="cartSidebar__buyAll">
                    Comprar
                </button>
            </Link>
          }
      </div>
    )
}

export default CartSidebar