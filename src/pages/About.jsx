import React from "react";

function About() {
     return (
          <>
               <div name="about" className="flex flex-col p-5 bg-slate-200">
                    <h2 className="font-semibold text-gray-800 font-amiri text-lg md:text-2xl mb-3 md:mb-0">About Me!!!</h2>
                    <div className="flex flex-col md:flex-row md:p-10 gap-3 md:gap-10">
                         <h2 className="w-full md:w-1/2 text-center font-greatVibes text-2xl text-gray-800 flex items-center">Preparing your Dreams with brush. <br />Every artist dips his brush in his own soul, and paints his own nature into his pictures.</h2>
                         <p className="w-full md:w-1/2 font-greatVibes text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta corrupti itaque a, reiciendis quas quibusdam fugiat voluptates praesentium tempore perferendis sit minus dolorum. Labore dolor asperiores impedit earum incidunt repudiandae, quaerat quos ipsam sint odit amet, expedita maiores quis voluptate perferendis culpa voluptas, adipisci officia. Voluptate suscipit aliquid fugit perspiciatis.</p>
                    </div>
               </div>
          </>
     );
}

export default About;