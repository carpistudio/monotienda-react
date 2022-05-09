import React from 'react';
import { Whatsapp, Globe, Github, Instagram } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="tarjetascorreos">
                    <div>
                        <img src="/img/footer-tarjetas.png" alt="Métodos de pago" />
                    </div>
                    <div>
                        <img src="/img/footer-correos.png" alt="Métodos de envío" />
                    </div>
                </div>
                <div className="footerCarpi">Carpi Studio - Proyecto Final - Coderhouse</div>
                <div className="accesoalpanel">
                    <a href="https://carpistudio.com.ar" target="_blank" rel="noopener noreferrer"><Globe/></a>
                    <a href="https://wa.me/5491157667000" target="_blank" rel="noopener noreferrer"><Whatsapp/></a>
                    <a href="https://github.com/carpistudio" target="_blank" rel="noopener noreferrer"><Github/></a>
                    <a href="https://instagram.com/carpi.studio/" target="_blank" rel="noopener noreferrer"><Instagram/></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer