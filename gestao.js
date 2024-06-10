const dados = document.getElementById("dados")

const preencherdgv = () => {
    dados.innerHTML = ""
    const entpoint = `http://127.0.0.1:1880/pesquisartodoscontatos/`
    fetch(entpoint)
        .then(res => res.json())
        .then(res => {
            dados.innerHTML = ""
            res.forEach(el => {
                const linha = document.createElement("div")
                linha.setAttribute("class", "linhadados")

                const c1 = document.createElement("div")
                c1.setAttribute("class", "coluna c1")
                c1.innerHTML = el.n_contato_contato
                linha.appendChild(c1)

                const c2 = document.createElement("div")
                c2.setAttribute("class", "coluna c2")
                c2.innerHTML = el.s_nome_contato
                linha.appendChild(c2)

                const c3 = document.createElement("div")
                c3.setAttribute("class", "coluna c3")
                c3.innerHTML = el.s_celular_contato
                linha.appendChild(c3)

                const c4 = document.createElement("div")
                c4.setAttribute("class", "coluna c4")
                c4.innerHTML = el.s_email_contato
                linha.appendChild(c4)

                const c5 = document.createElement("div")
                c5.setAttribute("class", "coluna c5")
                c5.innerHTML = el.dt_dtnasc_contato
                linha.appendChild(c5)

                const c6 = document.createElement("div")
                c6.setAttribute("class", "coluna c6 c_op")
                const imgTrash = document.createElement("img")
                imgTrash.setAttribute("src", "trash.svg")
                imgTrash.setAttribute("class", "iconeop")
                imgTrash.addEventListener("click", (evt) => {
                    // console.log(evt.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML)
                    // console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                    removerContato(evt.target.parentNode.parentNode.firstChild.innerHTML)
                })
                const imgEdit = document.createElement("img")
                imgEdit.setAttribute("src", "edit.svg")
                imgEdit.setAttribute("class", "iconeop")

                c6.appendChild(imgTrash)
                c6.appendChild(imgEdit)
                linha.appendChild(c6)

                dados.appendChild(linha)
            });
        })

}

preencherdgv()

const removerContato = (id) => {
    const endpoint = `http://127.0.0.1:1880/deletarcontatos/${id}`
    fetch(endpoint)
    // .then(res=>res.json)
    .then(res=>{
        if(res.status==200){
            preencherdgv()
        }
    })
}