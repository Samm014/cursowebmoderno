const numbers = [9.8 , 8 , 33.333 , 1456]
console.log(numbers[3], numbers[2]);

numbers[0] = 442
console.log(numbers);
console.log(numbers.length); //quantidade de valores

numbers.push(007)
console.log(numbers);

console.log(numbers.pop()); //retira o último valor do array
delete numbers[0]
console.log(numbers);

console.log(typeof numbers); //object