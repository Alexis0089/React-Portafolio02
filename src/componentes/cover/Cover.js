import React from "react";
import "./Cover.css";
import coverVideo from "../../assets/CoverVideo.mp4";

const cover = () => {
    return (
        <section className="cover-container">
            <video className="video1" src={coverVideo} autoPlay loop muted />
            <h1>Portafolio</h1>
            <p>Developer | Designer | Content Creator | Entrepeneur </p>
        </section>
    );
};

export default cover;
