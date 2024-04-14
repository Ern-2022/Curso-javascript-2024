//  Arrow function

// const soma = function(v1,v2){return v1+v2}

 // se for uma funcao mais elaborada tenho que usar conchetes e o return
const complexa = (n1,n2)=>{
    let res = n1*n2
    return res
}
console.log(complexa(25,5))

// se a minha funcao tiver uma operacao simples eu nao preciso de usar conchetes e return
const soma = (v1,v2)=> v1+v2 
console.log(soma(10,13))

// se a funcao so tiver um parametro de entra eu nao preciso usar conchetes
let nome = n =>n 
console.log(nome("CFB cursos"))

const add = n=>n+=10
console.log(add(190))