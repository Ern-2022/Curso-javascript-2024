// Aprendendo sobre os objectos

const pessoa= {
    nome,
    idade,
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        this.idade
    },
    setNome:function(nome){
        this.nome=nome
    },
    setIdade:function(idade){
        this.nome=idade
    }
}

const p2 = pessoa
const p3 = pessoa

p3.nome="KOSMO"
P2["nome"] = "Ernicio"

console.log(pessoa.nome)
console.log(p2.nome)
console.log(p3.nome)
