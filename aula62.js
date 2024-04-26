// Aprendendo sobre heranca em poo

class carro{//class pai
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor = function(cor){
        this.cor=cor
    }
}

class militar extends carro{

}

const c1 = new carro("normal,4")
console.log(`Nome:${c1.nome}`)
console.log(`Nome:${c1.portas}`)
console.log(`Nome:${c1,nome}`)
console.log(`Nome:${c1,nome}`)
console.log(`Nome:${c1,nome}`)