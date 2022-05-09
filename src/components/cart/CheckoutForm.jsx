import React from 'react'

function CheckoutForm({name, phone, email, address, setName, setPhone, setEmail, setAddress, sendOrder}) {
  return (
    <form className="checkoutForm" onSubmit={(e) => { e.preventDefault(); sendOrder() }}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Nombre y apellido"
                      value={name}
                      onChange={(e) => { setName(e.currentTarget.value) }}
                      required
                    />
                    <label htmlFor="nombre">Nombre y apellido</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="telefono"
                      placeholder="Teléfono"
                      value={phone}
                      onChange={(e) => { setPhone(e.currentTarget.value) }}
                      required
                    />
                    <label htmlFor="telefono">Teléfono</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => { setEmail(e.currentTarget.value) }}
                      required
                    />
                    <label htmlFor="email">E-mail</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      placeholder="E-mail"
                      value={address}
                      onChange={(e) => { setAddress(e.currentTarget.value) }}
                      required
                    />
                    <label htmlFor="direccion">Dirección</label>
                  </div>
                </div>
                </div>
                <button className="btn btnComprar" type="submit">Comprar</button>
            </form>
  )
}

export default CheckoutForm