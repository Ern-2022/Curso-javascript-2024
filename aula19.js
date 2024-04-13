// break e continue
let n = 0
let max = 1000
let par = 0
// while(n<max){
//     console.log("ernicio - " + n)
//     if(n>10){
//         break
//     }
//     n++
// }
    for( let i=n;i<max;i++){
//console.log("cfb cursos - " + i)
        if(i%2!=0){
            continue
        }
        par++
    }

console.log("quantidade de pares: " + par)
console.log("fim do programa")