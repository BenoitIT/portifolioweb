import React from 'react'
import ImageOne from "./backOne";
import ImageTwo from "./BackTwo";
import { ImDatabase } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { SiNodedotjs } from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {SiMysql} from "react-icons/si";
import {SiPostgresql} from "react-icons/si";
import {IoCloseCircle} from "react-icons/io5";
import {AiFillHtml5} from "react-icons/ai";
import {SiTailwindcss} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import{AiFillGithub} from "react-icons/ai";
import {SiPhp}from "react-icons/si";
import {FaNode} from"react-icons/fa";
import {FaLaravel} from "react-icons/fa"
const Skills = () => {
    const[moreDb,setMoreDb]=React.useState(false)
    const [moreFrontEnd,setMoreFrontEnd]=React.useState(false)
    const [moreBkend,setMoreBkend]=React.useState(false)
    const MoreBoutDb=()=>{
        setMoreDb(true)
    }
    const HandleMoreFrontEnd=()=>{
      setMoreFrontEnd(true)
    }
    const handleMoreBkend=()=>{
    setMoreBkend(true)
    }
    const handleMinimize=()=>{
        setMoreDb(false)
        setMoreFrontEnd(false)
        setMoreBkend(false)
    }
  return (
    <div className="text-gray-400 componentskill relative">
      <ImageOne />
      <div className={moreDb?"mx-20 bg-opacity-25":"mx-20"}>
        <div className="font-serif text-4xl pt-5">SKILLS</div>
        <div className="font-medium text-gray-400  my-4">
          what I am able to do
        </div>
        <div className={moreDb||moreFrontEnd||moreBkend?"opacity-10":"font-serif w-3/4 "}>
          Computer programmer skills often combine creativity with technical and
          analytical elements. In many ways, programming represents a perfect
          merging of art and science.
        </div>
        <div className={moreDb||moreFrontEnd||moreBkend?"opacity-10 flex flex-row space-x-8 my-10":"flex flex-row space-x-8 my-10"}>
          <div className="rounded shadow-md shadow-gray-500  border-blue-400  w-1/4">
            <div className=" pt-20 pb-10 border-2 flex flex-col space-y-8 text-sm items-center justify-center bg-white">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                  <SiNodedotjs size={30} />
                </div>
                <span className="mt-2">Backend Development</span>
              </div>
              <button className="px-4 py-2 bg-blue-400 rounded-xl text-white hover:bg-white hover:text-blue-400  hover:border-blue-400 hover:border-2" onClick={handleMoreBkend}>
                view more
              </button>
            </div>
          </div>
          <div className="rounded shadow-md shadow-gray-500 border-blue-400 w-1/4">
            <div className=" pt-20 pb-10 border-2 flex flex-col space-y-8 text-sm items-center justify-center bg-white">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                  <CgWebsite size={30} />
                </div>
                <span className="mt-2">Front-end development</span>
              </div>
              <button className="px-4 py-2 bg-blue-400 rounded-xl text-white hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2" onClick={HandleMoreFrontEnd}>
                view more
              </button>
            </div>
          </div>
          <div className="rounded shadow-md shadow-gray-500  w-1/4  border-blue-400">
            <div className=" pt-20 pb-10 border-2 flex flex-col space-y-8  text-sm items-center justify-center bg-white">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                  <ImDatabase size={30} />
                </div>
                <span className="mt-2">DataBase technology</span>
              </div>
              <button className="px-4 py-2 bg-blue-400 rounded-xl text-white hover:bg-white hover:text-blue-400  hover:border-blue-400 hover:border-2" onClick={MoreBoutDb}>
                view more
              </button>
            </div>
           </div>
        </div>
        {/*more about database*/}
        <div className={moreDb?"bg-gray-100 w-2/4 skills border-2 shadow-md shadow-gray-500 border-blue-400":"hidden"}>
             <div className="flex flex-col">
             <span className="hover:text-red-300 close text-blue-400" onClick={handleMinimize}><IoCloseCircle size={20}/></span>
                <div className="flex flex-row space-x-4 mx-4 py-4">
                <div className="text-blue-400"><SiMongodb size={30}/></div>
                  <div>MongoDb technology</div>
                </div>
                <div className="flex flex-row space-x-4 mx-4 py-4">
                  <div className="text-blue-400"><SiMysql size={30}/></div>
                  <div>Mysql database technology</div>
                </div>
                <div className="flex flex-row space-x-4 mx-4 py-4">
                  <div className="text-blue-400"><SiPostgresql size={30}/></div>
                  <div>cloud postgres database technology</div>
                </div>
             </div>
            </div>
             {/*more about front end*/}
            <div className={moreFrontEnd?"bg-gray-100 w-2/4 skills border-2 shadow-md shadow-gray-500 border-blue-400":"hidden"}>
             <div className="flex flex-col">
             <span className="hover:text-red-300 close text-blue-400" onClick={handleMinimize}><IoCloseCircle size={20}/></span>
                <div className="flex flex-row space-x-4 mx-4 py-2">
                <div className="text-blue-400"><AiFillHtml5 size={30}/></div>
                  <div>HyperText Markup language 5</div>
                </div>
                <div className="flex flex-row space-x-4 mx-4 py-2">
                  <div className="text-blue-400"><SiTailwindcss size={30}/></div>
                  <div>Tailwind css</div>
                </div>
                <div className="flex flex-row space-x-4 mx-4 py-2">
                  <div className="text-blue-400"><FaReact size={30}/></div>
                  <div>React js</div>
                </div>
                <div className="flex flex-row space-x-4 mx-4 py-2">
                  <div className="text-blue-400"><AiFillGithub size={30}/></div>
                  <div>git/github</div>
                </div>
             </div>
            </div>
             {/*more about backend end*/}
             <div className={moreBkend?"bg-gray-100 w-2/4 skills border-2 shadow-md shadow-gray-500 border-blue-400":"hidden"}>
             <div className="flex flex-col">
             <span className="hover:text-red-300 close text-blue-400" onClick={handleMinimize}><IoCloseCircle size={20}/></span>
                <div className="flex flex-row space-x-4 mx-4 py-2">
                <div className="text-blue-400"><SiPhp size={30}/></div>
                  <div>PerHyper Preprocessor</div>
                </div>
                <div className="flex flex-row space-x-4 mx-4 py-2">
                  <div className="text-blue-400"><FaNode size={30}/></div>
                  <div>node js</div>
                </div>
                <div className="flex flex-row space-x-4 mx-4 py-2">
                  <div className="text-blue-400"><FaLaravel size={30}/></div>
                  <div>laravel</div>
                </div>
                <div className="flex flex-row space-x-4 mx-4 py-2">
                  <div className="text-blue-400"><AiFillGithub size={30}/></div>
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
