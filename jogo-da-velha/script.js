const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurn = () => {
    isCircleTurn = !isCircleTurn;

    board.classList.remove("circle");
    board.classList.remove("x");

    if (isCircleTurn) {
        board.classList.add("circle");
    } else {
        board.classList.add("x");
    }
};

const handleClick = (e) => {
    //colocar a marca (x ou circulo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";
    
    placeMark(cell, classToAdd);
    // verificação por vitória

    // verificação por empate

    // mudar simbolo

    swapTurn();
};

for (const cell of cellElements) {
    cell.addeEventListener("click", handleClick, { once: true });
}
