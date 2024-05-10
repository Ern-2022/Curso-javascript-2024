const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    let msg = null

    if (f_nota.validity.valueMissing) {
        msg="poxa, este campo e obrigatorio"

    } else if (f_nota.validity.rangeOverflow) {
        msg ="Nossa, que nota alta voce digitou!"

    } else if (f_nota.validity.rangeUnderflow) {
        msg ="Credo, que nota baixa voce digitou"
    }

    // f_nota.reportValidity()
    f_msg.innerHTML=msg
    evt.preventDefault()
})