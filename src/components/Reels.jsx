import React, { useState, useEffect } from 'react';
import { ImageComponent } from './ImageComponent';


const ImageReel = ({ images, imageClass, loadingClass }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change image every 300ms and loop infinitely
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div>
            <ImageComponent
                image={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                imageClass={`object-contain transition-opacity duration-300 ease-in-out ${imageClass}`}
                skeletonClass={`${loadingClass}`}
            />
        </div>
    );
};

export default ImageReel;



import Reel1 from "../assets/images/projects/ikuku/ikuku_thumb.png"
import Reel2 from "../assets/images/projects/paza/paza-thumb.png"
import Reel3 from "../assets/images/projects/prat/PRAT-thumb.png"


export const reelImages = [
    Reel1, Reel2, Reel3
]



export function ImageReelComponent() {
    return (
        <div className='w-70 h-50 lg:w-145 lg:h-95 relative'>
            <ImageReel
                images={reelImages}
                imageClass="border-2 lg:border-4 rounded w-70 h-50 lg:w-145 lg:h-95 object-cover"
                skeletonClass="border-2 lg:border-4 rounded-lg w-70 h-50 lg:w-145 lg:h-95"
                loadingClass="lg:w-145 lg:h-95 w-70 h-50 border-2 lg:border-4 rounded-lg"
            />
        </div>
    );
}