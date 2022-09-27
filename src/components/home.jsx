import React from "react";
import BenodCv from "./graphics/benodCV.pdf"
import { MdOutlineFileDownload } from "react-icons/md";
const Home = () => {
  return (
    <section className="components">
      <div className="flex  bg-gradient-to-tr from-white to bg-gray-200 ">
        <div className="h-screen w-screen flex flex-row relative">
          <div className="mx-10 my-20 absolute ">
            <div className="py-10 mx-20 my-20 rounded-2xl bg-gray-500 bg-opacity-25">
              <span className="text-black text-4xl font-mono opacity-75 mx-20">
                Hi, my name is{" "}
                <span className="text-blue-600">Benoit NDAGIJIMANA</span>{" "}
              </span>
              <div className="pt-10 w-3/4 ml-20">
                <span className="text-xl pad text-black  font-mono">
                  I am fullstack developer who passioned in problem <br />
                  solving using modern technology
                </span>
              </div>
              <div className="flex justify-center">
                <button  className="bg-blue-600 flex text-white px-4 py-2 my-8 rounded-2xl hover:bg-white hover:text-blue-600">
                  <a download="" href={BenodCv}>Download Cv</a>
                  <div className=" mx-2">
                    <MdOutlineFileDownload size={24} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="Bganimation h-screen w-screen"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
