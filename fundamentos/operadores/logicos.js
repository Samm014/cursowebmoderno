function compras(work1,work2){
    const buyIce = work1 || work2 //or
    const buyTV50 = work1 && work2 //and
    //const butTV32 = !!(work1 ^ work2) //bitwise xor
    const buyTV32 = work1 != work2
    const manterSaudavel = !buyIce //op unário

    return {
        buyIce,
        buyTV50,
        buyTV32,
        manterSaudavel,
    }
}

console.log(compras(true, true));