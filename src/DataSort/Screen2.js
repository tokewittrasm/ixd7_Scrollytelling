import Screen from './Assets/Screen02.json'
import { useLottie, useLottieInteractivity } from "lottie-react";

const options = {
    animationData: Screen,
    loop : false
  };

const style = {
    height: "700px",
    width: "700px"
};


const TextLottie = () =>{
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
      lottieObj,
      mode: "scroll",
      actions: [
        {
          visibility: [1, 1],
          type: "stop",
          frames: [0],
        },
        {
          visibility: [0.50, 1],
          type: "play",
          frames: [0, 38],
        },
      ],
    });
  
    return Animation;
  };

  export default TextLottie
