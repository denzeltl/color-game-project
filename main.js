var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".squares");
var pickedColor = randomPicked(6);
var colorDisplay = document.querySelector("#rgb");
var comment = document.querySelector(".comment");
var bgHeader = document.querySelector("h1");
var newColorsButton = document.querySelector("#newColors");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


// match the colorDisplay with pickedColor
colorDisplay.textContent = pickedColor;

// color the boxes
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    // add event listener to squares
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;

        // add logic if square === pickedColor
        if (clickedColor === pickedColor) {
            changeColors(pickedColor);
            bgHeader.style.background = pickedColor;
            comment.textContent = "You are CORRECT!";
            newColorsButton.textContent = "Play Again?"
        } else {
            this.style.background = "#2D3748";
            comment.textContent = "Try Again...";
        };
    });
};

// activate new colors button
newColorsButton.addEventListener("click", function () {
    bgHeader.style.background = "#718096";
    newColorsButton.textContent = "New Colors";
    comment.textContent = "";

    // if easy mode toggled
    if (colors.length === 3) {
        colors = generateRandomColors(3);
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
        };
        pickedColor = randomPicked(3);
        colorDisplay.textContent = pickedColor;
    } else {
        colors = generateRandomColors(6);
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
        };
        pickedColor = randomPicked(6);
        colorDisplay.textContent = pickedColor;
    }
});

// activate easy button
easyButton.addEventListener("click", function () {
    bgHeader.style.background = "#718096";
    colors = generateRandomColors(3);

    // if colors array is 3 delete other 3
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        if (colors.includes(squares[i].style.background)) {
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        };
    };
    pickedColor = randomPicked(3);
    colorDisplay.textContent = pickedColor;
    newColorsButton.textContent = "New Colors"
    comment.textContent = "";
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
});

// activate hard button
hardButton.addEventListener("click", function () {
    bgHeader.style.background = "#718096";
    colors = generateRandomColors(6);

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        if (colors.includes(squares[i].style.background)) {
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        };
    };
    pickedColor = randomPicked(6);
    colorDisplay.textContent = pickedColor;
    newColorsButton.textContent = "New Colors"
    comment.textContent = "";
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
});

// change all square colors with pickedColor
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    };
};

// randomize numbers 0-255
function random255() {
    var rand = Math.floor(Math.random() * 256);
    return rand;
};

// randomize color
function randomColor() {
    var randColor = "rgb" + "(" + random255() + ", " + random255() +
        ", " + random255() + ")"
    return randColor;
};

// reset colors button
function resetColors() {
    for (vari = 0; i < squares.length; i++) {
        squares[i].style.background = randomColor();
    };
};

// pick a random square
function randomPicked(num) {
    var randPick = Math.floor(Math.random() * num);
    return colors[randPick];
};

// generate random colors
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    };
    return arr;
};