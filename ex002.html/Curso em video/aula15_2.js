let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}/* essa forma eu posso armazenar mais de um valor na mesma variate ou vetor*/

for(let pos in valores) { /* esse codigo simplifica o anterior */
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} /* A leitura desse código é: para cada posição dentro de num eu vou mostrar o num pos*/