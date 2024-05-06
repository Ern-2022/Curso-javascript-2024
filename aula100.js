const nome = Symbol("ERNICIO")

const numero = Symbol("123")

const corUniforme = Symbol("yellow")

const jogador = {
    [nome]: "css",
}

    jogador[numero]="132",
    jogador[corUniforme]= "amarelo"


for (p in jogador) {
    console.log(p)
}


console.log(jogador)
console.log(jogador.nome)
console.log(jogador[numero])
console.log(jogador[corUniforme])