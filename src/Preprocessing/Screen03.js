import Screen from './Assets/Screen03.json'
import { useLottie, useLottieInteractivity } from "lottie-react";

const options = {
    animationData: Screen,
    loop : false
  };

const style = {
  width: "90%"
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
          visibility: [0.20, 1],
          type: "play",
          frames: [0, 38],
        },
      ],
    });
  
    return Animation;
  };

  export default TextLottie