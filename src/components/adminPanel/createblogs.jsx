import React from "react"
const CreateBlog = () => {
  return (
    <div className="lg:ml-[3.5rem] sm:mx-10 mt-20 bg-gray-100 shadow-md shadow-gray-300 rounded-md">
      <form className="px-10 py-10">
        <div>
          <label htmlFor="title" className="font-serif">
            blog_Title
          </label>
        </div>
        <div>
          <input
            type="text"
            className="border-2 border-gray-300 lg:w-[30rem] sm:w-[15rem] rounded h-10 text-base font-serif placeholder:text-sm placeholder:font-mono focus:outline-none"
            id="title"
            placeholder="enter your title"
          />
        </div>
        <div>
          <label htmlFor="description" className="font-serif">
            description
          </label>
        </div>
        <div>
          <textarea
            className="border-2 border-gray-300 lg:w-[30rem] sm:w-[15rem] rounded  text-base font-serif placeholder:text-sm placeholder:font-mono focus:outline-none"
            id="names"
            placeholder="describe your blog"
          ></textarea>
        </div>
        <div>
          <input
            type="file"
            id="myfile"
            name="myfile"
            className="border-1 border-gray-300 lg:w-[12rem] sm:w-[8rem] font-serif rounded h-6 lg:text-base sm:text-sm bg-blue-400 text-white mt-2"
          />
        </div>
        <button className="border-2 border-gray-300 lg:w-[30rem] sm:w-[15rem] font-serif rounded h-10 lg:text-base sm:text-sm bg-blue-400 text-white mt-4">
          sign in
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
