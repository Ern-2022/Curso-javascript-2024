//  funcao dentro de outra funcao/aninhamento


// posso fazer assim
const soma=(...valores)=>{
    const somar = val =>{
        let res = 0
        for( v of val)
            res+=v
        return res

    }

    return somar(valores)
}

console.log(soma(10,5,15))

// E tambem posso fazer assim

const adicionar = val =>{
    let res = 0
    for( v of val)
        res+=v
    return res

}


const adicao=(...valores)=>{

    return adicionar(valores)
}

valor=[20,10,20]
console.log(adicao(...valor))
