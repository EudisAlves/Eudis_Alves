const cellElements = document.querySelectorAll("[date-cell]");
const board = document.querySelector("[data-board]");

let isCircleTurn;

const startGame = () => {
    for (const cell of cellElements) {
        cell.addeEventListener("click", handleClick, { once: true });
    }
    isCircleTurn = false;

    board.classList.add("x");
}
const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurn = () => {
    isCircleTurn = !isCircleTurn

    board.classList.remove("circle");
    board.classList.remove("x");

    if (isCircleTurn) {
        board.classList.add("circle");
    } else {
        board.classList.add("x");
    }
};

const handleClick = () => {
    //colocar a marca (x ou circulo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";
    
    cell.classList.add(classToAdd);
    // verificação por vitória
    // verificação por empate
    // mudar simbolo
};

startGame();

