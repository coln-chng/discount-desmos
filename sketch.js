function setup() {
  createCanvas(400, 400);
  background("black");
  let credit = createDiv("made by colin chung (2025)")
}

const inputField = document.querySelector("#input-field")
const graphButton = document.querySelector("#graph-button")
const clearButton = document.querySelector("#clear-button")

let coord = []

graphButton.addEventListener("click", graphFunction)

  function graphFunction() {
  coord = []
  let functionInput = inputField.value
  let splitFunction = functionInput.split("")
  let xIndex = []
  let x = -width / 2
      // locating x's and finding exponents  
  for (i = 0; i < splitFunction.length; i++) {
    if (splitFunction[i] === "^") {
      splitFunction[i] = "**"
    }
  }
  for (i = 0; i < splitFunction.length; i++) {      
    if (splitFunction[i] === "x") {
      xIndex.push(i)
    } 
  }  

  while (x < width / 2) {
    let evalFunction = ""

  // replacing x's with x variable
    for (i = 0; i < xIndex.length; i++) {
      splitFunction[xIndex[i]] = x
    }
    for (i = 0; i < splitFunction.length; i++) {
      evalFunction += `${splitFunction[i]}`
  }
    y = -eval?.(evalFunction)
    coord.push(x)
    coord.push(y)
    x += 1
  }
  inputField.value = ""
}

clearButton.addEventListener("click", clearGraph)

function clearGraph() {
  coord = []
  removeElements()
  setup()
}

// color buttons
const redButton = document.querySelector("#red-button")
const greenButton = document.querySelector("#green-button")
const blueButton = document.querySelector("#blue-button")
let functionColor = "red"


redButton.addEventListener("click", redStroke)
greenButton.addEventListener("click", greenStroke)
blueButton.addEventListener("click", blueStroke)

function redStroke() {
  functionColor = "red"
}

function greenStroke() {
  functionColor = "green"
}

function blueStroke() {
  functionColor = "blue"
}

function draw() {
  translate(width / 2, height / 2)
  scale(1, 1)


  // Drawing the grid

  function drawGridLinesX() {
    strokeWeight(1)
    stroke(200)
    for (let i = -width / 2; i < width / 2; i += width / 10) 
      line(i, height / 2, i, - height / 2);
   
  }
  
  function drawGridLinesY() {
    for (let i = -height / 2; i < height / 2; i += height / 10)
      line( width / 2, i, -width / 2, i);
  }
    
  function drawAxes() {
    strokeWeight(2)
    stroke("white")
    line(0, height / 2, 0, - height / 2);
    line( width / 2, 0, -width / 2, 0);
  }

  function drawNumbersX() {
    for (let i = -width / 2; i < width / 2; i += width / 10) {
      text(`${round(i)}`, i, -1)
    
    }
  }

  function drawNumbersY() {
    for (let i = -height / 2; i < height / 2; i += height / 10) {
      text(`${round(-i)}`, 1, i)
    }
  }

  function drawGrid() {
    drawGridLinesX();
    drawGridLinesY();
    drawAxes();  
    drawNumbersX();
    drawNumbersY();
  }

  drawGrid()
  

  // draw function
  function drawFunction(arr) {
    stroke(1);
    stroke(functionColor);
    for (let i = 2; i < arr.length; i += 2) {
      line(arr[i], arr[i + 1], arr[i - 2], arr[i - 1]);
    } 
  }

  if (coord.length > 3) {
    drawFunction(coord);
  }

}
