import { Parallax } from "react-parallax";
import ImageOn from "./graphics/imageone.jpg";
const ImageOne = () => (
  <Parallax className="relative h-80" bgImage={ImageOn} strength={800}>
    <div className="text-lg flex text-center py-20 px-20 components absolute justify-center">
      <div className="text-blue-400 text-4xl headertxt">
        No more talks!. show me the codes.
      </div>
    </div>
  </Parallax>
);
export default ImageOne;
