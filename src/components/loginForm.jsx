import React from 'react';
const LoginForm = () => {
    return ( <div className='lg:ml-[3.5rem] sm:mx-10 mt-20 bg-gray-100 shadow-md shadow-gray-300 rounded-md'>
        <form className='px-10 py-10'>

              <div>
                <label htmlFor="email" className="font-serif">
                  Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  className="border-2 border-gray-300 lg:w-[30rem] sm:w-[15rem] rounded h-10 text-base font-serif placeholder:text-sm placeholder:font-mono focus:outline-none"
                  id="names"
                  placeholder="enter your email"
                />
              </div>
              <div>
                <label htmlFor="names" className="font-serif">
                  password
                </label>
              </div>
              <div>
                <input
                  type="password"
                  className="border-2 border-gray-300 lg:w-[30rem] sm:w-[15rem] rounded h-10 text-base font-serif placeholder:text-sm placeholder:font-mono focus:outline-none"
                  id="names"
                  placeholder="enter your password"
                />
              </div>
              <button className="border-2 border-gray-300 lg:w-[30rem] sm:w-[15rem] font-serif rounded h-10 lg:text-base sm:text-sm bg-blue-400 text-white mt-4">
                sign in
              </button>
              </form>
    </div>
    );
}

export default LoginForm;