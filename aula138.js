import { Cxmsg } from "./cxmsg.js"

const config = {
    cor: "#48f"
}

Cxmsg.config(config)

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click", () => {
    Cxmsg.mostrar("CFB cursos", "curso de javascript, criando caixa de mensagem personalizada")
})

btn_mostrarcxmsg2.addEventListener("click", () => {
    Cxmsg.mostrar("Javascript", "aula 137 ta doce")
})

btn_mostrarcxmsg3.addEventListener("click", () => {
    Cxmsg.mostrar("youtube", "Acesse o canal CFB curso que vais gostar")
})