import React from "react";
import { TelephoneFill, Whatsapp, EnvelopeFill, Facebook, Instagram } from 'react-bootstrap-icons';

export default function Middle() {
    return (
        <>
            <div className="middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 middle__logo">
                            <img src="logo.png" alt="Logo" />
                        </div>
                        <div className="col-md-8 middle__searchbar">
                            <div className="middle__searchbar__contact">
                                <a href="tel:0111557667000">
                                    <TelephoneFill /> <span>011 15-5766-7000</span>
                                </a>
                                <a href="https://wa.me/5491157667000" target="_blank" rel="noopener noreferrer">
                                    <Whatsapp /> <span>5491157667000</span>
                                </a>
                                <a href="mailto:hola@monotienda.com">
                                    <EnvelopeFill /> <span>hola@monotienda.com</span>
                                </a>
                                <a href="https://facebook.com/monotiendalatam" target="_blank" rel="noopener noreferrer">
                                    <Facebook />
                                </a>
                                <a href="https://instagram.com/monotienda.ar" target="_blank" rel="noopener noreferrer">
                                    <Instagram />
                                </a>
                            </div>
                            <form className="middle__searchbar__search" id="searchbarTop">
                                <input type="text" className="searchbar__input" placeholder="Buscar productos" />
                                <input type="submit" className="searchbar__button" value="🔎︎" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}