const configdgv = {
    endpoind: "produtos.json",
    idDestino: "dgvDados"
}
const dgv = (configdgv) => {
    const dgvDados = document.getElementById(configdgv.idDestino)
    dgvDados.innerHTML= ""
    fetch(configdgv.endpoind)
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const dgvLinha = document.createElement("div")
                dgvLinha.setAttribute("class", "dgvLinha")

                const c1 = document.createElement("div")
                c1.setAttribute("class", "coluna c1")
                c1.innerHTML = el.id
                dgvLinha.appendChild(c1)

                const c2 = document.createElement("div")
                c2.setAttribute("class", "coluna c2")
                c2.innerHTML = el.produto
                dgvLinha.appendChild(c2)

                const c3 = document.createElement("div")
                c3.setAttribute("class", "coluna c3")
                c3.innerHTML = el.marca
                dgvLinha.appendChild(c3)

                const c4 = document.createElement("div")
                c4.setAttribute("class", "coluna c4")
                c4.innerHTML = el.modelo
                dgvLinha.appendChild(c4)

                const c5 = document.createElement("div")
                c5.setAttribute("class", "coluna c5")
                dgvLinha.appendChild(c5)

                const imgTrash = document.createElement("img")
                imgTrash.setAttribute("class","dgvIcone")
                imgTrash.setAttribute("src","trash.svg")
                c5.appendChild(imgTrash)

                const imgEdit = document.createElement("img")
                imgEdit.setAttribute("class","dgvIcone")
                imgEdit.setAttribute("src","edit.svg")
                c5.appendChild(imgEdit)

                const imgVisibility = document.createElement("img")
                imgVisibility.setAttribute("class","dgvIcone")
                imgVisibility.setAttribute("src","visibility.svg")
                c5.appendChild(imgVisibility)
                dgvDados.appendChild(dgvLinha)
            });

            console.log(res);
        })

}

dgv(configdgv)

{/* < div class="dgvLinha" >
<div class="c1">01</div>
<div class="c2">Processador</div>
<div class="c3">Intel</div>
<div class="c4">i7</div>
<div class="c5">D E V</div>
</div > */}
