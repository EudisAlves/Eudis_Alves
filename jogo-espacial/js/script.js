(function(){
	//canvas
	var cnv = document.querySelector('canvas');
	//contexto de renderização 2d
	var ctx = cnv.getContext('2d');
	
	//RECURSOS DO JOGO ========================================================>
	//arrays
	var sprites = [];
	var assetsToLoad = [];
	var missiles = [];
	
	//sprites
	//cenário
	var background = new Sprite(0,56,400,500,0,0);
	sprites.push(background);
	
	//nave
	var defender = new Sprite(0,0,30,50,185,450);
	sprites.push(defender);
	
	//imagem
	var img = new Image();
	img.addEventListener('load',loadHandler,false);
	img.src = "img/img.png";
	assetsToLoad.push(img);
	//contador de recursos
	var loadedAssets = 0;
	
	
	//entradas
	var LEFT = 37, RIGHT = 39, ENTER = 13, SPACE = 32;
	
	//ações
	var mvLeft = mvRight = shoot = spaceIsDown = false;
	
	//estados do jogo
	var LOADING = 0, PLAYING = 1, PAUSED = 2, OVER = 3;
	var gameState = LOADING;
	
	//listeners
	window.addEventListener('keydown',function(e){
		var key = e.keyCode;
		switch(key){
			case LEFT:
				mvLeft = true;
				break;
			case RIGHT:
				mvRight = true;
				break;
			case SPACE:
				if(!spaceIsDown){
					shoot = true;
					spaceIsDown = true;
				}
				break;
		}
	},false);
	
	window.addEventListener('keyup',function(e){
		var key = e.keyCode;
		switch(key){
			case LEFT:
				mvLeft = false;
				break;
			case RIGHT:
				mvRight = false;
				break;
			case ENTER:
				if(gameState !== PLAYING){
					gameState = PLAYING;
				} else {
					gameState = PAUSED;
				}
				break;
			case SPACE:
				spaceIsDown = false;
		}
	},false);
	
	
	
	//FUNÇÕES =================================================================>
	function loadHandler(){
		loadedAssets++;
		if(loadedAssets === assetsToLoad.length){
			img.removeEventListener('load',loadHandler,false);
			//inicia o jogo
			gameState = PAUSED;
		}
	}
	
	function loop(){
		requestAnimationFrame(loop, cnv);
		//define as ações com base no estado do jogo
		switch(gameState){
			case LOADING:
				console.log('LOADING...');
				break;
			case PLAYING:
				update();
				break;
		}
		render();
	}
	
	function update(){
		//move para a esquerda
		if(mvLeft && !mvRight){
			defender.vx = -5;
		}
		
		//move para a direita
		if(mvRight && !mvLeft){
			defender.vx = 5;
		}
		
		//para a nave
		if(!mvLeft && !mvRight){
			defender.vx = 0;
		}
		
		//dispara o canhão
		if(shoot){
			fireMissile();
			shoot = false;
		}
		
		//atualiza a posição
		defender.x = Math.max(0,Math.min(cnv.width - defender.width, defender.x + defender.vx));
		
		//atualiza a posição dos mísseis
		for(var i in missiles){
			var missile = missiles[i];
			missile.y += missile.vy;
			if(missile.y < -missile.height){
				removeObjects(missile,missiles);
				removeObjects(missile,sprites);
				i--;
			}
		}
	}
	
	//criação dos mísseis
	function fireMissile(){
		var missile = new Sprite(136,12,8,13,defender.centerX() - 4,defender.y - 13);
		missile.vy = -8;
		sprites.push(missile);
		missiles.push(missile);
	}
	
	//remove os objetos do jogo
	function removeObjects(objectToRemove,array){
		var i = array.indexOf(objectToRemove);
		if(i !== -1){
			array.splice(i,1);
		}
	}
	
	function render(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		if(sprites.length !== 0){
			for(var i in sprites){
				var spr = sprites[i];
				ctx.drawImage(img,spr.sourceX,spr.sourceY,spr.width,spr.height,Math.floor(spr.x),Math.floor(spr.y),spr.width,spr.height);
			}
		}
	}
	
	loop();
	
	








}());