import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ImageComponent = ({ image, imageClass, skeletonClass, }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };


    return (
        <div>
            {isLoading && <Skeleton baseColor="#D9D9D9" highlightColor="#FFFFFF" className={skeletonClass} />}
            <img src={image}
                alt=""
                className={`${isLoading ? 'hidden' : ''} ${imageClass}`}
                onLoad={handleImageLoad}
            />
        </div>
    )
}