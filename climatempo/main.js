const key = "18bd9447eefe8ff200cce9e260f5c339";

async function buscarCidade(cidade) {
    const dados = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`).then( resposta => resposta.json())

    console.log(input)
}



function pesquisa() {
    const input = document.querySelector(".input-cidade").value

    buscarCidade(input)
}
