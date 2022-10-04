import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { SiBlogger } from "react-icons/si";
const NavItems = [
  { id: 1, name: "Home", path: "", icon: <FaHome size={20} /> },
  { id: 2, name: "About", path: "about", icon: <SiAboutdotme size={20} /> },
  { id: 3, name: "Skills", path: "skills", icon: <GiSkills size={20} /> },
  {
    id: 4,
    name: "Project",
    path: "project",
    icon: <AiFillProject size={20} />,
  },
  {
    id: 5,
    name: "Contact Us",
    path: "contact_us",
    icon: <IoIosContact size={20} />,
  },
  { id: 6, name: "Blog", path: "blog", icon: <SiBlogger size={20} /> },
];
export default NavItems;
