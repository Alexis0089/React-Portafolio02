import React from "react";
import "./Slider.css";
//import Carousel from "react-bootstrap/Carousel";
import { Container, Button, Carousel } from "react-bootstrap";

//import Slides from "./Slides.js"

const Slider = () => {
    return (
        <section className="slider-conteiner">
            <div className="slider-carrusel">
                <Carousel fade>
                    <Carousel.Item id="carrusel-box">
                        <img
                            id="carrusel-img"
                            className="d-block w-100"
                            src="https://pixabay.com/es/images/download/startup-594090_640.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id="carrusel-img"
                            className="d-block w-100"
                            src="https://pixabay.com/images/download/engineering-3863851_640.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id="carrusel-img"
                            className="d-block w-100"
                            src="https://pixabay.com/images/download/board-453758_640.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="slider-titulo">
                <h2>Proyecto</h2>
            </div>
        </section>
    );
};

export default Slider;
