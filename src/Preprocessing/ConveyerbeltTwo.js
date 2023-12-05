import { useLottie, useLottieInteractivity } from "lottie-react";
import Conveyer from './Assets/Conveyorbelt02Roterende.json'

const style = {
    width : "100%"
  };
  
  const options = {
    animationData: Conveyer,
  };
  
  const Example = () => {
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
      lottieObj,
      mode: "scroll",
      actions: [
        {
          visibility: [0, 1],
          type: "seek",
          frames: [0, 200],
        },
      ],
    });
  
    return Animation;
  };
  
  export default Example;