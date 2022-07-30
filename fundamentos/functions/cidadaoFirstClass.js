//Função em JS é First-Class Object
//Higher-order functions

//forma literal
function func1(){ } //caso vazio, retorna undefined(padrão)

//armazenar em uma variável
const func2 = function (){ } //função anônima atribuida à uma variável

//armazenar em um array
const arrayFunc3 = [function (a,b) {return a+b},func1,func2]
console.log(arrayFunc3[0](3,3)); //3+3

//armazenar em um atributo de objeto
const obj = {};
obj.talk = function (){return 'Hello'}
console.log(obj.talk());

//passando como parameter
function run(func = function (){}) {
    func();
}

run(function(){console.log('Hello, Function!')});

//contendo uma function com uma function
function sum(n1,n2) {
    return function (n3){
        console.log(n1+n2+n3);
    }
}

sum(2,2)(2)