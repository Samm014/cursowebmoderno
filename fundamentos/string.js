const nome = "Samuel"

console.log(nome.charAt(3)); //retorna o quinto caracter

console.log(nome.charCodeAt(3)); //retorna código unicode

console.log(nome.indexOf('u')); //retorna o índice da string

console.log(nome.substring(0,3)); //retorna a partir zero, 3 caracteres

console.log(nome.substring(2)); //retorna a partir do segundo caractere

console.log("Nome: ".concat(nome).concat("."));

console.log(nome.replace(0,'s'));

console.log("Samuel Medeiros de Albuquerque".split(' ')); //retorna um array separando a astring conforme o delimitador especificado


/* Template String */

const concatenacao = 'Óla ' + nome + '!'
const templateString = `Óla ${nome}!`

//Usando expressões
console.log(`1 + 1 = ${1+1}`);

//Chamando funções
const upCase = text => text.toUpperCase()
const aviso = `${upCase('atenção!')} Fechamos em 10 minutos...`
console.log(aviso);