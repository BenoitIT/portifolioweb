import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import { Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/contact";
import Header from "./components/header";
function App() {
  const [nav, setNav] = useState(false);
  const SetHiddenNav = () => {
    setNav(true);
  };
  const[active,setActive]=useState(null)
   const handleActive=(link)=>{
    setActive(link)
   }
   const showNav=()=>{
    setNav(false)
    setActive(null)
  }

  return (
    <div className="lg:flex lg:flex-row space-x-2 w-screen sm:flex sm:flex-col space-y-2 relative">
      <div className={nav ? "sm:hidden lg:block" : "navbar"}>
        {/* <Navbar/> */}
        <Navbar onNavhide={SetHiddenNav} onActiveMenu={handleActive} active={active}/>
      </div>
      <div className="lg:flex-col">
        <div className={nav||active!==null? "block sm:sticky top-0 left-0":"sm:hidden lg:block"}>
        <Header onShowNav={showNav} nav={nav} active={active}/>
        </div>


        <div id="routes" className="lg:h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/contact_us" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
