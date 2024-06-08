const cabecalho = document.getElementById("cabecalho")
const menu = document.getElementById("menu")
const btn_home = document.getElementById("btn_home")
const btn_novo = document.getElementById("btn_novo")
const btn_pesquisar = document.getElementById("btn_pesquisar")
const btn_gestao = document.getElementById("btn_gestao")
const btn_sobre = document.getElementById("btn_sobre")
const principal = document.getElementById("principal")


btn_home.addEventListener("click", (evt) => {
    selecionarAba(evt.target, "./home.html")
})

btn_novo.addEventListener("click", (evt) => {
    selecionarAba(evt.target, "./novo.html")
})

btn_pesquisar.addEventListener("click", (evt) => {
    selecionarAba(evt.target, "./pesquisar.html")

})

btn_gestao.addEventListener("click", (evt) => {
    selecionarAba(evt.target, "./gestao.html")
})

btn_sobre.addEventListener("click", (evt) => {
    selecionarAba(evt.target, "./sobre.html")
})

const selecionarAba = (el, url) => {
    const abas = [...document.querySelectorAll(".aba")]
    abas.forEach(e => {
        e.classList.remove("abaSelecionada")
    })
    el.classList.add("abaSelecionada")
    window.open(url, "if_principal")
}