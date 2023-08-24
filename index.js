const playerText = document.getElementById("playerText");
const startPage = document.getElementById("startPage");
const gamePage = document.getElementById("gamePage");
const restartBtn = document.getElementById("restartBtn");
const boxes = Array.from(document.getElementsByClassName("box"));
const winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning-blocks"
);

startButton.addEventListener("click", () => {
  startPage.style.display = "none"; // Hide the start page
  gamePage.style.display = "block"; // Show the game page
  // Initialize your game or perform any necessary setup here
});


const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
const spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

window.addEventListener("load", () => {
  startGame();
});

function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
    checkForWin();
    return;
  }
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWin() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      updateWinnerUI(combo);
      return;
    }
  }
}

function updateWinnerUI(winningCombo) {
  playerText.textContent = `${spaces[winningCombo[0]]} has won!`;
  winningCombo.forEach(
    (index) => (boxes[index].style.backgroundColor = winnerIndicator)
  );
}

restartBtn.addEventListener("click", restart);

function restart() {
  spaces.fill(null);
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });
  playerText.textContent = "Xs-and-Os";
  currentPlayer = X_TEXT;
}
