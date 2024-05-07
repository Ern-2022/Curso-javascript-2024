// funcoes para manipukacao de String

let nome = new String("ERNICIO INACIO IBODEIRO")
let nome2 = new String("ERNICIO INACIO IBODEIRO")
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
console.log(nome.replace("ERNICIO","RECEBA"))
console.log(nome.search("ERNICIO"))
let sobrenome = nome.slice("15","23")
console.log(sobrenome)

let arr_nome = nome.split("I")
console.log(arr_nome)