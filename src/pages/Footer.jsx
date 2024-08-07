import React from 'react';
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
     return (
          <footer className="bg-gray-900 text-white py-4">
               <div className="container mx-auto flex justify-between items-center px-5 py-2">
                    <a href="https://shafah.netlify.app/" rel="noreferrer" target="_blank" className="text-5xl font-signature ml-2 cursor-pointer">
                         shafah
                    </a>
                    <div className="flex gap-8">
                         <a href="https://discord.com/channels/@me/1270050702919467149/1270764030675390626" target="_blank" className="p-3 border border-gray-700 rounded-full hover:bg-gray-800 transition duration-300">
                              <FaDiscord size={25} />
                         </a>
                         <a href="https://discord.com/channels/@me/1270050702919467149/1270764638358995036" target="_blank" className="p-3 border border-gray-700 rounded-full hover:bg-gray-800 transition duration-300">
                              <FaXTwitter size={25} />
                         </a>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;
