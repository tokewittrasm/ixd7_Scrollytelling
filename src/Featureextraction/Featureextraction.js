import './featureextraction.css'
import React, { useRef }  from 'react';
import ScratchCard from 'react-scratchcard-v2';
import RedRectangle from './Assets/red_rectangle.svg'
import BlackRectangle from './Assets/black_rectangle.svg'
import Stepf from './Assets/Steph.svg'

const ref = useRef<ScratchCard>(null);

function SectionFive(){
           
    return (
        <div id="section-five">
            <div id="scratch-container-wrapper">
                <div id="scratch-container-inner" className="sc__container">
                    <ScratchCard
                    width={800}
                    height={800}
                    image={RedRectangle}
                    finishPercent={90}
                    onComplete={console.log("HEYOOOO")}
                    customBrush={{
                        image : BlackRectangle,
                        width:60,
                        height:60
                    }}
                    >
                        <div id='sratch-backimg-container'>
                            <img src={Stepf} style={{width:"800px", height:"800px"}}></img>
                        </div>
                    </ScratchCard>
                </div>
            </div>
        </div>
    )
}
export default SectionFive