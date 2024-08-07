import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Contact() {
     const bg = "https://e0.pxfuel.com/wallpapers/346/885/desktop-wallpaper-rainbow-fire-pics-splash.jpg";
     const form = useRef();
     const [loading, setLoading] = useState(false);

     const isFormValid = () => {
          const inputs = form.current.querySelectorAll(
               "input[required], textarea[required]",
          );
          for (const input of inputs) {
               if (!input.validity.valid) {
                    return false;
               }
          }
          return true;
     };

     const sendEmail = (e) => {
          e.preventDefault();
          if (isFormValid()) {
               setLoading(true);
               emailjs
                    .sendForm(
                         "service_hrin1pj",
                         "template_np5665o",
                         form.current,
                         "165ie_F12sE6SwqDd",
                    )
                    .then(
                         (result) => {
                              console.log(result.text);
                              console.log("message sent");
                              form.current.reset();
                              setLoading(false);
                         },
                         (error) => {
                              console.log(error.text);
                              setLoading(false);
                         },
                    );
          } else {
               console.log("Form is not valid");
          }
     };

     return (
          <div name="contact" className="flex justify-center items-center contact-bg">
               <div className="w-full h-full flex justify-center">
                    <div className="w-full h-full flex flex-col p-5 gap-5">
                         <div className="text-white font-amiri">
                              <p className="text-4xl font-bold">Contact</p>
                              <p className="py-3">Let`s grab some coffee together.</p>
                         </div>
                         <div className="w-full h-full flex justify-center items-center">
                              <form ref={form} onSubmit={sendEmail} method="POST" className="flex flex-col w-full md:w-1/2">
                                   <input type="text" name="fullname" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none placeholder:text-white" required />
                                   <input type="email" name="address" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none placeholder:text-white" required />
                                   <textarea name="message" rows="10" className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none placeholder:text-white" placeholder="Enter your message" required>
                                   </textarea>
                                   <button type="submit" className="text-white font-semibold bg-gradient-to-b from-gray-500 to-teal-400 px-6 py-3 mt-10 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                                        {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Let's talk"}
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Contact;
