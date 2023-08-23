let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
//console.log (boxes)

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)
//console.log(spaces)

const startGame = () => {
    console.log("i have started");
    console.log(boxes);
    boxes.forEach(box => box.addEventListener('click',boxClicked))
};
window.addEventListener("load",(event) => {
  console.log("page is fully loaded");
  startGame();
});

function boxClicked(e) {
    const id = e.target
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        currentPlayer = currentPlayer === X_TEXT ? O_TEXT: X_TEXT
    }
    }
}
}

