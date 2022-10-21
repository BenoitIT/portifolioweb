import ImageOne from "./backOne"
import ImageTwo from "./BackTwo"
import CreateBlog from "./createblogs"
import Messages from "./viewMessages";
const Blogs = () => {
  return (
    <div className="text-gray-400  lg:-ml-[10rem] relative">
      <ImageOne />
      <div className="mx-[8rem]">
       <CreateBlog/>
       <Messages/>
      </div>
      <ImageTwo />
    </div>
  );
};

export default Blogs;
