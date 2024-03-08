import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaMap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contactform = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="text-center mb-5 mt-4">
          <h3 className="text-blue-950 text-xl">Contact us</h3>
          <h2 className="text-2xl font-semibold text-yellow-400">Get In Touch</h2>
        </div>
        <div className="flex max-lg:flex-col">
          <div className="flex flex-col justify-center max-lg:w-full gap-8 w-1/3 px-9">
            <div className="flex items-center gap-2">
                <div className="border p-3 text-xl rounded-full">
                   <FaPhone />
                </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+21698852004</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <div className="border p-3 text-xl rounded-full">
                   <MdEmail />
                </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>+anpe@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
            <div className="border p-3 text-xl rounded-full">
                   <MdEmail />
                </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Tunisia</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col w-2/3 max-lg:w-full">
            <div className="w-full flex">
              <input type="text" className="outline-none w-1/2 border focus:border-yellow-400 border-slate-400 transition p-3 m-1"/>
              <input type="text" className="outline-none border w-1/2 focus:border-yellow-400 border-slate-400 transition p-3  m-1"/>
            </div>
            <div className="w-full flex">
              <input type="text" className="outline-none w-1/2 border focus:border-yellow-400 border-slate-400 transition p-3 m-1"/>
              <input type="text" className="outline-none border w-1/2 focus:border-yellow-400 border-slate-400 transition p-3 m-1"/>
            </div>
            <textarea name="" id="" cols="30" rows="10"  className="outline-none border-slate-400 focus:border-yellow-400 transition border p-3 m-1 "></textarea>
            <button className="bg-yellow-400 transition py-1 hover:bg-yellow-600">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
