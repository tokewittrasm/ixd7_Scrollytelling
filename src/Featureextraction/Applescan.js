import Lottie from "lottie-react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import AppleScan from "./Assets/AppleScanBelt.json";



const AppleScanComponent = forwardRef(function AppleScanComponent(_,ref) {
  const domRef = useRef(null)

  useImperativeHandle(ref, ()=>{
    return{
      pause(){
        if(!domRef.current) return
        domRef.current.pause()
      },
      EnterScreen(){
        domRef.current.setSpeed(2)
        domRef.current.playSegments([0,180], true)
      },
      IsDone(){
        domRef.current.playSegments([180,360], true)

      }
    }
  })


  return <Lottie
            lottieRef={domRef}
            animationData={AppleScan}
            loop ={false}
        />;
});

export default AppleScanComponent;