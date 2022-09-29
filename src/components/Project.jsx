import ImageOne from "./backOne";
import ImageTwo from "./BackTwo";
import Imagesvg from "./graphics/svgImage.png";
import { DiPhp } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
const Project = () => {
  return (
    <div className="text-gray-400 components relative">
      <ImageOne />
      <div className="mx-20">
        <div className="font-serif text-2xl pt-5">Projects made</div>
        <div className="font-medium text-gray-400 font-mono my-4">
          working achievementd and accomplishment
        </div>
        <div className="flex space-x-4 items-center my-4">
          <div className="font-serif w-2/4 ">
            <div className="bg-white border-1 flex justify-start rounded-xl shadow-md my-6">
              <span className="mx-2 w-3/4 font-mono">
                complete procedure of software development from requirement
                gathering to testing and maintenance, carried out according to
                the execution methodologies, in a specified period of time to
                achieve intended software product
              </span>
            </div>
            <div className="flex flex-col space-y-8 items-center justify-center">
              <div className="text-2xl text-blue-400 font-mono">
                Accomplishments
              </div>
              <div className="flex font-mono">
                <div className="flex flex-col mx-4">
                  <div className="text-lg text-center font-bold">+3</div>
                  <div className="text-sm text-center">
                    projects <br />
                    completed
                  </div>
                </div>
                <div className="flex flex-col mx-4">
                  <div className="text-lg text-center font-bold">+2</div>
                  <div className="text-sm text-center">
                    company <br />
                    satisfied
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg text-center font-bold">+15</div>
                  <div className="text-sm text-center">
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
              className="h-90 rounded-xl shadow-blue-500 shadow-2xl opacity-75 mx-10 bg-gray-100"
            />
          </div>
        </div>
        <div className="phpdiv bg-blue-400 text-white rotate-45 animate-ping ">
          <div className="rotate-2">
            <DiPhp size={30} />
          </div>
        </div>
        <div className="Cssdiv bg-blue-400 text-white rotate-45 border-2 animate-ping">
          <SiCss3 size={30} />
        </div>
        <div className="Jsdiv bg-blue-400 text-white rotate-45 border-2 animate-bounce">
          <SiJavascript size={30} />
        </div>
        <div className="HTMLdiv bg-blue-400 text-white rotate-45 border-2 animate-bounce">
          <SiHtml5 size={30} />
        </div>
      </div>
      <ImageTwo />
    </div>
  );
};

export default Project;
