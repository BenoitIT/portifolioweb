import { Parallax } from "react-parallax";
import ImageOn from "./graphics/imageone.jpg";
const ImageOne = () => (
  <Parallax className="relative h-80" bgImage={ImageOn} strength={800}>
    <div className="text-lg text-gray-700 flex text-center pt-20 px-20 components absolute justify-center">
      <div className="text-white text-4xl px-20">
        No more talks!. show me the codes.
      </div>
    </div>
  </Parallax>
);
export default ImageOne;
