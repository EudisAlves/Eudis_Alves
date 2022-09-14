let amigo = {nome:'josé', 
sexo:'M', 
peso: 85.4, 
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
/*nesse caso, vemos que a variavel, recebe diversos atributos, onde podemos ter assesso a eles de forma idenpendente*/ 