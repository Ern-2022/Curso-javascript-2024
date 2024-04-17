// ENTENENDO O METHODO FILTER EM JAVASCRIPT
// const filtroMaior18= (valor,indice,arr)=>{}
// const filtroMaior18= (valor)=>{
//     if(valor>=18)
//     return valor
// }

const idade =[17,18,23,25,31,27,35,45,12]
const maior = idade.filter((valor)=>{
    if(valor>=18)
        return valor
})
const menor= idade.filter((valor)=>{
    if(valor<18)
        return valor
})

console.log(idade)
console.log(maior)
console.log(menor)