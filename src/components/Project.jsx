import ImageOne from "./backOne";
import ImageTwo from "./BackTwo";
import Imagesvg from "./graphics/svgImage.png";
import {DiPhp} from "react-icons/di";
import {SiCss3} from "react-icons/si";
import {SiJavascript} from "react-icons/si";
import{SiHtml5} from "react-icons/si";
const Project = () => {
  return (
    <div className="text-gray-400 components relative">
      <ImageOne />
      <div className="mx-20">
        <div className="font-serif text-4xl pt-5">Projects made</div>
        <div className="font-medium text-gray-400  my-4">
          working achievementd and accomplishment
        </div>
        <div className="font-serif w-3/4 ">
          complete procedure of software development from requirement gathering
          to testing and maintenance, carried out according to the execution
          methodologies, in a specified period of time to achieve intended
          software product
        </div>
        <div className="flex flex-row space-x-4 my-4">
          <div className="flex flex-col justify-center font-serif space-y-2">


            <div className="flex space-x-60">
              <div className="flex flex-col space-y-4 items-center justify-center">
              <div className="text-2xl text-blue-400">Accomplishments</div>
           <div className="flex space-x-4 items-center">
              <div className="flex flex-col mx-4">
                <div className="text-lg text-center font-bold">+3</div>
                <div className="text-sm text-center">projects <br/>
                completed</div>
              </div>
              <div className="flex flex-col">
                <div className="text-lg text-center font-bold">+15</div>
                <div className="text-sm text-center">prototypes
                <br/> completed</div>
              </div>
              </div>
              </div>
              <div className="mx-20">
               <img src={Imagesvg} className="h-80 w-80 rounded-full"/>
              </div>
            </div>
            <div className="phpdiv bg-blue-400 text-white rotate-45 animate-ping ">
              <div className="rotate-2"><DiPhp size={30}/></div>
            </div>
            <div className="Cssdiv bg-blue-400 text-white rotate-45 border-2 animate-ping">
              <SiCss3 size={30}/>
            </div>
            <div className="Jsdiv bg-blue-400 text-white rotate-45 border-2 animate-bounce">
              <SiJavascript size={30}/>
            </div>
            <div className="HTMLdiv bg-blue-400 text-white rotate-45 border-2 animate-bounce">
              <SiHtml5 size={30}/>
            </div>
          </div>
        </div>
      </div>
      <ImageTwo />
    </div>
  );
};

export default Project;
