import {useState} from "react";
import './training.css'
import Screen5 from './Screen5'
import AppleRunning from './AppleRunning'
import TrainingScreen from './Assets/TrainingScreen.svg'
import btnYes from './Assets/btnYes.svg'
import btnNo from './Assets/btnNo.svg'
import Strawberry from './Assets/StrawberryImg.svg'
import Bananan from './Assets/BananaImg.svg'
import Pear from './Assets/PearImg.svg'
import Apple from './Assets/AppleImg.svg'


function SectionSix(){



    var fruitCounter = 0

    var fruits = [
        Apple,
        Bananan,
        Pear,
        Apple,
        Strawberry
    ]

    const handleModalPopup = () =>{
        setTimeout(() =>{
            document.getElementById('modal').style.visibility = "hidden"
        },1300)
    }

    const [activeContentIndex, setActiveContentIndex] = useState(0);


    return(
        <div id="section-six">
            <div id="screen-5">
                <Screen5/>
            </div>
            <div id="training-screen">
                <img src={TrainingScreen} alt="training screen"/>
            </div>
            <div id="training-screen-content">
                <h1>
                    Is this an apple?
                </h1>
                <img src={fruits[activeContentIndex]}/>
            </div>
            <div id="modal">
                <h1></h1>
                <p></p>
            </div>
            <div className="buttons" id="btn-yes">
                <img src={btnYes} alt="training screen" onClick={PressedYes}/>
            </div>
            <div className="buttons" id="btn-no">
                <img src={btnNo} alt="training screen" onClick={PressedNo}/>
            </div>
            <div id="apple-running">
                <AppleRunning/>
            </div>

        </div>
    )

    function PressedYes(){
        if(activeContentIndex === 0 || activeContentIndex === 3){
            IncrementFruit()
            ShowmCorrectModal()

        }else{
            ShowIncorrectModal()
        }
    }

    function PressedNo(){
        if(activeContentIndex === 0 || activeContentIndex === 3){
            ShowIncorrectModal()

        }else{
            IncrementFruit()
            ShowmCorrectModal()
        }
    
    }

    function IncrementFruit(){
        setActiveContentIndex(activeContentIndex+1)
    }

    function ShowmCorrectModal(){
        const modal = document.getElementById('modal')
        modal.removeAttribute('class')
        modal.classList.add("correct-answer")
        modal.style.visibility = "visible"

        modal.firstChild.textContent= "Well Done"
        modal.lastChild.textContent= "Correct answers improves the model"  

        activeContentIndex !== 4 ? handleModalPopup() : ShowDone()
      
    }

    function ShowIncorrectModal(){
        const modal = document.getElementById('modal')
        modal.removeAttribute('class')
        modal.classList.add("wrong-answer")
        modal.style.visibility = "visible"

        modal.firstChild.textContent= "Be careful!"
        modal.lastChild.textContent= "Answering incorrectly affects the model negatively and worsening it"

        activeContentIndex !== 4 ? handleModalPopup() : ShowDone()

    }

    function ShowDone(){
        const modal = document.getElementById('modal')
        modal.removeAttribute('class')
        modal.classList.add("correct-answer")
        modal.style.visibility = "visible"

        modal.firstChild.textContent= "Great job!"
        modal.lastChild.textContent= "You have now successfully trained the model and it is ready for deployment"

    }
}

export default SectionSix