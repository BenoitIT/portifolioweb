import promage from "./graphics/promage.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import {SiBlogger} from "react-icons/si"
import React, { useState} from "react";
import {IoMdClose} from "react-icons/io";

const Navbar = ({onNavhide,onActiveMenu,active}) => {
  const navItems = [
    { id: 1, name: "Home", path: "", icon: <FaHome  size={20}/> },
    { id: 2, name: "About", path: "about", icon: <SiAboutdotme size={20}/> },
    { id: 3, name: "Skills", path: "skills", icon: <GiSkills size={20}/> },
    { id: 4, name: "Project", path: "project", icon: <AiFillProject size={20}/> },
    { id: 5, name: "Contact Us", path: "contact_us", icon: <IoIosContact size={20}/> },
    { id: 6, name: "Blog", path: "blog", icon: <SiBlogger size={20}/> }
  ];

  return (
    <section className={active!==null?"sm:hidden lg:block":"sm:h-screen"}>
      <nav className="lg:fixed flex flex-col bg-gray-300 lg:h-screen lg:w-60 class space-y-6 overflow-auto scrollbar-hide sm:relative sm:w-screen sm:space-y-2 sm:h-90">
        <div className="lg:hidden sm:block absolute right-0 hover:bg-red-300" onClick={onNavhide}><IoMdClose size={20}/></div>
        <div className="h-auto sm:flex sm:flex-col sm:justify-center lg:justify-center space-y-2 items-center my-10  lg:navbar">
          {/* top menu graphics */}

          <img src={promage} className="round border-2 border-blue-400 sm:w-20 lg:w-30"/>

          <div className="lg:text-4xl sm:text-lg font-serif">Benoit</div>
          <div className="lg:text-lg sm:text-md font-mono">
            <span className="text-blue-400">Fullstack</span>developer
          </div>
          {/* menus */}
          <div className="flex flex-col justify-center lg:space-y-4 font-sans py-20 sm:space-y-2">
            {
              navItems.map((item) => {
                return (
                  <div className="lg:text-lg space-x-2 sm:text-sm">
                    <Link key={item.id}
                    onClick={()=>onActiveMenu(item.path)}
                      to={`/${item.path}`}
                      className={active===item.path?"flex flex-row text-lg space-x-2 font-serif text-blue-800 border-b-2 border-blue-700":" flex flex-row space-x-2 font-serif hover:text-blue-400 hover:border-b-2 hover:border-blue-300"}
                    >
                      <span className={active===item.path?"text-blue-800":"text-blue-400"}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </Link>
                  </div>


                );
              })
            }
          </div>
          <div className="text-sm ml-4 font-sans sm:hidden lg:block">
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
