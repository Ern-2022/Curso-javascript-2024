// Aprendendo sobre heranca em poo

class carro{//class pai/base
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

class militar extends carro{//class filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("verde")
    }
    atirar = function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

class utilitario extends carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares=lugares
    }
}

const c1 = new carro("normal,4")
c1.ligar()
c1.setCor("preto")

const c2 = new militar("Lutador",1,100,50)
c2.setCor("Azul")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()


 
console.log(`Nome:${c1.nome}`)
console.log(`Portas:${c1.portas}`)
console.log(`Ligado:${(c1.ligado?"sim":"nao")}`)
console.log(`Velocidade:${c1.vel}`)
console.log(`Cor:${c1.cor}`)
console.log(`Lugares:${c1.lugares}`)
console.log("==================")

console.log(`Nome:${c2.nome}`)
console.log(`Portas:${c2.portas}`)
console.log(`Ligado:${(c2.ligado?"sim":"nao")}`)
console.log(`Velocidade:${c2.vel}`)
console.log(`Blindagem:${c2.blindagem}`)
console.log(`Municao:${c2.municao}`)
console.log(`Cor:${c2.cor}`)
console.log("==================")