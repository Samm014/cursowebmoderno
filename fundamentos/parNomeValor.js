//par nome/valor
const msg = 'Olá' //contexto léxico 1

function exec(){
    const msg = 'Tudo bom?' //contexto lógico 2
    return msg
}

//Obejtos são grupos aninhado de nome/valor

const client = {
    name:'Samuel',
    age:15,
    weigth:55.6,
    adress:{
        rua:'Rua maria chacom',
        number:236
    }
}

console.log(client);
console.log(exec());