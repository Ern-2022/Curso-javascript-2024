// APRENDENDO A FAZER A CONVERSAO DE OBJETOS PARA JSON
const pessoa = {
    nome: "ERNICIO",
    canal: "cfbcursos",
    linguagem: "javascript",
    aulas: {
        aula01: "introducao",
        aula02: "variaveis",
        aula03: "condicional"
    }
}

const string_pessoa = `{"nome":"ERNICIO","canal":"cfbcursos","linguagem":"javascript","aulas":{"aula01":"introducao","aula02":"variaveis","aula03":"condicional"}}`

const s_json = JSON.stringify(pessoa)//converte obejecto em string json
const o_json = JSON.parse(string_pessoa)//converte string json em obejecto

console.log(pessoa)
console.log(s_json)
console.log(o_json)
