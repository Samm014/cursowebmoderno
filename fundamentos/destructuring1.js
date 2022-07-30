//es6

const person = {
    name:'Samuel',
    age:15,
    adress: {
        rua:'Rua maria chacom',
        number:236
    }
}

const { name, age } = person //retira as props name e age do object person
console.log(`Nome: ${name}\n\Idade: ${age}\n\ `);

const { name:n, age:i } = person //atribui as props às variáveis criadas
console.log(`Nome: ${n}\n\Idade: ${i}`);

const { sobrenome, humor = true } = person //undefined true(valor padrão)
console.log(sobrenome, humor);

const { adress: { rua,number } } = person
console.log(`\n\Endereço: ${rua}, ${number}`);