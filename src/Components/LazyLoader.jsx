import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const LazyLoader = ({ image }) => (
  <LazyLoadImage
    alt={image}
    effect="blur"
    src={image} 
    className=' rounded-md w-full h-full' 
    />
);

export default LazyLoader
