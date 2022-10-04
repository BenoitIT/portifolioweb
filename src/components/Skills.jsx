import React from "react";
import ImageOne from "./backOne";
import ImageTwo from "./BackTwo";
import Files from "./files";
const Skills = () => {
  const [moreDb, setMoreDb] = React.useState(false);
  const [moreFrontEnd, setMoreFrontEnd] = React.useState(false);
  const [moreBkend, setMoreBkend] = React.useState(false);
  const MoreBoutDb = () => {
    setMoreDb(true);
  };
  const HandleMoreFrontEnd = () => {
    setMoreFrontEnd(true);
  };
  const handleMoreBkend = () => {
    setMoreBkend(true);
  };
  const handleMinimize = () => {
    setMoreDb(false);
    setMoreFrontEnd(false);
    setMoreBkend(false);
  };
  return (
    <div className="text-gray-400 lg:ml-[-12.3rem] sm:ml-[-5rem] relative">
      <ImageOne />
      <div className={moreDb ? "mx-20 bg-opacity-10" : "lg:mx-20 sm:ml-[7rem]"}>
        <div className="font-serif lg:text-4xl pt-5 ml-8 sm:text-lg">
          SKILLS
        </div>
        <div className="font-medium lg:text-base ml-8 my-4 sm:text-sm">
          what I am able to do
        </div>
        <div
          className={
            moreDb || moreFrontEnd || moreBkend
              ? "opacity-10"
              : "font-serif lg:text-xl lg:w-3/4 ml-8 sm:w-3/4 sm:text-sm"
          }
        >
          Computer programmer skills often combine creativity with technical and
          analytical elements. In many ways, programming represents a perfect
          merging of art and science.
        </div>
        <div
          className={
            moreDb || moreFrontEnd || moreBkend
              ? "opacity-10 lg:flex lg:flex-row lg:space-x-8 my-10 sm:flex-col sm:space-y-8 sm:hidden"
              : "flex lg:flex-row lg:space-x-8 lg:ml-8 lg:my-10 sm:my-5 sm:flex-col sm:space-y-4 sm:ml-10"
          }
        >
          <div className="rounded shadow-md shadow-gray-500  border-blue-400 lg:w-1/4 sm:w-3/4">
            <div className=" lg:pt-20 lg:pb-10 sm:pt-10 sm:pb-10 border-2 flex flex-col space-y-8 lg:text-sm sm:text-xs items-center justify-center bg-white">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                 {Files.SiNodedotjs}
                </div>
                <span className="mt-2 lg:text-xl sm:text-sm">
                  Backend Development
                </span>
              </div>
              <button
                className="px-4 py-2 bg-blue-400 rounded-xl text-white hover:bg-white hover:text-blue-400  hover:border-blue-400 hover:border-2"
                onClick={handleMoreBkend}
              >
                view more
              </button>
            </div>
          </div>
          <div className="rounded shadow-md shadow-gray-500 border-blue-400 lg:w-1/4 sm:w-3/4">
            <div className=" pt-20 pb-10 border-2 flex flex-col space-y-8 lg:text-sm sm:text-xs items-center justify-center bg-white">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                  {Files.CgWebsite}
                </div>
                <span className="mt-2 lg:text-xl sm:text-sm">Front-end development</span>
              </div>
              <button
                className="px-4 py-2 bg-blue-400 rounded-xl text-white hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2"
                onClick={HandleMoreFrontEnd}
              >
                view more
              </button>
            </div>
          </div>
          <div className="rounded shadow-md shadow-gray-500  border-blue-400 lg:w-1/4 sm:w-3/4">
            <div className=" pt-20 pb-10 border-2 flex flex-col space-y-8  lg:text-sm sm:text-xs items-center justify-center bg-white">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                  {Files.dbIcon}
                </div>
                <span className="mt-2 lg:text-xl sm:text-sm">DataBase technology</span>
              </div>
              <button
                className="px-4 py-2 bg-blue-400 rounded-xl text-white hover:bg-white hover:text-blue-400  hover:border-blue-400 hover:border-2"
                onClick={MoreBoutDb}
              >
                view more
              </button>
            </div>
          </div>
        </div>
        {/*more about database*/}
        <div
          className={
            moreDb
              ? "bg-gray-100 lg:w-2/4 sm:3/4 absolute lg:top-[32rem] lg:left-[20rem] sm:top-[20rem] sm:left-[5rem] border-2 shadow-md shadow-gray-500 border-blue-400"
              : "hidden"
          }
        >
          <div className="flex flex-col lg:text-lg sm:text-sm">
            <span
              className="hover:text-red-300 lg:ml-[36rem] lg:mt-[0.5rem] sm:ml-[15rem] sm:mt-[0.5rem] text-blue-400"
              onClick={handleMinimize}
            >
               {Files.IoCloseCircle }
            </span>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-4">
              <div className="text-blue-400">
                {Files.SiMongodb }
              </div>
              <div>MongoDb technology</div>
            </div>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-4">
              <div className="text-blue-400">
                {Files.SiMysql }
              </div>
              <div>Mysql database technology</div>
            </div>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-4">
              <div className="text-blue-400">
               {Files.SiPostgresql}
              </div>
              <div>cloud postgres database technology</div>
            </div>
          </div>
        </div>
        {/*more about front end*/}
        <div
          className={
            moreFrontEnd
              ? "bg-gray-100 lg:w-2/4 sm:3/4  absolute lg:top-[32rem] lg:left-[20rem] sm:top-[20rem] sm:left-[5rem] border-2 shadow-md shadow-gray-500 border-blue-400"
              : "hidden"
          }
        >
          <div className="flex flex-col lg:text-lg sm:text-sm">
            <span
              className="hover:text-red-300 lg:ml-[36rem] lg:mt-[0.5rem] sm:ml-[15rem] sm:mt-[0.5rem] text-blue-400"
              onClick={handleMinimize}
            >
              {Files.IoCloseCircle }
            </span>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-2">
              <div className="text-blue-400">
                {Files.AiFillHtml5 }
              </div>
              <div>HyperText Markup language 5</div>
            </div>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-2">
              <div className="text-blue-400">
                {Files.SiTailwindcss }
              </div>
              <div>Tailwind css</div>
            </div>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-2">
              <div className="text-blue-400">
                {Files.FaReact }
              </div>
              <div>React js</div>
            </div>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-2">
              <div className="text-blue-400">
                 {Files.AiFillGithub}
              </div>
              <div>git/github</div>
            </div>
          </div>
        </div>
        {/*more about backend end*/}
        <div
          className={
            moreBkend
              ? "bg-gray-100 lg:w-2/4 sm:3/4  absolute lg:top-[32rem] lg:left-[20rem] sm:top-[20rem] sm:left-[5rem] border-2 shadow-md shadow-gray-500 border-blue-400"
              : "hidden"
          }
        >
          <div className="flex flex-col lg:text-lg sm:text-sm">
            <span
              className="hover:text-red-300 lg:ml-[36rem] lg:mt-[0.5rem] sm:ml-[15rem] sm:mt-[0.5rem] text-blue-400"
              onClick={handleMinimize}
            >
               {Files.IoCloseCircle }
            </span>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-2">
              <div className="text-blue-400">
                {Files.SiPhp }
              </div>
              <div>PerHyper Preprocessor</div>
            </div>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-2">
              <div className="text-blue-400">
               {Files.FaNode }
              </div>
              <div>node js</div>
            </div>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 py-2">
              <div className="text-blue-400">
                {Files.FaLaravel }
              </div>
              <div>laravel</div>
            </div>
            <div className="flex flex-row lg:space-x-4 sm:space-x-2 lg:mx-4 sm:mx-2 py-2">
              <div className="text-blue-400">
                {Files.AiFillGithub }
              </div>
              <div>git/github</div>
            </div>
          </div>
        </div>
      </div>
      <ImageTwo />
    </div>
  );
};

export default Skills;
