// aprendendo sobre  colecao MAP

const caixa = document.querySelector("#caixa")
let mapa = new Map

mapa.set("curso","javascript")
mapa.set(10,"CFB CURSOS")
mapa.set(1,100)
mapa.set("canal", 100)

mapa.delete(1)

console.log(mapa)


let pres = "teste"
let res = ""
if(mapa.has("pres")){
    res="A chave existe na colecao com o valor: "+ mapa.get(pres)
}else{res="a chave nao existe na colecao"
}
res+= "<br/> o tamanho da colecao e  " + mapa.size
caixa.innerHTML= res
mapa.forEach((el)=>{
    console.log(el)
})
