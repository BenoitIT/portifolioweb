import promage from "./graphics/promage.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import {SiBlogger} from "react-icons/si"
import React, { useState} from "react";

const Navbar = () => {
  const navItems = [
    { id: 1, name: "Home", path: "", icon: <FaHome  size={20}/> },
    { id: 2, name: "About", path: "about", icon: <SiAboutdotme size={20}/> },
    { id: 3, name: "Skills", path: "skills", icon: <GiSkills size={20}/> },
    { id: 4, name: "Project", path: "project", icon: <AiFillProject size={20}/> },
    { id: 5, name: "Contact Us", path: "contact_us", icon: <IoIosContact size={20}/> },
    { id: 6, name: "Blog", path: "blog", icon: <SiBlogger size={20}/> }
  ];

   const[active,setActive]=useState("")
   const handleActive=(link)=>{
    setActive(link)
   }


  return (
    <section>
      <nav className="flex fixed flex-col bg-gray-300 h-screen class space-y-6 overflow-auto scrollbar-hide">
        <div className="h-auto flex flex-col justify-center space-y-2 items-center my-10">
          {/* top menu graphics */}

          <img src={promage} className="round border-2 border-blue-400" />

          <div className="text-4xl font-serif">Benoit</div>
          <div className="text-lg font-mono">
            <span className="text-blue-400">Fullstack</span>developer
          </div>
          {/* menus */}
          <div className="flex flex-col space-y-4 font-sans py-20">
            {
              navItems.map((item) => {
                return (
                  <div className="text-md space-x-2">
                    <Link key={item.id}
                    onClick={()=>handleActive(item.path)}
                      to={`/${item.path}`}
                      className={active===item.path?"flex flex-row text-lg space-x-2 font-serif text-blue-800 border-b-2 border-blue-700":" flex flex-row  space-x-2 font-serif hover:text-blue-400 hover:border-b-2 hover:border-blue-300"}
                    >
                      <span className={active===item.path?"text-blue-800":"text-blue-400"}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </Link>
                  </div>
                  // <Link key={item.id} to={item.page}>
                  //   {item.name}
                  // </Link>

                );
              })
            }
          </div>
          <div className="text-sm ml-4 font-sans">
            this portifolio was created by
            <span className=" text-blue-400 font-mono"> Benoit</span>
            <br />
            &copy;copyright all right resrved
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
