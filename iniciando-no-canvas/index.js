const canvas1 = document.querySelector("#canvas1");
const context = canvas1.getContext("2d"); // a variavel context serve para me dizer se vomos trabalhar em 2d ou 3d.

//retângulo

context.fillStyle = "#FF0000"; // cor do preencheimento
context.fillRect(50, 50, 100, 100); // tamanho

// Contorno  da borda

context.lineWidth = 3; // espessura da borda
context.strokeStyle = "blue"; // cor da borda
context.strokeRect(50, 50, 100, 100);

//Iniciando um novo caminho

context.fillStyle(); //Preencher toda área desenhada
context.strokeStyle(); // Contornar a área desenhada
