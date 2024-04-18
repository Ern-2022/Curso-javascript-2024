const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((ele, ind, arr) => {
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.parentNode.textContent
        alert("Curso selecionado: " + cursoSelecionado)
    } catch (ex) {
        alert("Selecione um curso!")
    }
})

btnRemoverCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.removeChild()
    } else {
        alert("selecione um curso")
    }
})

