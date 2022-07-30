const peso1 = 35.0
const peso2 = Number('55.7')

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));

const evaluation1 = 8.533
const evaluation2 = 9.879

const total = evaluation1 * peso1 + evaluation2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)); //n de casas decimais desejadas
console.log(media.toString()); //transforma em string


console.log(10 / 0); // = infinity
console.log("10" / 2); // = 5(JavaScript tenta converter)