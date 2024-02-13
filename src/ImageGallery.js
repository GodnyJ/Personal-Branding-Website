import React from "react";

function importAllLogos(r) {
    return r.keys().map(fileName => ({
        src: r(fileName),
        alt: fileName.substring(2)
    }));
}

const images = importAllLogos(require.context('../public/company-icon', false, /\.(png|jpe?g|svg)$/));

export default function ImageGallery() {
    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className={image.alt.slice(0,-4)} />
            ))}
        </div>
    )
}