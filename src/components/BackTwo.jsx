import { Parallax } from "react-parallax";
import ImageTw from './graphics/imageTwo.jpg'
const ImageTwo=()=>(
    <Parallax className="relative h-80" bgImage={ImageTw}  strength={800}>
    <div className="text-lg flex text-center pt-20 px-20 components absolute justify-center">
        <div className="text-blue-400  text-4xl headertxt">No more talks!. show me the codes.</div>
    </div>
</Parallax>
)
export default ImageTwo;