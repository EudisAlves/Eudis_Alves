const key = "18bd9447eefe8ff200cce9e260f5c339";

// funções ......................................

function exibirdados(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Agora em" + " " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".clima").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector(".img-temp").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}
                

async function buscarCidade(input) { // função asincrona, ela serve para esperar a resposta do servidor! 

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())
    exibirdados(dados)
}



function pesquisa() {
    const input = document.querySelector(".input-cidade").value;

    buscarCidade(input);
}
