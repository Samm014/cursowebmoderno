//gerando valores padrões

//estratégia #01
function sum1(n1,n2,n3) {
    n1 = n1 || 1
    n2 = n2 || 1
    n3 = n3 || 1

    return n1+n2+n3
}

console.log(sum2(),sum2(3),sum2(3,2,4),sum2(0,0,0));

//estratégia #02, #03 e #04
function sum2(n1,n2,n3) {
    n1 = n1 !== undefined ? n1 : 1
    n2 = 1 in arguments ? n2 : 1 //se o 2 argumento é true
    n3 = isNaN(n3) ? 1 : n3

    return n1+n2+n3
}

console.log(sum2(),sum2(3),sum2(3,2,4),sum2(0,0,0));

//usando valor padrão do es2015
function sum3(n1=1,n2=2,n3=3){
    return n1+n2+n3
}


console.log(sum2(),sum2(3),sum2(3,2,4),sum2(0,0,0));