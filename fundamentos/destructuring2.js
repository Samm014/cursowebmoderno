const [a] = [10]

const [n1, ,n3, ,n5,n6 = 0] = [10,11,12,13]
console.log(n1,n3,n5,n6);

const [, [, nota]] = [[,9,5,2,5], [2,7,3]]
console.log(nota);