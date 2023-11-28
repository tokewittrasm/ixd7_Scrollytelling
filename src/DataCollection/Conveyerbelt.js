import { useLottie, useLottieInteractivity } from "lottie-react";
import Conveyer from './Assets/Conveyor_belt.json'

const style = {
    height: 420,
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
          frames: [0, 350],
        },
      ],
    });
  
    return Animation;
  };
  
  export default Example;