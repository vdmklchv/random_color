const heading = document.querySelector('h1');
const generateColorButton = document.querySelector('#generate-color-button');
const main = document.querySelector('#main');
const colorNums = {
    redColor: document.querySelector('#red-number'),
    greenColor: document.querySelector('#green-number'),
    blueColor: document.querySelector('#blue-number')
}

// data structure constructor

function RGBColor(red, green, blue) {
    this.red = red,
        this.green = green,
        this.blue = blue
}

// state objects

let currentColor = {
    red: 0,
    green: 0,
    blue: 0
};

const starState = {
    red: false,
    green: false,
    blue: false
}

// Event listeners
heading.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'red-star':
            if (starState.red === false) {
                starState.red = true;
                e.target.innerHTML = '&starf;';
            } else {
                starState.red = false;
                e.target.innerHTML = '&star;';
            }
            break;
        case 'green-star':
            if (starState.green === false) {
                starState.green = true;
                e.target.innerHTML = '&starf;';
            } else {
                starState.green = false;
                e.target.innerHTML = '&star;';
            }
            break;
        case 'blue-star':
            if (starState.blue === false) {
                starState.blue = true;
                e.target.innerHTML = '&starf;';
            } else {
                starState.blue = false;
                e.target.innerHTML = '&star;';
            }
            break;
    }
});

generateColorButton.addEventListener('click', () => {
    const color = createColor();
    displayColor(color);
    main.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
})

// functions

function displayColor(color) {
    colorNums.redColor.innerText = color.red;
    colorNums.greenColor.innerText = color.green;
    colorNums.blueColor.innerText = color.blue;
    // fixed colors
}

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

function createColor() {
    const newColor = {
        red: 0,
        green: 0,
        blue: 0,
    }
    for (key in starState) {
        if (starState[key] === true) {
            newColor[key] = currentColor[key];
        } else {
            newColor[key] = getRandomNumber();
        }
    }
    currentColor = newColor;
    return new RGBColor(newColor.red, newColor.green, newColor.blue);
}


