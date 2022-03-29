const newGameButton = document.getElementById("newGame");

newGameButton.addEventListener("click", newGameFunction);

// New game function simply reloads the page to clear all values;

function newGameFunction() {
  window.location.reload();
}

const rollDiceButton = document.getElementById("rollDice");

rollDiceButton.addEventListener("click", rollDiceFunction);

let playerOneTurn = true;

// Roll Dice function rolls dice first and then depending on who`s turn it is modifies the current score value;
// If 1 is rolled - current value is set as 0 and turn is ended; If not - currents is a sum of last current + roll value;

function rollDiceFunction() {
  let number = Math.floor(Math.random() * 5);
  if (playerOneTurn) {
    let playerOneCurrent = Number(
      document.getElementById("playerOneCurrent").innerHTML
    );
    document.getElementById(
      "dice"
    ).innerHTML = `<img src='assets/${number}.jpg' height=125px width=125px/>`;
    if (number === 0) {
      document.getElementById("playerOneCurrent").innerHTML = 0;
      let playerOne = document.getElementById("playerOne");
      let playerTwo = document.getElementById("playerTwo");
      playerOne.classList.remove("card-active");
      playerOne.classList.add("card-waiting");
      playerTwo.classList.remove("card-waiting");
      playerTwo.classList.add("card-active");
      return (playerOneTurn = false);
    } else {
      document.getElementById("playerOneCurrent").innerHTML =
        playerOneCurrent + (number + 1);
    }
  }
  if (!playerOneTurn) {
    let playerOneCurrent = Number(
      document.getElementById("playerTwoCurrent").innerHTML
    );
    document.getElementById(
      "dice"
    ).innerHTML = `<img src='assets/${number}.jpg' height=125px width=125px/>`;
    if (number === 0) {
      document.getElementById("playerTwoCurrent").innerHTML = 0;
      let playerOne = document.getElementById("playerOne");
      let playerTwo = document.getElementById("playerTwo");
      playerTwo.classList.remove("card-active");
      playerTwo.classList.add("card-waiting");
      playerOne.classList.remove("card-waiting");
      playerOne.classList.add("card-active");
      return (playerOneTurn = true);
    } else {
      document.getElementById("playerTwoCurrent").innerHTML =
        playerOneCurrent + (number + 1);
    }
  }
}

const holdButton = document.getElementById("hold");

holdButton.addEventListener("click", holdFunction);

// Hold button function lets the player and their turn and hold(store) their current points and transfer them to the total;

function holdFunction() {
  if (playerOneTurn) {
    let playerOneCurrent = Number(
      document.getElementById("playerOneCurrent").innerHTML
    );
    let playerOneScore = Number(
      document.getElementById("playerOneScore").innerHTML
    );
    playerOneScore = playerOneScore + playerOneCurrent;
    document.getElementById("playerOneScore").innerHTML = playerOneScore;
    document.getElementById("playerOneCurrent").innerHTML = 0;
    if (Number(document.getElementById("playerOneScore").innerHTML >= 100)) {
      document.getElementById("rollDice").disabled = true;
      document.getElementById("hold").disabled = true;
      document.getElementById("playerOneScore").classList.add("winner");
      document.getElementById("playerOneScore").innerHTML = "WINNER!";
    }
    let playerOne = document.getElementById("playerOne");
    let playerTwo = document.getElementById("playerTwo");
    playerOne.classList.remove("card-active");
    playerOne.classList.add("card-waiting");
    playerTwo.classList.remove("card-waiting");
    playerTwo.classList.add("card-active");
    return (playerOneTurn = false);
  }
  if (!playerOneTurn) {
    let playerTwoCurrent = Number(
      document.getElementById("playerTwoCurrent").innerHTML
    );
    let playerTwoScore = Number(
      document.getElementById("playerTwoScore").innerHTML
    );
    playerTwoScore = playerTwoScore + playerTwoCurrent;
    document.getElementById("playerTwoScore").innerHTML = playerTwoScore;
    document.getElementById("playerTwoCurrent").innerHTML = 0;
    if (Number(document.getElementById("playerTwoScore").innerHTML >= 100)) {
      document.getElementById("rollDice").disabled = true;
      document.getElementById("hold").disabled = true;
      document.getElementById("playerTwoScore").classList.add("winner");
      document.getElementById("playerTwoScore").innerHTML = "WINNER!";
    }
    let playerOne = document.getElementById("playerOne");
    let playerTwo = document.getElementById("playerTwo");
    playerTwo.classList.remove("card-active");
    playerTwo.classList.add("card-waiting");
    playerOne.classList.remove("card-waiting");
    playerOne.classList.add("card-active");
    return (playerOneTurn = true);
  }
}
