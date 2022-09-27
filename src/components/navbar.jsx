import promage from "./graphics/promage.png"
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( <section>
      <nav className="flex fixed flex-col bg-gray-300 h-screen class space-y-6">
       <div className="h-auto flex flex-col justify-center space-y-2 items-center my-10">
         {/* top menu graphics */}

        <img src={promage} className="round border-2 border-blue-400"/>

        <div className="text-4xl font-serif">
        Benoit
        </div>
        <div className="text-lg font-mono">
          <span className="text-blue-400" >Fullstack</span>developer
        </div>
        {/* menus */}
        <div className="flex flex-col space-y-4 font-sans py-20">
          <div className="text-sm">
            <Link to="/home" className="hover:text-blue-400 hover:font-mono hover:border-b-2 hover:border-blue-300">HOME</Link>
          </div>
          <div className="text-sm">
            <Link to="/about" className="hover:text-blue-400 hover:border-b-2 hover:border-blue-300">ABOUT</Link>
          </div>
          <div className="text-sm">
            <Link to="/skills" className="hover:text-blue-400 hover:border-b-2 hover:border-blue-300">SKILLS</Link>
          </div>
          <div className="text-sm">
            <Link to="/project" className="hover:text-blue-400 hover:border-b-2 hover:border-blue-300">PROJECTS</Link>
          </div>
          <div className="text-sm">
            <Link to="/blogs" className="hover:text-blue-400 hover:border-b-2 hover:border-blue-300">BLOGS</Link>
          </div>
        </div>
        <div className="text-sm ml-4 font-sans">
          this portifolio was created by<span className=" text-blue-400 font-mono"> Benoit</span><br/>
          &copy;copyright all right resrved
        </div>
       </div>
      </nav>
</section>
    );
}

export default Navbar;