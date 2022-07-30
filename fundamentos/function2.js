//Armazenando uma function numa variável
const showSum = function(n1,n2){
    console.log(n1+n2)
}
showSum(10,19)

//Armazenando uma arrow function numa variável
const sum = (n1,n2)=>{
    return n1+n2
}
console.log(sum(80,90));

//retorno implícito
const sub = (n1,n2)=>n1-n2
console.log(sub(10,6));

//arrow function ainda mais reduuzida
const msg = text => console.log(text);