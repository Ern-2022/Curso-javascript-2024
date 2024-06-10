const btn_gravar = document.getElementById("btn_gravar")
const btn_cancelar = document.getElementById("btn_cancelar")
const f_nome = document.getElementById("f_nome")
const f_celular = document.getElementById("f_celular")
const f_email = document.getElementById("f_email")
const f_dtnasc = document.getElementById("f_dtnasc")

btn_gravar.addEventListener("click", (evt) => {
    const valores = {
        "f_nome": f_nome.value,
        "f_celular": f_celular.value,
        "f_email": f_email.value,
        "f_dtnasc": f_dtnasc.value
    }
    console.log(valores)
    const cabecalho = {
        method: "POST",
        body: JSON.stringify(valores)
    }
    const endpoind = "http://127.0.0.1:1880/addcontatos"
    fetch(endpoind, cabecalho)
        .then(res => {
            if (res.status == 200) {
                reset()
            } else {
                console.log(
                    alert("Erro ao gravar novo contato")
                );
            }
        })
})

btn_cancelar.addEventListener("click", (evt) => {
    reset()
})

const reset = () => {
    f_nome.value = ""
    f_celular.value = ""
    f_email.vaule = ""
    f_dtnasc.value = ""
    f_nome.focus()

}