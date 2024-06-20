const dadosGrid = document.getElementById("dadosGrid")
const btn_add = document.getElementById("btn_add")
const btn_closePopup = document.getElementById("btn_closePopup")
const novoColaborador = document.getElementById("novoColaborador")
const btn_gravarPopup = document.getElementById("btn_gravarPopup")
const btn_cancelarPopup = document.getElementById("btn_cancelarPopup")
const f_tiposcolab = document.getElementById("f_tiposcolab")
const telefones = document.getElementById("telefones")
const f_fone = document.getElementById("f_fone")
const f_nome = document.getElementById("f_nome")
const f_status = document.getElementById("f_status")
const f_foto = document.getElementById("f_foto")
const img_foto = document.getElementById("img_foto")

const endpoint = "http://127.0.0.1:1880/todosusuarios"

fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        dadosGrid.innerHTML = ""
        res.forEach(e => {
            const divlinha = document.createElement("div")
            divlinha.setAttribute("class", "linhaGrid")
            dadosGrid.appendChild(divlinha)

            const divc1 = document.createElement("div")
            divc1.setAttribute("class", "colunaLinhaGrid c1")
            divc1.innerHTML = e.n_usuario_usuario
            divlinha.appendChild(divc1)

            const divc2 = document.createElement("div")
            divc2.setAttribute("class", "colunaLinhaGrid c2")
            divc2.innerHTML = e.s_nome_usuario
            divlinha.appendChild(divc2)

            const divc3 = document.createElement("div")
            divc3.setAttribute("class", "colunaLinhaGrid c3")
            divc3.innerHTML = e.c_tipo_usuario
            divlinha.appendChild(divc3)

            const divc4 = document.createElement("div")
            divc4.setAttribute("class", "colunaLinhaGrid c4")
            divc4.innerHTML = e.c_status_usuario
            divlinha.appendChild(divc4)

            const divc5 = document.createElement("div")
            divc5.setAttribute("class", "colunaLinhaGrid c5")
            divlinha.appendChild(divc5)

        });
    })

const endpoint_tipocolab = "http://127.0.0.1:1880/tiposcolab"

fetch(endpoint_tipocolab)
    .then(res => res.json())
    .then(res => {
        f_tiposcolab.innerHTML = ""
        console.log(res);
        res.forEach(e => {
            const opt = document.createElement("option")
            opt.setAttribute("value", e.n_tipousuario_tipousuario)
            opt.innerHTML = e.s_desc_tipousario
            f_tiposcolab.appendChild(opt)

        })
    })


btn_closePopup.addEventListener("click", (evt) => {
    novoColaborador.classList.add("ocultarPopup")
})

btn_add.addEventListener("click", (evt) => {
    novoColaborador.classList.remove("ocultarPopup")
})

btn_gravarPopup.addEventListener("click", (evt) => {
    const tels = [...document.querySelectorAll(".numTel")]
    let numTels = []
    tels.forEach(t => {
        numTels.push(t.innerHTML)
    })
    const dados = {
        s_nome_usuario:f_nome.value,
        n_tipousuario_tipousuario:f_tiposcolab.value,
        c_status_usuario:f_status.value,
        numtelefones:numTels,
        s_foto_usuario:img_foto.getAttribute("src")
    }
 
    novoColaborador.classList.add("ocultarPopup")
})

btn_cancelarPopup.addEventListener("click", (evt) => {
    novoColaborador.classList.add("ocultarPopup")
})

f_fone.addEventListener("keyup", (evt) => {
    if (evt.key == "Enter") {
        if (evt.target.value.length >= 9) {
            const divTel = document.createElement("div")
            divTel.setAttribute("class", "tel")

            const numTel = document.createElement("div")
            numTel.setAttribute("class", "numTel")
            numTel.innerHTML = evt.target.value;
            divTel.appendChild(numTel)
            const delTel = document.createElement("img")
            delTel.setAttribute("src", "trash.svg")
            delTel.setAttribute("class", "delTel")
            divTel.appendChild(delTel)
            delTel.addEventListener("click", (evt) => {
                evt.target.parentNode.remove()
            })
            telefones.appendChild(divTel)

            evt.target.value = ""
        } else {
            alert("Numero de telefone invalido!")
        }
    }
})

const converte_imagem_b64 = (localDestino, arquivoimg) => {
    const obj = arquivoimg;
    const reader = new FileReader();
    reader.addEventListener("load", (evt) => {
        localDestino.src = reader.result 
    })
    if (obj){ 
        reader.readAsDataURL(obj)
    }
}

f_foto.addEventListener("change",(evt)=>{
    converte_imagem_b64(img_foto,evt.target.files[0])
})