var agora = new Date() // esse comando é para pegar a informação desejada atual do sistema
var hora = agora.getHours()  //esse comando pega a hora atual do sistema

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12){
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}
