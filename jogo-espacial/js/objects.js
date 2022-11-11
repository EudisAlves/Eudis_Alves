(function(){
    // colocando o canvas ****************************************************************
    let cnv = document.querySelector('canvas');
    //colocando o contexto de renderizaç~ao 2d *******************************************
    let ctx = cnv.getContext('2d');
    // recursos do jogo  *****************************************************************

    //arraqys ****************************************************************************
    let sprites = [];
    let assetsToLoad = [];
    //sprites ****************************************************************************

    //cenarios ***************************************************************************
    let background = new Sprite(0,56,400,500,0,0);
	sprites.push(background);
    //nave *******************************************************************************
    let defender = new Sprite(0,0,30,50,185,450);
	sprites.push(defender);
}());