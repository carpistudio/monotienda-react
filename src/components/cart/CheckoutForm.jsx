import React from 'react'

function CheckoutForm({name, phone, email, address, setName, setPhone, setEmail, setAddress, sendOrder}) {
  return (
    <>
        <form onSubmit={(e) => { e.preventDefault(); sendOrder() }}>
            <h1>Checkout</h1>
            <p>Nombre:</p>
            <input type="text" name='name' value={name} onChange={(e) => { setName(e.currentTarget.value) }} required/>
            <p>Telefono:</p>
            <input type="text" name='phone' value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} required/>
            <p>Email:</p>
            <input type="text" name='email' value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} required/>
            <p>Dirección:</p>
            <input type="text" name='address' value={address} onChange={(e) => { setAddress(e.currentTarget.value) }} required/>
            <button type="submit" variant="contained">Enviar</button>
        </form>
    </>
  )
}

export default CheckoutForm