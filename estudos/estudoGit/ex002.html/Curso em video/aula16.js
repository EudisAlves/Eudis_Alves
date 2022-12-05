function parimpar(n) {
    if(n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parimpar(223))
 /* esse exemplo vai me mostrar se o numero chamado é par ou impar*/

 function soma(n1, n2) {
    return n1 + n2
 }
 console.log(soma(2, 5)) 
 /* nesse exemplo a chamada vai ser atribuida a n1 e n2 */
 
 function soma(n1= 0, n2= 0) {
    return n1 + n2
 }
 console.log(soma(7,1))
 /* nesse caso estamos pre estabelesendo os atributos de n1 e n2, 
 assim caso na ausencia de um deles o valor atribuido é comado automaticamente*/

 function fatorial(n) {
    let fat = 1
    for (let c = n; c>1; c--) { /* nesse caso do fatorial enquanto c for maior que 1 ele vai diminuindo 1*/
        fat*= c
    }
    return fat
 }

 console.log(fatorial(5)) /* nesse caso estamos trabalhando de forma recursiva */

 function fatorial(n) {
    if(n==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
