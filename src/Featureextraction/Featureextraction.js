import './featureextraction.css';
import React, {useEffect,useRef} from 'react';
import AppleScanComponent from "./Applescan";
import ScratchCard from 'react-scratchcard-v2';
import ScratchBox from './Assets/ExtractionFilter.svg'
import AppleHighlight from './Assets/Apple_Highlight.svg'
import Screen4 from './Screen4'
import FilterOutside from './Assets/FilterOutside.svg'
import FitlterOutsideBack from './Assets/FilterOutsideBack.svg'

//const ref = useRef<ScratchCard>(null);

function SectionFive(){
    var isDone = false
    const appleRef = useRef(null);
    const divObserver = useRef(null)


    const handleEntry = ()=>{
        if(appleRef.current) appleRef.current.EnterScreen()
    }
    const handleExit = ()=>{
        if(appleRef.current) appleRef.current.IsDone()
    }

    useEffect (()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry) => {
                if(entry.isIntersecting && !isDone){
                    handleEntry()
                    isDone = true
                }
            })
        })
        observer.observe(divObserver.current)
    })

    return (
        <div id='section-five'>
            <div id="screen-4">
                <Screen4 />
            </div>
            <div id="screen-4-modal">
                <h1>Well done!</h1>
                <p>Extracting features helps the factory recognise diffrerent fruit</p>            
            </div>
            <div id='apple-scan-belt' ref={divObserver}>
                <AppleScanComponent ref={appleRef}/>
            </div>
            <div id="scratch-container-wrapper">
                <div id="scratch-container-inner" className="sc__container">
                <img id="filter-outside"src={FilterOutside} style={{width:"400x", height:"400px"}}></img>
                <img id="filter-outside-back"src={FitlterOutsideBack} style={{width:"400x", height:"400px"}}></img>

                    <ScratchCard id="scratchcard"
                    width={400}
                    height={400}
                    image={ScratchBox}
                    finishPercent={75}
                    onComplete={()=>{
                        HideApple()
                        handleExit()
                    }}
                    >
                        <div id='sratch-backimg-container'>
                            <img id='apple-scracthed' src={AppleHighlight} style={{width:"230px", height:"230px"}}></img>
                        </div>
                    </ScratchCard>
                </div>
            </div>  
        </div> 
    )  
}


function HideApple(){
    document.getElementById('apple-scracthed').style.display = "none"
    document.getElementById('screen-4-modal').style.visibility = "visible"

}

export default SectionFive