import ImageOne from "./backOne";
import ImageTwo from "./BackTwo";
import Imagesvg from "./graphics/svgImage.png";
const Blogs = () => {
  return (
    <div className="text-gray-400  lg:-ml-[11.5rem] relative">
      <ImageOne />
      <div className="mx-[8rem]">
       <div className="grid grid-cols-3 gap-4 mx-4">
        <div className="px-6 py-6">
           <div className="text-md text-bold text-gray-600">Title</div>
           <div className="text-sm font-mono text-gray-600">description related to the blog</div>
           <div className="shadow-sm">
            <img src={Imagesvg} alt="image"className="h-[16rem] w-[25rem]" />
           </div>
        </div >
        <div className="px-6 py-6">
           <div className="text-md text-bold text-gray-600">Title</div>
           <div className="text-sm font-mono text-gray-600">description related to the blog</div>
           <div className="shadow-sm">
            <img src={Imagesvg} alt="image" className="h-[16rem] w-[25rem]" />
           </div>
        </div>
        <div className="px-6 py-6">
           <div className="text-md text-bold text-gray-600">Title</div>
           <div className="text-sm font-mono text-gray-600">description related to the blog</div>
           <div className="shadow-sm">
            <img src={Imagesvg} alt="image" className="h-[16rem] w-[25rem]" />
           </div>
        </div>
        <div className="px-6 py-6">
           <div className="text-md text-bold text-gray-600">Title</div>
           <div className="text-sm font-mono text-gray-600">description related to the blog</div>
           <div className="shadow-sm">
            <img src={Imagesvg} alt="image" className="h-[16rem] w-[25rem]" />
           </div>
        </div>
       </div>
      </div>
      <ImageTwo />
    </div>
  );
};

export default Blogs;
