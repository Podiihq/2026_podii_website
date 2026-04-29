import React, { useState, useEffect } from 'react';
import { ImageComponent } from './ImageComponent';


const ImageReel = ({ images, imageClass, loadingClass }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change image every 300ms and loop infinitely
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
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
import Reel4 from "/images/projects/vsla/vsla_thumbnail.png"
import Reel5 from "/images/thumbs/vsla-home-thumb.png"
import Reel6 from "/images/thumbs/prat-home-thumb.png"
import Reel7 from "/images/thumbs/ikuku-home-thumb.png"
import { BorderConers } from './BorderConers';


export const reelImages = [
    Reel5, Reel6, Reel7
]



export function ImageReelComponent() {
    return (
        <div className='w-70 h-50 lg:w-full lg:h-95 relative'>
            <ImageReel
                images={reelImages}
                imageClass="w-full h-50 lg:w-full lg:h-95 object-cover object-top"
                skeletonClass="border-2 border-[#038585] w-70 h-50 lg:w-145 lg:h-95"
                loadingClass="lg:w-145 border-[#038585] lg:h-95 w-70 h-50 border-2"
            />
            {/* <BorderConers /> */}
        </div>
    );
}