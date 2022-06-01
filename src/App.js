//import { Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./componentes/cover/Cover";
import Navbar from "./componentes/navbar/Navbar";
import About from "./componentes/about/About";
import Slider from "./componentes/slider/Slider";
//import {Container, Button, Carousel} from "react-bootstrap";

function App() {
    const [scrollHeight, setScrolHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrolHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scrollHeight]);

    return (
        <div className="App">
            <Navbar isScrolling={scrollHeight} />
            <Cover />
            {/* About y Slider(uno abajo del otro) */}
            <About />
            <Slider />
        </div>
    );
}

export default App;
