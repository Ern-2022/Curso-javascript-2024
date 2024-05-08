// APRENDENDO SOBRE EXPRESSOES REGULARES

let nome = new String("Witimanneeeeee Chilundo Ferreirasssssss 1948")
let email = "ernicio@ernicio.com.mz"
let numeros = "1,10,100,1000"

console.log(nome);
console.log(nome.search(/ferreira/i))

console.log(nome.match(/I/ig))

console.log(nome.replace(/chilundo/ig, "Nyusi"))

console.log(nome.match(/[IR]/ig))
console.log(nome.match(/[a-g|h-z|0-9]/ig))

//Meta caracteres
console.log(nome.match(/\d/ig))// Meta caracter de numero
console.log(nome.match(/\s/ig))// Meta caracter de space
console.log(nome.match(/\bk/ig))// Meta caracter de caracter

//Quantificadores
console.log(nome.match(/e+|s+/ig));
console.log(nome.match(/ne*/ig));
console.log(numeros.match(/10+/ig));
console.log(numeros.match(/10*/ig));
console.log(numeros.match(/10?/ig));