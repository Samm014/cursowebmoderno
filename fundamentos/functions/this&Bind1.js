const person = {
    msg: 'Bem vindo!',
    speak(){
        console.log(this.msg);
    }
}

person.speak();

//Problema
const speak = person.speak
speak(); //conflito, pois o this da função muda e não possue msg


//Solução
const falarDePessoa = person.speak.bind(person);//bind() executa a função no objeto especificado
falarDePessoa();