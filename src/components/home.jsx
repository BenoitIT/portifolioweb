import React from "react";
import BenodCv from "./graphics/benodCV.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
const Home = () => {
  return (
    <section className="lg:ml-[3.5rem] sm:mx-10">
      <div className="flex lg:ml-[12rem] bg-gradient-to-tr from-white to bg-gray-200 sm:-mx-10 sm:w-screen">
        <div className="h-screen w-screen flex flex-row relative">
          <div className="mx-20 my-20 absolute ">
            <div className="py-10 lg:mx-[15rem] lg:my-20 sm:my-4 rounded-2xl bg-gray-500 bg-opacity-25 sm:ml-2 lg:px-20 sm:px-2">
              <span className="text-black lg:text-4xl font-serif opacity-75 lg:mx-20 sm:mx-4 sm:text-md">
                Hi, my name is
                <span className="lg:ml-[5rem] text-blue-600 lg:flex flex-row space-x-2 sm:mx-2">
                  <span>Benoit</span> <span className="sm:hidden lg:block">NDAGIJIMANA</span>
                </span>
              </span>
              <div className="lg:pt-5 lg:w-3/4 lg:ml-20  sm:mx-4 sm:w-4/4 sm:pt-3">
                <span className="lg:text-2xl pad text-black  font-serif sm:text-sm ">
                  I am fullstack developer who passioned in problem <br />
                  solving using modern technology
                </span>
              </div>
              <div className="flex justify-center sm:-ml-10">
                <button className="bg-blue-600 sm:text-sm lg:text-lg  flex text-white lg:px-4 lg:py-2 sm:py-1 my-8 font-serif rounded-2xl hover:bg-white hover:text-blue-600">
                  <a download="" href={BenodCv}>
                    Download Cv
                  </a>
                  <div className=" lg:mx-2 sm:mx-1">
                    <MdOutlineFileDownload size={24} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="Bganimation lg:h-screen lg:w-screen sm:hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
