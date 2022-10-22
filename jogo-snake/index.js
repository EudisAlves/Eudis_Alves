window.onload = function () {
  var stage = document.getElementById("stage");
  var ctx = stage.getContext("2d");
  document.addEventListener("keydown", keyPush); // toda vez que uma tecla for precionada ele adiciona um evento
  setTimeout(game, 120);

  const vel = 1; // velocidade + 1 casa
  var vx = (vy = 0); // velocidade de x e y
  var px = 10; // posição x da cabeça
  var py = 15; // posição y da cabeça
  var tp = 20; //tamanho da peça
  var qp = 20; // quantidade de peças do tabuleiro
  var ax = ay = 15; // posição da maça

  var trail = []; // calda do cobrinha
  tail = 5;

  function game() {
    px += vx;
    py += vy;
    if (px < 0) {
      px = qp - 1;
    }
    if (px > qp - 1) {
      px = 0;
    }
    if (py < 0) {
      py = qp - 1;
    }
    if (py > qp - 1) {
      py = 0;
    }

    // cor do stage
    ctx, (fillStyle = "black");
    ctx.fillRect(0, 0, stage.width, stage.height);
    // cor da maça
    ctx.fillStyle = "red";
    ctx.fillRect( ax* tp, ay * tp, tp, tp);
    // cor da cobra
    ctx.fillStyle = "gray";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp, tp);
      // direção da cabeça
      if (trail[i].x == px && trail[i].y == py) {
        vx = vy = 0; // evento do game ouver
      }
    }
  }

  trail.push({x:px,y:py})
  while (trail.lenght > tail) {
    trail.shift();
  }
  // ação para fazer a cobrinha crescer
  if (ax == px && ay == py) {
    tail++;
    ax = Math.floor(Math.random() * qp);
    ay = Math.floor(Math.random() * qp);
  }
};

// criando movimentação do jogo

function keyPush(event) {
  switch (event.keyCode) {
    case 37: // left
      vx = -vel
      vy = 0;
      break;
    case 38: // up
      vx = 0;
      vy = -vel
      break;
    case 39: // right
      vx = vel
      vy = 0;
      break;
    case 40: // down
      vx = 0;
      vy = vel
      break;
    default:
      break;
  }
}
