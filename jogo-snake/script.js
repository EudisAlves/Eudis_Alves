let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d"); // o contexto me diz em quantas dimenções iremos trabalhar
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for( 1=0; i < snake.lenght; i) {
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i])
    }
}

criarBG();
newFunction();


