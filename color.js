var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("Selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    //generate 3 random colors and populate array
    colors = generateRandomColors(numSquares); 
    pickedColor = pickColor(); //randomly selected a color
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("Selected");
    numSquares = 6;
    //generate 3 random colors and populate array
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(); //randomly selected a color
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }

});

resetButton.addEventListener("click", function () {
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from the array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change the colors of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            message.textContent = "Correct!!";
            resetButton.textContent = "Play Again?";
            h1.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
        }
        else {
            // alert("Wrong");
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all the squares
    for (var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() { 
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //create an array
    var arr = []

    //add num random colors to the array
    for (var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }

    //return array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 to 255
    //pick a green from 0 to 255
    //pick a blue from 0 to 255

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}