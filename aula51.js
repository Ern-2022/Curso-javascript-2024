// colecao de interadores

/*Arrays
String
Map
Sets*/

const valores = [10,29,32,2]
it_valores = valores[Symbol.iterator]()

const texto = "Ernicio"
const it_texto = texto[Symbol.iterator]()


console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())