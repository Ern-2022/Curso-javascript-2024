//praticado o methodo filter no javascript

const caixaCurso = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")

cursos.map((el,chave)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const comando = document.createElement("div")
    comando.setAttribute("class","comando")

    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comando.appendChild(rb)
    novoElemento.appendChild(comando)
    caixaCurso.appendChild(novoElemento)
})


btnCursoSelecionado.addEventListener("click",(evt)=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado=todosRadios.filter((ele,ind,arr)=>{
        return ele.Checked
    })
    radioSelecionado=radioSelecionado[0]
    // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    const cursoSelecionado = radioSelecionado.parentNode.previusSibling.textContent
    alert("Curso selecionado: "+ cursoSelecionado)
//     console.log(todosRadios)
//     console.log(radioSelecionado)
//     console.log(cursoSelecionado)
 })

// parentNode
// childNode[nodenumber]
// firstChild
// lastChild
// nextSibling
// previusSibling