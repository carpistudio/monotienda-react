import React from 'react';
import CartSidebar from './CartSidebar';
import CheckoutForm from './CheckoutForm';

function CheckoutPage({name, phone, email, address, setName, setPhone, setEmail, setAddress, sendOrder}) {

  return (
    <>
      <div className="container min-height-100">
        <div className="row">
          <h1>Checkout</h1>
          <p className="checkoutText">Rellená tus datos para finalizar tu compra.</p>
          <div className="col-md-8">
            <CheckoutForm
              name={name}
              phone={phone}
              email={email}
              address={address}
              setName={setName}
              setPhone={setPhone}
              setEmail={setEmail}
              setAddress={setAddress}
              sendOrder={sendOrder}
            />
          </div>
          <div className="col-md-4">
            <CartSidebar checkout={true}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPage