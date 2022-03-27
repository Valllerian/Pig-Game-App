const newGameButton = document.getElementById("newGame")

newGameButton.addEventListener("click", newGameFunction);

function newGameFunction() {
    window.location.reload()
}

const rollDiceButton = document.getElementById("rollDice")

rollDiceButton.addEventListener("click", rollDiceFunction);

let playerOneTurn = true

function rollDiceFunction() {
    let number = Math.floor(Math.random() * 5)
    if(playerOneTurn){
        let playerOneCurrent = Number(document.getElementById("playerOneCurrent").innerHTML)
        document.getElementById("dice").innerHTML=`<img src='assets/${number}.jpg' height=125px width=125px/>`;
        if(number === 0){
            document.getElementById("playerOneCurrent").innerHTML = 0;
            return playerOneTurn = false;
        }else{
            document.getElementById("playerOneCurrent").innerHTML = playerOneCurrent + (number + 1)
        }
    }
    if(!playerOneTurn){
            let playerOneCurrent = Number(document.getElementById("playerTwoCurrent").innerHTML)
            document.getElementById("dice").innerHTML=`<img src='assets/${number}.jpg' height=125px width=125px/>`;
            if(number === 0){
                document.getElementById("playerTwoCurrent").innerHTML = 0;
                return playerOneTurn = true;
            }else{
                document.getElementById("playerTwoCurrent").innerHTML = playerOneCurrent + (number + 1)
        } 
    }
}

const holdButton = document.getElementById("hold")

holdButton.addEventListener("click", holdFunction);

function holdFunction() {
    if(playerOneTurn){
        let playerOneCurrent = Number(document.getElementById("playerOneCurrent").innerHTML)
        let playerOneScore = Number(document.getElementById("playerOneScore").innerHTML)
        playerOneScore = playerOneScore + playerOneCurrent;
        document.getElementById("playerOneScore").innerHTML = playerOneScore;
        document.getElementById("playerOneCurrent").innerHTML = 0;
        if(Number(document.getElementById("playerOneScore").innerHTML >= 100)){
            document.getElementById("rollDice").disabled = true;
            document.getElementById("hold").disabled = true;
            console.log("Player One Wins!")
        }
        return playerOneTurn = false;
    }
    if(!playerOneTurn){
        let playerTwoCurrent = Number(document.getElementById("playerTwoCurrent").innerHTML)
        let playerTwoScore = Number(document.getElementById("playerTwoScore").innerHTML)
        playerTwoScore = playerTwoScore + playerTwoCurrent;
        document.getElementById("playerTwoScore").innerHTML = playerTwoScore;
        document.getElementById("playerTwoCurrent").innerHTML = 0;
        if(Number(document.getElementById("playerTwoScore").innerHTML >= 100)){
            document.getElementById("rollDice").disabled = true;
            document.getElementById("hold").disabled = true;
            console.log("Player Two Wins!")
        }
        return playerOneTurn = true;
    }

    }
    

