import React from 'react'
import Smoke from './SmokeAnimation'
import Plane from './PlaneAnimation'
import Cloud from './Assets/Cloud2.svg'
import Cloud2 from './Assets/Cloud3.svg'
import Btn from './Assets/btn_1080.svg'
import './landingapp.css'


const LandingApp = ({resultRef}) =>{

    const HandleScroll = (e) =>{
        e.preventDefault();
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className='landing-page'>
            <div id='start-btn' >
                <button onClick={HandleScroll}> 
                <img src={Btn} alt='Start Btn'/>

                </button>
            </div>
            <div id='clouds'>
                <img id="cloud-1" src={Cloud} alt="Cloud"/>
                <img id="cloud-2" src={Cloud2} alt="Cloud"/>
                <img id="cloud-3" src={Cloud} alt="Cloud"/>
            </div>
            <div id="factory">
                <Smoke/>
            </div>
            <div id='plane'>
                <Plane/>
            </div>
        </div>
    )
}

export default LandingApp