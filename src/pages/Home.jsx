import React from 'react';

function Home() {
     const hero = "https://png.pngtree.com/background/20230410/original/pngtree-powder-smoke-colorful-background-picture-image_2379658.jpg";
     return (
          <>
               <div name="home" className="relative flex justify-center items-center">
                    <img src={hero} alt="hero look" className="w-full h-[500px] md:h-full" />
                    <div className="absolute flex justify-center items-center">
                         <div className="flex flex-col text-center uppercase font-amiri">
                              <h1 className='font-bold text-3xl md:text-5xl text-white'>Logo Web</h1>
                              <p className="text-lg md:text-3xl text-white font-semibold underline underline-offset-2">Explore my work.</p>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Home;