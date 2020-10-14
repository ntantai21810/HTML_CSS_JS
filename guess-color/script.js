
var buttons = document.getElementsByClassName('colourButton')
var heading = document.getElementById("colourValue")
var answerMessage = document.getElementById('answer');
var bodyElement = document.querySelector('body')

var winColor = '#f7bdbd'

document.getElementById('resetButton').addEventListener('click', startGame)

console.log(bodyElement)

function startGame() {
    var answerButton = Math.round(Math.random() * (buttons.length - 1))

    answerMessage.innerHTML = ''

    for (var i = 0; i < buttons.length; i++) {
    var red = makeColorValue();
    var green = makeColorValue();
    var blue = makeColorValue();

    setButtonColor(buttons[i], red, green, blue);
    buttons[i].addEventListener('click', function() {
        if (this === buttons[answerButton]) {
            answerMessage.innerHTML = 'Correct!';
            bodyElement.setAttribute('style', `background-color: ${winColor}`)
        }
        else {
            answerMessage.innerHTML = 'Wrong answer! Guess again!';
        }
    })

    if (i === answerButton) {
        heading.innerHTML = `(${red}, ${green}, ${blue})`
    }
    }
}

function setButtonColor(button, red, green, blue) {
    button.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`);
}

function makeColorValue() {
    return Math.round(Math.random() * 255);
}

startGame();