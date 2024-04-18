// Adicionado elementos antes/depois de outro elemento


const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois =document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.querySelector("#nomeCurso")

    let indice =0
    const criarNovoCurso = (curso)=>{
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id","c"+indice)
        novoElemento.setAttribute("class","curso c1")
        novoElemento.innerHTML=curso
    
        const comandos = document.createElement("div")
        comandos.setAttribute("class","comandos")
    
        const rb = document.createElement("input")
        rb.setAttribute("type","radio")
        rb.setAttribute("name","rb_curso")
    
        comandos.appendChild(rb)
        novoElemento.appendChild(comandos)

        return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

    const radiosSelecionado=()=>{
        const todosRadios=[...document.querySelectorAll("input[type=radio]")]
        const radiosSelecionado=todosRadios.filter((ele,ind,arr)=>{
            return ele.checked
        })
        return radiosSelecionado[0]
    
    }

    btnCursoSelecionado.addEventListener("click",(evt)=>{
        const rs = radiosSelecionado()
        try{
            const cursoSelecionado=rs.parentNode.parentNode.textContent
            alert("Curso selecionado: " + cursoSelecionado)
        }catch(ex){
            alert("Selecione um curso por favor!")
        }

  })

    btnRemoverCurso.addEventListener("click",(evt)=>{
        const rs = radiosSelecionado()
        if(rs!=undefined){
            const cursoSelecionado=rs.parentNode.parentNode
                cursoSelecionado.remove()
        }else{
            alert("Selecione um curso!")
        }
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    const rs = radiosSelecionado()
    try{
        if(nomeCurso.value!=""){
        const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(nomeCurso,cursoSelecionado)
    }else{
        alert("Digite o nome do curso")
    }
    }catch(ex){
        alert("Selecione um curso por favor!")
    }

})

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    const rs = radiosSelecionado()
    try{
        if(nomeCurso.value!=""){
        const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(nomeCurso,cursoSelecionado.nextSibling)
    }else{
        alert("Digite o nome do curso")
    }

    }catch(ex){
        alert("Selecione um curso por favor!")
    }
})