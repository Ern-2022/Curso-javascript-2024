// funcoes para manipulacao de String

let nome = new String("ERNICIO INACIO IBODEIRO")
let nome2 = new String("ERNICIO INACIO IBODEIRO")
let nome3 = new String(nome.toLowerCase())
let canal = new String("CFBcursos")

console.log(nome)
console.log(typeof (nome))
console.log(nome.charAt(0))
console.log(nome.charAt(5))
console.log(nome.charCodeAt(0))

console.log(nome.concat(canal))
console.log(nome.indexOf("I"))
console.log(nome.lastIndexOf("I"))
console.log(nome.localeCompare(nome2))
console.log(nome.replace("ERNICIO", "RECEBA"))
console.log(nome.search("ERNICIO"))
let sobrenome = nome.slice("15", "23")
console.log(sobrenome)


let arr_nome = nome.split(" ")
console.log(arr_nome)

let parte1 = nome.substring(0,7)
console.log(parte1)

let parte2 = nome.substr(0,7)
console.log(parte2)

nome = nome.toLowerCase()
console.log(nome)
console.log(nome3)
console.log(nome3.valueOf())


let num = 10
console.log(typeof(num))

