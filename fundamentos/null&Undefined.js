let valor
console.log(valor); //undefined

valor = null
console.log(valor); //null

const produto = {}
console.log(produto.price);
console.log(produto);

produto.price = 10.99
console.log(produto);

produto.price = undefined //não recomendado utilizar
console.log(!!produto.price); //false
// delete produto.price

produto.price = nulll
console.log(!!produto.price); //false
console.log(produto);
