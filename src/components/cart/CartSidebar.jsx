import React, { useContext } from 'react';
import { Context } from '../Context';

function CartSidebar() {

    const { buyAll, valorTotal } = useContext(Context);

    return (
      <div className="cartSidebar">
          <div className="cartSidebar__top">
              <h4>Tu pedido</h4>

              <div className="cartSidebar__table">
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
          <button className="cartSidebar__buyAll" onClick={buyAll}>
              Comprar
          </button>
      </div>
    )
}

export default CartSidebar