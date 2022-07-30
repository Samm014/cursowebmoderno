const notas = [6.7,7.4,9.8,8.1,7.7]

for(let i in notas) { //pega o índice em arrays
    console.log(i,notas[i]);
}

const person = {
    name: 'John',
    age: 34,
    weigth: 55,
}

for(let atributo in person) { //pega os valores em objetos
    console.log(`${atributo} => ${person[atributo]}`);
}