import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import CheckoutThankYouProduct from './CheckoutThankYouProduct';
import { Jelly } from '@uiball/loaders';

function CheckoutThankYou({checkoutID}) {

  const [compra, setCompra] = useState({});
  const [comprador, setComprador] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {

    const db = getFirestore();
    const prodRef = doc(db, "ventas", checkoutID);
    getDoc(prodRef).then((res) => {
        setCompra({id: res.id, ...res.data()});
        setComprador(res.data().buyer);
        setItems(res.data().items);
    });

  }, [checkoutID])


  return (
    <>
      <div className="container checkoutThankYou min-height-100">
        <div className="row">
          <div className="col-md-12">
            {
              items.length > 0 ?
              <>
              <h4>¡Muchas gracias, {comprador.name}!</h4>
              <p>Tu número de orden es <span>{checkoutID}</span></p>
              <p>Detalles de tu compra:</p>
                <table className="table table-striped">
                  <thead>
                      <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cant.</th>
                        <th scope="col">Subtotal</th>
                      </tr>
                  </thead>
                  <tbody>
                      {items.map((item) => (
                          <CheckoutThankYouProduct key={item.id} item={item} />
                      ))}
                  </tbody>
                  <tfoot>
                        <tr>
                          <td colSpan="3">Total</td>
                          <td>
                            {
                              compra.total
                            }
                            </td>
                        </tr>
                  </tfoot>
                </table>
              </>
              : <Jelly color="#fd571b" />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutThankYou