// Aprendendo sobre obecto no javascript

class pessoa{
    constructor(ERN){
        this.nome = ERN
    }
}

let p1 = new pessoa(10)
let p2 = new pessoa("ERN")
let p3 = new pessoa("EULER")
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)