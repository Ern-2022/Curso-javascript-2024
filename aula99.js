class jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores = [new jogador("j1"), new jogador("j2"), new jogador("j3"), new jogador("j4"), new jogador("j1"), new jogador("j3")]


let s=[]

let s_jogadores=jogadores.filter((j)=>{
    return j.nome=="j1"
})

s=s_jogadores.map((j)=>{
    return j.id
})

console.log(jogadores)
console.log(s_jogadores)
console.log(s)