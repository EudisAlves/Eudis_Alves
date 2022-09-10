let num = [ 5, 8, 2, 9, 3]
num.push(1) /* esse código adiciona o valor na ultima vaga do vetor*/
num.sort() /* esse código ordena de forma crescente o valores*/
console.log(num)
console.log(`ò vetor tem ${num.length} posições`)
let pos = num.indexOf(8)
if (pos ==-1) {
    console.log('O valor nao foi encontrado!')
} else {
console.log(`o primeiro valor do vetor e ${pos}`)
}
