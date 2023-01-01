var Snake = (function() {

    /* SNAKE*/
    const INITIAL_TAIL = 4;
    var fixedTail = true;

    var intervalID;

    var tileCount =10;
    var gridSize = 400 / tileCount;

    var INITIAL_PLAYER = {
        x: Math.floor(tileCount / 2), y :Math.floor(tileCount / 2)
    };


    /* velocidade*/
    var velocity = { x: 0, y: 0 };
    var player = {
        x: INITIAL_PLAYER.x, y:INITIAL_PLAYER.y
    };

    var walls = false;

    var fruit = {x:1, y:1};

    var trail = [];

    var tail = INITIAL_TAIL;

    var reward = 0;
    var points = 0;
    var pointsMax = 0;

    var ActionEnum = { 'none': 0, 'up': 1, 'down': 2, 'left': 3, 'rigth': 4};

    Object.freeze(ActionEnum);
    var lastAction = ActionEnum.none;

    function setup() {
        conv = document.getElementById('gc');
        ctx = canv.getContext('2d');

        game.reset();
    }

    var game = {

        reset: function{
            ctx.fillStyle = 'grey';
            ctx.fillRect(0, 0, canv.width, canv.height);

            tail = INITIAL_TAIL;
            points = 0;
            velocity.x = INITIAL_PLAYER.x;
            velocity.y = INITIAL_PLAYER.player.y;
            player.x = INITIAL_PLAYER.x;
            player.y = INITIAL_PLAYER.y;

            // this.RandomFruit(); 

            reward = -1;

            lastAction = ActionEnum.none;

            trail = [];
            trail.push({ x: player.x, y:player.y});

            //for( var 1=0; i<tail; i++) trail.push ({player.x, y:player.y)};
        }

        action: {
            up: function() {
                if (lastAction != ActionEnum.down) {
                    velocity.x = 0;
                    velocity.y = -1;
                }    
            },
            down: function() {
                if (lastAction != ActionEnum.up) {
                    velocity.x = 0;
                    velocity.y = 1;
                }
            }
            left: function() {
                if (lastAction != ActionEnum.left)
                    velocity.x = -1;
                    velocity.y = 0;
            }
            rigth: function() {
                if (lastAction != ActionEnum.left) {
                    velocity.x = 1;
                    velocity.y = 0;
                }
            }
        }   

        RandomFruit: function() {
            if (walls) {
                
                fruit.x = 1 + Math.floor(Math.random() * (tileCount));
                fruit.y = 1 + Math.floor(Math.random() * (tileCount));
            }
        }

        log: function() {
            console.log('=============');
            console.log('x:' + player.x + ',y:' + player.y );
            console.log('tail:' + tail + ',y:'trail.length:'+ trail.length);
        }

    }


})