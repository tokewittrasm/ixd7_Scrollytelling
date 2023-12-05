import React from "react";
import './preprocessing.css'
import ConverbeltTwoTube from './ConvyerbeltTwoTube'
import ConveyerbeltTwo from './ConveyerbeltTwo'
import Screen03 from './Screen03'
import ConveyerbeltThree from './ConveyerbeltThree'

function SectionFour(){
return(
<div className="Preprocessing-page">
    <div id="conveyerbelt">
        <ConverbeltTwoTube/>
    </div>
    <div id="screen-3">
        <Screen03/>
    </div>
    <div id="conveyerbelt-2">
        <ConveyerbeltTwo/>
    </div>
    <div id="conveyerbelt-3">
        <ConveyerbeltThree/>
    </div>
</div>
)
}


export default SectionFour
