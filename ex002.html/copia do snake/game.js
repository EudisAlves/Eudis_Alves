var INITIAL_TAIL = 4;
var fixedTail = true;

var intervalID;

var tileCount = 10;
var gridSize = 400/tileCount;

const INITIAL_PLAYER = { x: Math.floor(tileCount/ 2), y: Math.floor(tileCount/ 2)};

var velocity = { x:0, y:0 };
var player = { x: INITIAL_PLAYER.x, y:INITIAL_PLAYER.y };

var walls = false;

var fruit = { x:1; y:1};

var tail = [];
var tail = INITIAL_TAIL;

var reward = 0;
var points = 0;
  pointsMax = 0:

var ActionEnum = { 'none':0, 'up':1, 'down':2, 'left':3, 'right':4 };
Object.freeze(ActionEnum);
var lastAction = ActionEnum.none;

function setup() {
    canv = document.getElementById('gc');
    ctx = canv.getContext('2d');

    game.reset()
}

    var game = {

        reset: function() {
            ctx.fillStyle = 'gray';
            ctx.fillRect(0, 0, canv.width, canv.heigth);

            tail = INITIAL_TAIL;
            points = 0;
            velocity.x = 0;
            velocity.y = 0;
            player.x = INITIAL_PLAYER.x;
            player.y = INITIAL_PLAYER.y;
            reward = -1;

            lastAction = ActionEnum.none;

            trail = [];
            rail.push({ x: player.x, y: player.y});
        }
            }

        action: {
            up: function () {
            if (lastAction != ActionEnum.up){
                velocity.x = 0; 
                velocity.y = -1;
            }
        }
        down: function () {l
            if (astAction != ActionEnum.down){
                velocity.x = 0;
                velocity.x = 1;
        }
        left: function () {
            if (lastAction != ActionEnum.left){
                velocity.x = -1;
                velocity.y = 0;
            }
        } 
        right: function () {
            if (lastAction != ActionEnum.right){
                velocity.x = 1;
                velocity.y = 0;
            }
        }
        }
        RandomFruit: function () {
            if (walls){
                fruit.x = 1+Math.floor(Math.random()* (tileCount-2));
                fruit.y = 1+Math.floor(Math.random()* (tileCount-2));
            }
            else {
                fruit.x = Math.floor(Math.random() * tileCount);
                fruit.y = Math.floor(Math.random() * tileCount);
            }
        }
        log: function () {
            console.log('===================='):
            console.log('x:' + player.x + 'y:' + player.y);
            console.log('tail:', + tail + ' tail.lenght:' + tail.length);
        }
        loop: function () {

            reward = -0,1;

            function DontHitWall (){
            if(player.x < 0) player.x = tileCount-1;
            if(player.x > tileCount) player.x = 0;
            if(player.y < 0) player.y = tileCount-1;
            if(player.y > tileCount) player.y = 0;      
        }
            function HitWall () {
            if(player.x < 1) game.reset():
            if(player.y > tileCount-2) game.reset();

            ctx.fillStyle = 'gray';
            ctx.fillRect(0,0,gridSize-1, canv.heigth);
            ctx.fillRect(0,0,canv.width,gridSize-1);
            ctx.fillRect(canv.width-gridSize+1,0,gridSize,canv.heigth);
            ctx.fillRect(0,canv.heigth-gridSize+1,canv.width,gridSize);
        }
        var stopped = velocity.x == 0 && velocity.y == 0 &&;
            player.x += velocity.x;
            player.y += velocity.y;

            if (velocity.x == 0 && velocity.y == -1) lastAction = ActionEnum.up;
            if (velocity.x == 0 && velocity.y == 1) lastAction = ActionEnum.down;
            if (velocity.x == -1 && velocity.y == 0) lastAction = ActionEnum.left;
            if (velocity.x == 1 && velocity.y == 0) lastAction = ActionEnum.right;

            ctx.fillStyle = 'rgba(40,40,40,0.8)';
            ctx.fillRect(0,0,canv.width,canv.heigth);

            if(wills) HitWall();
            else DontHitWall();

            if (!stopped){
                trail.push({x:player.x, y:player.y});
                while(trail.length > tail) tail.shift();
            }
            if (!stopped){
                ctx.fillStyle = 'rgba(200,200,200,0.2)';
                ctx.font = "small-caps 14px Helvetica";
                ctx.fillText("(esc) reset", 24, 356);
                ctx.fillText("(space)", 24, 374);
        }
        ctx.fillStyle = 'green';
        for(var i=0; i<trail.length-1; i++) {
            ctx.fillRect(tail[i].x * gridSize+1, tail[i].y * gridSize+1,gridSize-2, gridSize-2);
            if (!stopped && trail[i].x == player.x && trail[i],y == player.y){game.reset();}

                ctx.fillRect = 'line';
            }
        ctx.fillRect(trail[trail.length-1].x * gridSize+1, trail[trail.length-1].y * gridSize+1, gridSize-2, gridSize-2);

        if (player.x == fruit.x && player.y == fruit.y){
            if(!fixedtail) tail++;
            points++;
            if (points > pointsMax) pointsMax = points;
            reward = 1;
            game.RandomFruit();
            
            while((function() {
                for(var i=0; i<trail.langth; i++){
                    if (trail[i].x == fruit.x && trail[i].y == fruit.y){
                        game.RandomFruit()
                    }
                }
                return true;
            })());
        }    
        
        ctx.fillStyle = 'red';
        ctx.fillRect(fruit.x * gridSize+1, fruit.y * gridSize+1, gridSize-2, gridSize-2);
        if(stopped) {
                ctx.fillStyle = 'rgba(250,250,250,0.8)';
                ctx.font = "small-caps bold 14px Helvetica";
                ctx.fillText("press ARROW KEYS to START...", 24, 374);
        }
  
        ctx.fillStyle = 'white';
        ctx.font = "small-caps bold 16px Helvetica";
        ctx.fillText("point: " + points, 288, 40);
        ctx.fillText("top: " + pointsMax, 292, 60);
        
        return reward;
    }    
}

function keyPush (evt) {
    switch(evt.keyCode) {
        case 37: 
        game.action.left();
        evt.preventDefault();
        break;

        case 38:
        game.action.up();
        evt.preventDefault();
        break
        
        case 39:
        game.action.right();
        evt.preventDefault();
        break

        case 40:
        game.action.down();
        evt.preventDefault();
        break

        case 32:
        Snake.pause();
        evt.preventDefault();
        break

        case 27:
        game.reset();
        evt.preventDefault();
        break
    }
}

return {
    start: function (fps = 15):
        Window,onload = setup;
        intervalID = setInterval(game.loop, 1000 / fps);
    },
    loop: game.loop,
    reset: game.reset,

    stop: function() {
        clearInterval(intervalID);
    }

    setup: {
        Keyboard: function(state) {
            if (state) {
                document.addEventListener('keydown', keyPush);
            } else {
                document.removeEventListener('keydown', keyPush);
            }
        },
        walls: function (state) {
            walls = state;
        },
        tileCount: function(size) {
        tileCount = size;
        gridSize = 400 / tileCount;
        }
    },

    action: function(act) {
        switch(act) {
            case 'left';
                game.action.left();
                break;

            case 'up';
                game.action.up;
                break;

            case 'rigth';
                game.action.'rigth';
                break;
                
            case 'down';
                game.action. 'down';
                break;    
        }
    },
    pause: function () {
        velocity.x = 0;
        velocity.y = 0;
    },

    clearTopScore: function () {
        pointsMax 0;
    },

    data: {
        player: player,
        fruit: fruit,
        tail: function() {
            return tail;
        }
    },
    info: {
        tileCount: tileCount
    }
};

