var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

//initializes the Color Guessing Game
init();

function init() {
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        //Number of squares to show
        //pick new colors
        //pick a new pickedColor
        //update page to reflect changes

        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            //terniary operator
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

    for (var i = 0; i < squares.length; i++) {
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
    reset();
}


function reset() {
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from the array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    //change the colors of squares by using loop
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i]; 
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
}

/*

previous code

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

*/

resetButton.addEventListener("click", function () {
    reset();
});

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