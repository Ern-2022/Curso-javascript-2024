const dadosGrid = document.getElementById("dadosGrid")
const btn_add = document.getElementById("btn_add")

const endpoint = "http://127.0.0.1:1880/todosusuarios"

fetch(endpoint)
.then(res=>res.json())
.then(res=>{
    console.log(res)
    dadosGrid.innerHTML=""
    res.forEach(e=> {
        const divlinha =document.createElement("div")
        divlinha.setAttribute("class","linhaGrid")
        dadosGrid.appendChild(divlinha)
        
        const divc1 =document.createElement("div")
        divc1.setAttribute("class","colunaLinhaGrid c1")
        divc1.innerHTML=e.n_usuario_usuario
        divlinha.appendChild(divc1)

        const divc2 =document.createElement("div")
        divc2.setAttribute("class","colunaLinhaGrid c2")
        divc2.innerHTML=e.s_nome_usuario
        divlinha.appendChild(divc2)

        const divc3 =document.createElement("div")
        divc3.setAttribute("class","colunaLinhaGrid c3")
        divc3.innerHTML=e.c_tipo_usuario
        divlinha.appendChild(divc3)

        const divc4 =document.createElement("div")
        divc4.setAttribute("class","colunaLinhaGrid c4")
        divc4.innerHTML=e.c_status_usuario
        divlinha.appendChild(divc4)

        const divc5 =document.createElement("div")
        divc5.setAttribute("class","colunaLinhaGrid c5")
        divlinha.appendChild(divc5)

    });
})

btn_add.addEventListener("click",(evt)=>{
    novoColaborador.classList.remove("ocultarPopup")
})