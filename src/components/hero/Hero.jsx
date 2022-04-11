import React from "react";
import { Link } from "react-router-dom";
import CategoriasListContainer from "../categorias/CategoriasListContainer";

export default function Hero() {
  return (
    <>
      <div className="container-fluid bg_primario">
        <div className="container">
            <div className="row hero">
                <CategoriasListContainer/>
                <div className="col-md-9 hero__slider">
                    <div id="carouselExampleControls" className="carousel slide slider" data-bs-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="img/slider1.jpeg" className="" alt="Slider" />
                          </div>
                          <div className="carousel-item">
                            <img src="img/slider2.jpeg" className="" alt="Slider" />
                          </div>
                          <div className="carousel-item">
                            <img src="img/slider3.jpeg" className="" alt="Slider" />
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}