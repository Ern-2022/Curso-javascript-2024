// APRENDENDO SOBRE A FUNCAO 
const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for("ERNICIO")
const s4 = Symbol.for("canal")

console.log(s1)
console.log(s1==s2)
console.log(s2)

console.log(typeof(s1))

console.log(s3==s4)
console.log(Symbol.keyFor(s3))
console.log(Symbol.keyFor(s4))
console.log(Symbol.keyFor(s2))