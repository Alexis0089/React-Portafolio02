import React from "react";

const slidesInfo = [
    {
        src: "https://pixabay.com/es/images/download/technology-1283624_640.jpg",
        alt: "project 1",
        desc: "projet 1",
    },

    {
        src: "https://pixabay.com/es/images/download/code-1839406_640.jpg",
        alt: "proyject 2",
        desc: "project 2",
    },

    {
        src: "https://pixabay.com/es/images/download/source-code-583537_640.jpg",
        alt: "proect 3",
        desc: "project 3",
    },
];

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;
