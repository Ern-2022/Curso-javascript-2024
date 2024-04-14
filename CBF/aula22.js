//  funcoes parametrizadas
const valorPadrao = 0

function add(v){
    valor+=v
}

let valor = 0
console.log(valor)

add(10)
console.log(valor)

add(15)
console.log(valor)

function soma(n1=valorPadrao ,n2=valorPadrao ){
    let res
    res = n1+n2
    return res
}
let res_soma = soma(400)
// console.log(res_soma)