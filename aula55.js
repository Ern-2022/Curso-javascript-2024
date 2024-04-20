// A prendendo a usar a colecao SET

const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica","musica boa","musica10"])

musicas.add("musica muuito legal")
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica10")

// musicas.delete("musica1")
// musicas.clear()
console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML+=el +"<br/>"
// })

// for (let mu of musicas){
//     caixa.innerHTML+=m +"<br/>"
// }