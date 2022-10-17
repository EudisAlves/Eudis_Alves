const canvas1 = document.querySelector("#canvas1");
const context = canvas1.getContext("2d"); // a variavel context serve para me dizer se vomos trabalhar em 2d ou 3d.

//retângulo

context.fillStyle = "#FF0000"; // cor do preencheimento
context.fillRect(50, 50, 100, 100); // tamanho

// Contorno  da borda

context.lineWidth = 3; // espessura da borda
context.strokeStyle = "blue"; // cor da borda
context.strokeRect(50, 50, 100, 100);

context.fillStyle(); //Preencher toda área desenhada
context.strokeStyle(); // Contornar a área desenhada

//Iniciando um novo caminho

context.beginPath();

// desenhando uma estrela

context.moveTO(75, 250);
context.lineTo(150, 50);
context.lineTo(225, 250);
context.lineTo(50, 120);
context.lineTo(250, 120);
context.lineTo(75, 250);

//configurando a linha
context.lineWidth = 2;
context.strokeStyle = "red";

//traçar as linhas do caminho

context.strokeStyle();
