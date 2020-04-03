
const PLAYER1 = 'X';
const PLATER2 = "O";
const currentRound = 1;

const squaresBox = [...document.querySelectorAll('.square')];

squaresBox.forEach(square => square.addEventListener('click', move));

function move(e){
    const movePlayer = currentRound % 2 === 0 ? PLATER2 : PLAYER1;
    e.target.innerHTML = movePlayer
}
