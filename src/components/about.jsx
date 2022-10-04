import ImageOne from "./backOne";
import ImageTwo from "./BackTwo";
import Files from "./files";
const About = () => {
  return (
    <div className="text-gray-400 sm:ml-[-6rem] lg:ml-[-0.8rem]">
      <ImageOne />
      <div className="lg:mx-20 sm:mx-2">
        <div className="font-serif  pt-5 lg:ml-20 sm:ml-[11rem]">ABAUT-US</div>
        <div className="font-medium text-gray-400  my-4 lg:mx-20 sm:ml-[11rem]">who I am</div>
        <div className="font-serif lg:w-3/4 lg:mx-20 sm:ml-[11rem] sm:w-2/4 lg:text-lg sm:text-sm">
          Save time in Word with new buttons that show up where you need them.
          To change the way a picture fits in your document, click it and a
          button for layout options appears next to it. When you work on a
          table, click where you want to add a row or a column, and then click
          the plus sign Reading is easier, too, in the new Reading view. You can
          collapse parts of the document and focus on the text you want
        </div>
        <div
          className="lg:flex lg:flex-row space-x-4 my-10 sm:flex sm:flex-col sm:space-y-2 lg:ml-20 sm:ml-[10rem] sm:mr-[2rem]"
        >
          <div className="rounded shadow-md shadow-gray-500  border-blue-400  lg:w-1/4 sm:w-3/4 lg:ml-4 sm:ml-4">
            <div className=" pt-[6rem] pb-[3rem] border-2 flex flex-col space-y-2 lg:text-lg sm:text-sm items-center justify-center bg-white">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                  {Files.GiNetworkBars}
                </div>
                <span>seek for improvements</span>
              </div>
              <div className="flex flex-row justify-center space-x-2">
                <div className="hover:text-blue-600 text-blue-400">
                   {Files.SiNintendonetwork}
                </div>
                <span className="mx-1">new technology researcher</span>
              </div>
            </div>

          </div>
          <div className="rounded shadow-md shadow-gray-500 border-blue-400 lg:w-1/4 sm:w-3/4 sm:mx-[-5rem]" >
          <div className=" py-20 border-2 flex flex-col space-y-2 lg:text-lg sm:text-sm items-center justify-center bg-white ">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                  {Files.RiTeamLine }
                </div>
                <span>Team work</span>
              </div>
              <div className="flex flex-row justify-center space-x-2">
                <div className="hover:text-blue-600 text-blue-400">
                  {Files.SiGotomeeting}
                </div>
                <span className="mx-1">Networking</span>
              </div>
            </div>

          </div>
          <div className="rounded shadow-md shadow-gray-500  lg:w-1/4 sm:w-3/4 border-blue-400">
          <div className=" py-20 border-2 flex flex-col space-y-2 lg:text-lg sm:text-sm items-center justify-center bg-white">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                {Files.MdSyncProblem }
                </div>
                <span>love for challenges</span>
              </div>
              <div className="flex lg:flex-row justify-center space-x-2">
                <div className="hover:text-blue-600 text-blue-400">
                  {Files.BiCollapse }
                </div>
                <span className="mx-1">consistent</span>
              </div>
            </div>
             </div>

          <div className="rounded shadow-md shadow-gray-500 border-blue-400 lg:w-1/4 sm:w-3/4" >
          <div className=" py-20 border-2 flex flex-col space-y-2 lg:text-lg sm:text-sm items-center justify-center bg-white">
              <div className="flex flex-row justify-center space-x-2 text-center">
                <div className="hover:text-blue-600 text-blue-400 ">
                   {Files.SiFuturelearn }
                </div>
                <span>search for skills</span>
              </div>
              <div className="flex flex-row justify-center space-x-2">
                <div className="hover:text-blue-600 text-blue-400">
                   {Files.RiMiniProgramFill }
                </div>
                <span className="mx-1">new technology</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <ImageTwo />
    </div>
  );
};

export default About;
