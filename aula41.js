//Removedo os elementos do dom no javascript

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector(".c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, chave) => {
    const novoElement = document.createElement("div")
    novoElement.setAttribute("id", "c" + chave)
    novoElement.setAttribute("class", "curso c1")
    novoElement.innerHTML = el
    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "./imgern.svg")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    novoElement.appendChild(btn_lixeira)

    novoElement.addEventListener("click", (evt) => {
        caixa1.removeChild(evt.target)
    })
    caixa1.appendChild(novoElement)
})
