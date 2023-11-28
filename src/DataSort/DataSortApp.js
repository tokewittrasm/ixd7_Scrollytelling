import React from "react";
import './datasortapp.css'
import interact from 'interactjs'
import Strawberry from './Assets/Strawberry_tract.svg'
import Peach from './Assets/Peach_tract.svg'
import Banana from './Assets/Banana_tract.svg'
import Pear from './Assets/Pear_tract.svg'
import Apple from './Assets/Apple_tract.svg'
import StrawberryImg from './Assets/StrawberryImg.svg'
import PeachImg from './Assets/PeachImg.svg'
import BananaImg from './Assets/BananaImg.svg'
import PearImg from './Assets/PearImg.svg'
import AppleImg from './Assets/AppleImg.svg'
import Screen2 from './Screen2'


var fruitCounter = 0

var fruits = [
  PeachImg,
  PearImg,
  StrawberryImg,
  BananaImg,
  AppleImg
]

var fruitClasses = [
  "peach",
  "pear",
  "strawberry",
  "banana",
  "apple"
]


function SectionThree() {
  return (
    <div id="section-three">
      <div className="guess-fruit" id={fruitClasses[fruitCounter]}>
        <img src={ChangeFruit(fruitCounter)} id="guess-fruit-id" alt="Screen 2" />
      </div>
      <div id="screen-2">
        <Screen2 />
      </div>
      <div id="tubes">
        <div className="tubes" id="strawberry-tube">
          <div className="hitbox" id="strawberrybox"></div>
          <img src={Strawberry} alt="Strawbery" />
        </div>
        <div className="tubes" id="peach-tube">
          <div className="hitbox" id="peachbox"></div>
          <img src={Peach} alt="Peach" />
        </div>
        <div className="tubes" id="banana-tube">
          <div className="hitbox" id="bananabox"></div>
          <img src={Banana} alt="Banana" />
        </div>
        <div className="tubes" id="pear-tube">
          <div className="hitbox" id="pearbox"></div>
          <img src={Pear} alt="Pear" />
        </div>
        <div className="apple" id="apple-tube">
          <div className="hitbox" id="applebox"></div>
          <img src={Apple} alt="Apple" />
        </div>
      </div>
      <div id="fruit-modal-correct" className="modal">
        <div className="modal-content">
          <h1>Well done!</h1>
          <p id="model-content-corret">Good job, sorting the fruit correctly, helps the factory to recognize each fruit</p>
        </div>
      </div>
      <div id="fruit-modal-incorrect" className="modal">
        <div className="modal-content" id="modal-incorrect">
          <h1>Oh no!</h1>
          <p>Be careful, incorrectly sorting the fruits impacts the factory negatively</p>
        </div>
      </div>
    </div>
  )
}

function ChangeFruit(fruitCounter) {
  return fruits[fruitCounter]
}


interact('#strawberrybox').dropzone({
  accept: ".guess-fruit",
  overlap: 0.75,

  ondrop: function (event) {
    if (event.relatedTarget.id === "strawberry") {
      IncrementFruit()
      event.relatedTarget.removeAttribute('id')
      event.relatedTarget.id = fruitClasses[fruitCounter]
      document.getElementById('fruit-modal-correct').style.display = 'block'
    }else {
      document.getElementById('fruit-modal-incorrect').style.display = 'block'
    }
    ResetFruitLocation()
  }
})

interact('#peachbox').dropzone({
  accept: ".guess-fruit",
  overlap: 0.75,

  ondrop: function (event) {
    if (event.relatedTarget.id === "peach") {
      IncrementFruit()
      event.relatedTarget.removeAttribute('id')
      event.relatedTarget.id = fruitClasses[fruitCounter]
      document.getElementById('fruit-modal-correct').style.display = 'block'
    } else {
      document.getElementById('fruit-modal-incorrect').style.display = 'block'
    }
    ResetFruitLocation()
  }
})

interact('#bananabox').dropzone({
  accept: ".guess-fruit",
  overlap: 0.75,

  ondrop: function (event) {
    if (event.relatedTarget.id === "banana") {
      IncrementFruit()
      event.relatedTarget.removeAttribute('id')
      event.relatedTarget.id = fruitClasses[fruitCounter]
      document.getElementById('fruit-modal-correct').style.display = 'block'
    } else {
      document.getElementById('fruit-modal-incorrect').style.display = 'block'
    }
    ResetFruitLocation()
  }
})

interact('#pearbox').dropzone({
  accept: ".guess-fruit",
  overlap: 0.75,

  ondrop: function (event) {
    if (event.relatedTarget.id === "pear") {
      IncrementFruit()
      event.relatedTarget.removeAttribute('id')
      event.relatedTarget.id = fruitClasses[fruitCounter]
      document.getElementById('fruit-modal-correct').style.display = 'block'
    } else {
      document.getElementById('fruit-modal-incorrect').style.display = 'block'
    }
    ResetFruitLocation()
  }
})

interact('#applebox').dropzone({
  accept: ".guess-fruit",
  overlap: 0.75,

  ondrop: function (event) {
    if (event.relatedTarget.id === "apple") {
      IncrementFruit()
      event.relatedTarget.removeAttribute('id')
      event.relatedTarget.id = fruitClasses[fruitCounter]
      document.getElementById('fruit-modal-correct').style.display = 'block'
    } else {
      document.getElementById('fruit-modal-incorrect').style.display = 'block'
    }
  }
})


function IncrementFruit() {
  fruitCounter++

  if (fruitCounter >= 5) {
    document.getElementById('apple').style.visibility = "hidden"
    document.getElementById('model-content-corret').textContent = "The fruit are now sorted correctly"
  }
  document.getElementById('guess-fruit-id').src = ChangeFruit(fruitCounter)
}


function ResetFruitLocation() {
  const el = document.getElementsByClassName('guess-fruit')
  const requiredEL = el[0]

  requiredEL.style = { transform: 'none' }

  requiredEL.setAttribute('data-x', 0)
  requiredEL.setAttribute('data-y', 0)
}

// target elements with the "draggable" class
interact('.guess-fruit')
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

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener


export default SectionThree