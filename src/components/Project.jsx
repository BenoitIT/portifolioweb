import ImageOne from "./backOne";
import ImageTwo from "./BackTwo";
import Imagesvg from "./graphics/svgImage.png";
import { DiPhp } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
const Project = () => {
  return (
    <div className="text-gray-400  lg:-ml-[4rem] relative">
      <ImageOne />
      <div className="mx-[8rem]">
        <div className="font-serif lg:text-4xl sm:text-xl pt-5 lg:mx-0 sm:ml-[3rem]">
          Projects made
        </div>
        <div className="lg:text-xl sm:text-sm text-gray-400 font-serif my-4 pt-4 lg:mx-0 sm:ml-[3rem]">
          working achievementd and accomplishment
        </div>
        <div className="flex lg:flex-row space-x-4 items-center my-4 sm:flex-col">
          <div className="font-serif lg:w-2/4 sm:w-4/4">
            <div className="bg-white border-1 flex justify-start rounded-xl shadow-md sm:ml-10 my-6">
              <span className="lg:mx-2 lg:w-3/4 sm:text-sm lg:text-xl sm:ml-4">
                complete procedure of software development from requirement
                gathering to testing and maintenance, carried out according to
                the execution methodologies, in a specified period of time to
                achieve intended software product
              </span>
            </div>
            <div className="flex flex-col space-y-8 items-center justify-center">
              <div className="lg:text-xl text-blue-400 font-serif sm:text-sm">
                Accomplishments
              </div>
              <div className="flex ">
                <div className="flex flex-col mx-4">
                  <div className="lg:text-lg sm:tex-sm text-center font-bold">
                    +3
                  </div>
                  <div className="lg:text-xl sm:text-xs text-center font-serif">
                    projects <br />
                    completed
                  </div>
                </div>
                <div className="flex flex-col mx-4">
                  <div className="lg:text-lg sm:tex-sm text-center font-bold">
                    +2
                  </div>
                  <div className="lg:text-xl sm:text-xs text-center font-serif">
                    company <br />
                    satisfied
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="lg:text-lg sm:tex-sm text-center font-bold">
                    +15
                  </div>
                  <div className="lg:text-xl sm:text-xs text-center font-serif">
                    prototypes
                    <br /> completed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-20 ">
            <img
              src={Imagesvg}
              className="lg:h-[30rem] sm:h-[12rem] rounded-xl shadow-gray-100 shadow-xl opacity-75 mx-10 bg-white"
            />
          </div>
        </div>
        <div className="absolute top-[50rem] right-[10rem] bg-blue-400 text-white rotate-45 animate-ping lg:block sm:hidden ">
          <div className="rotate-2">
            <DiPhp size={30} />
          </div>
        </div>
        <div className="absolute top-[50rem] right-[15rem] bg-blue-400 text-white rotate-45 border-2 animate-ping lg:block sm:hidden">
          <SiCss3 size={30} />
        </div>
        <div className="absolute top-[40rem] right-[10rem] bg-blue-400 text-white rotate-45 border-2 animate-bounce lg:block sm:hidden">
          <SiJavascript size={30} />
        </div>
        <div className="absolute top-[40rem] right-[15rem] bg-blue-400 text-white rotate-45 border-2 animate-bounce lg:block sm:hidden">
          <SiHtml5 size={30} />
        </div>
      </div>
      <ImageTwo />
    </div>
  );
};

export default Project;
