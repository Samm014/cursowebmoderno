isOn = false
console.log(isOn);

isOn = true
console.log(isOn);

isOn = 1
console.log(!!isOn); //! "negação"  !!"aceitação"

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isOn = true));

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isOn = false));

console.log('Outros usos...');
let nome = ''
console.log(nome || 'Desconhecido'); //valor padrão