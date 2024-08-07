import React from 'react';
import { BlackWhite, BlueSimple, OrangePurple, Purplelavender } from '../assets';

const Gallery = () => {
     const localImages = [BlackWhite, BlueSimple, OrangePurple, Purplelavender];
     const externalImages = Array.from({ length: 8 }, (_, index) => `https://picsum.photos/200?random=${index + 1}`);
     const images = [...localImages, ...externalImages];

     return (
          <div name="gallery" className="h-full p-5">
               <h2 className="font-semibold text-gray-800 font-amiri text-lg md:text-2xl mb-4">Welcome to Gallery Section</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                         <img key={index} src={src} alt={`Gallery Image ${index + 1}`}
                              className="w-full h-48 object-cover rounded-lg transform transition duration-500 hover:scale-105"
                         />
                    ))}
               </div>
          </div>
     );
}

export default Gallery;
