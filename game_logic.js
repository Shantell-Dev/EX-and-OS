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
    boxes.forEach(box => box.addEventListener('click',boxClicked))

function boxClicked(e) {
    const id = e.target
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        currentPlayer = currentPlayer === X_TEXT ? O_TEXT: X_TEXT
    }
    else{
        return false
    }
}
}
startGame(currentPlayer)
