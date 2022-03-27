const newGameButton = document.getElementById("newGame")

newGameButton.addEventListener("click", newGameFunction);

function newGameFunction() {
    console.log('New Game button')
}

const rollDiceButton = document.getElementById("rollDice")

rollDiceButton.addEventListener("click", rollDiceFunction);

function rollDiceFunction() {
    console.log('Roll Dice button')
}

const holdButton = document.getElementById("hold")

holdButton.addEventListener("click", holdFunction);

function holdFunction() {
    console.log('Hold button')
}
