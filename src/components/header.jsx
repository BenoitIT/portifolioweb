import {BsPersonCircle} from "react-icons/bs"
import {BiMenu} from "react-icons/bi"
const Header = ({onShowNav,nav,active}) => {
return (
    <div className={nav||active!==null? "bg-white h-20 lg:flex justify-around items-center sm:flex sm:justify-around  sm:sticky sm:top-0 sm:text-sm lg:text-xl text-black lg:sticky lg:top-0 lg:ml-[14.5rem] lg:w-[80%]":"sm:hidden lg:flex"}>
      <div className="text-2xl font-thin text-blue-500 lg:hidden sm:block" onClick={onShowNav}><BiMenu/></div>
      <div className="text-lg font-thin flex text-blue-500"><span className="mt-1"><BsPersonCircle/></span><span>login</span></div>
    </div>
  );
};

export default Header;
