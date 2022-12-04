var filme = document.getElementById('filmes');
var jogos = document.getElementById('jogos');


//Botoes Home
var filmes = document.getElementById('filme');
var jogo = document.getElementById('jogo');
var livro = document.getElementById('livro');




//Filmes
var peguei = document.getElementById('tePeguei');
var compadecida = document.getElementById('compadecida');
var estagiario = document.getElementById('estagiario');
var aladdin = document.getElementById('aladdin');
var potter = document.getElementById('potter');
var wars = document.getElementById('wars');
var vingadores = document.getElementById('vingadores');
var wanda = document.getElementById('wanda');

//Modo Escuro
var modo = document.getElementById('modo');
var modoDark = document.getElementById('modoDark');

// pegando os legends para o modo escuro
var legend = document.getElementById('legend');
var legen = document.getElementById('legen');

var legends = document.getElementById('legends')
var legens = document.getElementById('legens')


//footer e header 
var footer = document.querySelector("footer")
var header = document.querySelector("header")


//body da pagina
var body = document.querySelector('body')


//modo CLaro
function Luz() {
    body.style.background = "#fff"
    modo.style.display = "none"
    modoDark.style.display = "block"
    legend.style.color = "#000"
    legend.style.font = "700 2.6rem Archivo";
    legen.style.color = "#000";
    legen.style.font = "700 2.6rem Archivo";
    legends.style.color = "#000"
    legends.style.font = "700 2.6rem Archivo";
    legens.style.color = "#000"
    legens.style.font = "700 2.6rem Archivo";


}
//modo Escuro
function Dark() {
    body.style.background = "#0D0D0D"
    modo.style.display = "block"
    modoDark.style.display = "none"
    legend.style.color = "#fff"
    legend.style.font = "700 2.6rem Archivo";
    legen.style.color = "#fff";
    legen.style.font = "700 2.6rem Archivo";
    legends.style.color = "#fff"
    legends.style.font = "700 2.6rem Archivo";
    legens.style.color = "#fff"
    legens.style.font = "700 2.6rem Archivo";

}

function erro() {
    alert('essa pagina está em construção')
}



function AparecerJogo() {
    jogos.style.display = "block"

    livro.style.display = "none";
    filmes.style.display = "none";
    jogo.style.display = "none";
    footer.style.display = "none"


}
//desaparecer botoes iluminado e aparecer "pagina" de filmes
function Aparecer() {
    filme.style.display = "block"

    livro.style.display = "none";
    filmes.style.display = "none";
    jogo.style.display = "none";
    footer.style.display = "none"
}

// sumir pagina de filme e aparecer home
function home() {
    filme.style.display = "none"
    jogos.style.display = "none"


    livro.style.display = "block";
    filmes.style.display = "block";
    jogo.style.display = "block";
    footer.style.display = "flex"
}


//sumir os filme
function sumir() {
    filme.style.display = "none"
}


//aparecer os filmes
function tePeguei() {
    sumir();
    peguei.style.display = 'block';
    body.style.backgroundImage = "url(https://image.tmdb.org/t/p/w1280/1NFRyjidhjROBxcgmCTgB2Yfl85.jpg)";
    header.style.display = "none";

}

function Compadecida() {
    sumir();
    compadecida.style.display = 'block';
    body.style.backgroundImage = "url(https://imagens.ne10.uol.com.br/img/imagens/2020/09/23/7b73dc06b4_auto-da-compadecida.jpg)";
    header.style.display = "none";

}

function Estagiario() {
    sumir();
    estagiario.style.display = 'block';
    body.style.backgroundImage = "url(https://i0.wp.com/hackersec.com/wp-content/uploads/2016/02/os-estagiario-filme.jpg?resize=400%2C267&ssl=1)";
    header.style.display = "none";

}

function Aladdin() {
    sumir();
    aladdin.style.display = 'block';
    body.style.backgroundImage = "url(https://deythere.com/wp-content/uploads/2019/05/aladdin.jpg)";
    header.style.display = "none";

}

function Potter() {
    sumir();
    potter.style.display = 'block';
    body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp4543123.jpg)";
    header.style.display = "none";

}

function Wars() {
    sumir();
    wars.style.display = 'block';
    body.style.backgroundImage = "url(https://i.pinimg.com/originals/3c/4f/25/3c4f256490040cf57126753d369bdc1c.jpg)";
    header.style.display = "none";

}

function Vingadores() {
    sumir();
    vingadores.style.display = 'block';
    body.style.backgroundImage = "url(https://images4.alphacoders.com/913/913715.jpg)";
    header.style.display = "none";

}

function Wanda() {
    sumir();
    wanda.style.display = 'block';
    body.style.backgroundImage = "url(https://www.hdwallpapers.in/download/wanda_vision_2021_keyart_4k_hd_wanda_vision-1600x900.jpg)";
    header.style.display = "none";

}
//Final das funções de aparecer os filmes


//sair da tela dos trailer e voltar para o filme
function voltar() {
    filme.style.display = "block";
    header.style.display = "flex";

    peguei.style.display = 'none';
    compadecida.style.display = 'none';
    estagiario.style.display = 'none';
    aladdin.style.display = 'none';
    potter.style.display = 'none';
    wars.style.display = 'none';
    vingadores.style.display = 'none';
    wanda.style.display = 'none';
    body.style.backgroundImage = "none";
}