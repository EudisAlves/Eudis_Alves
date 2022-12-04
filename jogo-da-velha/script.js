const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const winningMessageTextElement = document.querySelector(
    "[data-winning-message-text]"
);
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");

let isCircleTurn;

const winningCombinations = [ //combinações de vitórias
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const startGame = () => { // função para iniciar o jogo
    isCircleTurn = false;

    for (const cell of cellElements) { // impedir que a mesma celula seja escolhida mais de uma vez
        cell.classList.remove("circle");
        cell.classList.remove("x");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
    }

    setBoardHoverClass();
    winningMessage.classList.remove("show-winning-message");//mostrar menssagem 
};

const endGame = (isDraw) => {
    if (isDraw) {
        winningMessageTextElement.innerText = "Empate!";//menssagem de empate
    } else {
        winningMessageTextElement.innerText = isCircleTurn // menssagem de vitoria
            ? "O Venceu!"
            : "X Venceu!";
    }

    winningMessage.classList.add("show-winning-message");
};

const checkForWin = (currentPlayer) => { // checar vitória
    return winningCombinations.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForDraw = () => { // checar empate
    return [...cellElements].every((cell) => {
        return cell.classList.contains("x") || cell.classList.contains("circle");
    });
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
    board.classList.remove("circle");
    board.classList.remove("x");

    if (isCircleTurn) {
        board.classList.add("circle");
    } else {
        board.classList.add("x");
    }
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;

    setBoardHoverClass();
};

const handleClick = (e) => { // indicar quem vai iniciar a jogada
    // Colocar a marca (X ou Círculo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    placeMark(cell, classToAdd);

    // Verificar por vitória
    const isWin = checkForWin(classToAdd);

    // Verificar por empate
    const isDraw = checkForDraw();

    if (isWin) {
        endGame(false);
    } else if (isDraw) {
        endGame(true);
    } else {
        // Mudar símbolo
        swapTurns();
    }
};

startGame();

restartButton.addEventListener("click", startGame);