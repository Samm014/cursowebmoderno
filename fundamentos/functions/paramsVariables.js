function sum(){
    let sum = 0;
    for(i in arguments){
        sum += arguments[i]
    }

    return sum;
}

console.log(sum(1,2));
console.log(sum());
console.log(sum(1.009,2.02));
console.log(sum(2,2," dividido por 2 é 2"));