import React from "react";
import "./About.css";
//import Fotop1 from '../../media/Foto_p2.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>¿Cansado de buscar Solución? Podemos ayudarte.</h3>
                <p>
                    Generate Lorem Ipsum placeholder text for use in your
                    graphic, print and web layouts, and discover plugins for
                    your favorite writing, design and blogging tools. Explore
                    the origins, history and meaning of the famous passage, and
                    learn how Lorem Ipsum went from scrambled Latin passage to
                    ubiqitous dummy text.
                </p>
            </div>
            <div className="about-img">
                <img
                    src="https://pixabay.com/es/images/download/entrepreneur-593358_640.jpg"
                    alt="about ggg"
                />
            </div>
        </div>
    );
};

export default About;
