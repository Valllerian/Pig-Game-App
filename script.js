const newGameButton = document.getElementById("newGame")

newGameButton.addEventListener("click", newGameFunction);

function newGameFunction() {
    console.log('New Game button')
}

const rollDiceButton = document.getElementById("rollDice")

rollDiceButton.addEventListener("click", rollDiceFunction);

function rollDiceFunction() {
    let number = Math.floor(Math.random() * 5)
    let playerOneCurrent = Number(document.getElementById("playerOneCurrent").innerHTML)
    document.getElementById("dice").innerHTML=`<img src='assets/${number}.jpg' height=125px width=125px/>`;
    if(number === 0){
        document.getElementById("playerOneCurrent").innerHTML = 0;
    }else{
        document.getElementById("playerOneCurrent").innerHTML = playerOneCurrent + (number + 1)
    }
    
}

const holdButton = document.getElementById("hold")

holdButton.addEventListener("click", holdFunction);

function holdFunction() {
    let playerOneCurrent = Number(document.getElementById("playerOneCurrent").innerHTML)
    let playerOneScore = Number(document.getElementById("playerOneScore").innerHTML)
    playerOneScore = playerOneScore + playerOneCurrent;
    document.getElementById("playerOneScore").innerHTML = playerOneScore;
    document.getElementById("playerOneCurrent").innerHTML = 0;
}
