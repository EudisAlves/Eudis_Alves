var idade = 188
console.log(`Você tem ${idade} anos.`)
   if (idade < 16) {
        console.log('não vota')
    } else if (idade < 18 || idade > 65){ //idade maio que 65 e menor que 18 voto opcional

        console.log('voto opcional')
    } else if (idade > 18 || idade > 65){ // idade maior que 18 e menor que 66 voto obrigatório
        console.log('voto obrigatório')
}