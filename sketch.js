function setup() {
  createCanvas(400, 400);

}

  const inputField = document.querySelector("#input-field")
  const graphButton = document.querySelector("#graph-button")
  let coord = []

  graphButton.addEventListener("click", graphFunction)

    function graphFunction() {
    let functionInput = inputField.value
    let splitFunction = functionInput.split("")
    let xIndex = splitFunction.indexOf("x")
    let x = -width / 2
    while (x < width / 2) {
      let evalFunction = ""
      splitFunction[xIndex] = x
      for (i = 0; i < splitFunction.length; i++) {
        evalFunction += `${splitFunction[i]}`
    } 
      y = -eval?.(evalFunction)
      coord.push(x)
      coord.push(y)
      x += 10
    }
    inputField.value = ""
  }
   

function draw() {
  translate(width / 2, height / 2)
  scale(1, 1)
  background("black");

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

  fill("green")
  noStroke()


  // draw function points
  function drawCircle(arr) {
    for (let i = 0; i < arr.length; i += 2) {
      var circleX = arr[i]
      var circleY = arr[i + 1]
      circle(circleX, circleY, 10)
    }

  }

  drawCircle(coord)


}

