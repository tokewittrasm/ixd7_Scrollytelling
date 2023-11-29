import React from "react";
import './datacollection.css'
import { forwardRef } from "react";
import Conveyer from './Conveyerbelt'
import Tube from './Assets/tragt_1080.svg'
import Screen1 from './Screen1'


const SectionTwo= forwardRef((props, ref) =>{

    return(
        <div id='section-two' ref={ref}>
            <div id='lottie-conveyer'>
                <Conveyer/>
            </div>
            <div id='tube'>
                <img src={Tube} alt="Tube"/>
            </div>
            <div id="screen-1">
                <Screen1/>
            </div>
        </div>
    )
})
export default SectionTwo;
