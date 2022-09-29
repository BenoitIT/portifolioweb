import ImageOne from "./backOne";
import ImageTwo from "./BackTwo";
import {BsTelephoneInboundFill}from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {FaInstagramSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="text-gray-400 componentskill">
      <div className="w-imgContact"><ImageOne /></div>
      <div className="mx-20">
        <div className="font-serif text-2xl font-bold pt-5 mx-10">CONTACT_US</div>
        <div className="font-serif text-gray-400 mx-20 my-4">get in touch</div>
        <div className="flex flex-row space-x-20">
          {/**contacts division */}
          <div className="flex-col space-y-4 justify-center items-center text-lg my-20">
            <div className="flex space-x-4">
              <div className="flex space-x-2 font-serif text-gray-500"><span className="mt-1"><BsTelephoneInboundFill size={20}/></span><span>Tel:</span></div>
              <div className="font-mono">+250784817203</div>
            </div>
            <div className="flex space-x-4">
              <div className="flex space-x-2 font-serif text-gray-500"><span className="mt-1"><MdEmail size={20}/></span><span>Email:</span></div>
              <div className="font-mono">benoitnda35@gmail.com</div>
            </div>
            <div className="flex space-x-4">
              <div className="flex space-x-2 font-serif text-gray-500"><span className="mt-1"><FaInstagramSquare size={20}/></span><span>Instagram:</span></div>
              <div className="font-mono">bennods</div>
            </div>
          </div>
          {/**contacts us form */}
          <div className="text-mono flex-col space-y-4 px-20 my-4">
            <div className="font-mono text text-xl">Contact_us Form</div>
            <div className="bg-gray-50" id="name">
              <div>
                <label htmlFor="names" className="font-serif">your name</label>
              </div>
              <div>
              <input
                type="text"
                className="border-2 border-gray-300 w_input rounded h-10 text-base font-serif placeholder:text-sm placeholder:font-mono focus:outline-none"
                id="names"
                placeholder="enter your name"
              />
              </div>
              <div>
                <label htmlFor="email" className="font-serif">Email</label>
              </div>
              <div>
              <input
                type="email"
                className="border-2 border-gray-300 w_input rounded h-10 text-base font-serif placeholder:text-sm placeholder:font-mono focus:outline-none"
                id="names"
                placeholder="enter your email"
              />
              </div>
              <div>
                <label htmlFor="message" className="font-serif">your message</label>
              </div>
              <div>
              <textarea
                type="text"
                className="border-2 border-gray-300 w_input rounded h-40 text-base font-serif placeholder:text-sm placeholder:font-mono focus:outline-none"
                id="names"
                placeholder="your message here....."
              />
              </div>
              <button className="border-2 border-gray-300 w_input font-serif rounded h-10 text-base bg-blue-400 text-white">send a message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-imgContact"><ImageTwo /></div>
    </div>
  );
};

export default Contact;
