const newGameButton = document.getElementById("newGame")

newGameButton.addEventListener("click", newGameFunction);

function newGameFunction() {
    console.log('New Game button')
}

const rollDiceButton = document.getElementById("rollDice")

rollDiceButton.addEventListener("click", rollDiceFunction);

function rollDiceFunction() {
    let number = Math.floor(Math.random() * 5)
    document.getElementById("dice").innerHTML=`<img src='assets/${number}.jpg' height=125px width=125px/>`;
}

const holdButton = document.getElementById("hold")

holdButton.addEventListener("click", holdFunction);

function holdFunction() {
    console.log('Hold button')
}
