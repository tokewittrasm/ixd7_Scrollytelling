import React from "react";
import './testing.css';
import interact from 'interactjs'
import Screen6 from './Screen6'
import Plate from './Assets/Plate_Test.svg'
import Light from './Assets/Test_Highligt.svg'
import Conveyer from './Assets/ConveyerSectionSeven.svg'
import Strawberry from './Assets/StrawberryImg.svg'
import Bananan from './Assets/BananaImg.svg'
import Pear from './Assets/PearImg.svg'
import Apple from './Assets/AppleImg.svg'
import Peach from './Assets/PeachImg.svg'
import { FRUITS } from "./FruitScreen";



function SectionSeven(){
    return(
  
        <div id="section-seven">
            <div id="screen-6">
                <Screen6/>
            </div>
            <div id="plate">
                <img src={Plate} alt="plateImage"/>
            </div>
            <div id="light">
                <img src={Light} alt="LightImage"/>
            </div>
            <div id="conveyer">
                <img src={Conveyer} alt="ConveyerImage"/>
            </div>

            <div className="fruit" id="apple">
                <img src={Apple} alt="FruitImage"/>
            </div>
            <div className="fruit" id="banana">
                <img src={Bananan} alt="FruitImage"/>
            </div>
            <div className="fruit" id="pear">
                <img src={Pear} alt="FruitImage"/>
            </div>
            <div className="fruit" id="peach">
                <img src={Peach} alt="FruitImage"/>
            </div>
            <div className="fruit" id="strawberry">
                <img src={Strawberry} alt="FruitImage"/>
            </div>
            <div id="hitbox"></div>
            <div id="infoscreen">
              <img id="infoscreen-image"src="" alt="infoscreen"/>
            </div>
        </div>
    )
}

interact('.fruit')
  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: false,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  })

  function dragMoveListener(event) {
    document.getElementById('fruit-modal-correct').style.display = 'none'
    document.getElementById('fruit-modal-incorrect').style.display = 'none'
  
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
  
    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }

  
  interact('#hitbox').dropzone({
    accept: ".fruit",
    overlap: 0.75,
  
    ondragenter: function (event) {
      const imageDiv = document.getElementById('infoscreen-image')
      const fruit = event.relatedTarget
      const selectedScreen = findArrayElementByTitle(FRUITS, fruit.id)

      imageDiv.src = selectedScreen.Image
      imageDiv.style.visibility = "visible"
    },
    ondragleave:function(event){
      document.getElementById('infoscreen-image').style.visibility = "hidden"

    },
    ondrop: function (event) {
     const selectedFruit = event.relatedTarget
     selectedFruit.style = { transform: 'none' }
     selectedFruit.setAttribute('data-x', 0)
     selectedFruit.setAttribute('data-y', 0)
    
     document.getElementById('infoscreen-image').style.visibility = "hidden"

  }})



  window.dragMoveListener = dragMoveListener


  function findArrayElementByTitle(array, title) {
    return array.find((element) => {
      return element.id === title;
    })
  }

export default SectionSeven