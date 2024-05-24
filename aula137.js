const config = {
    cor: "#48f"
}

const cxmsg = new Cxmsg(config)

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click", () => {
    cxmsg.mostrar("CFB cursos", "curso de javascript, criando caixa de mensagem personalizada")
})

btn_mostrarcxmsg2.addEventListener("click", () => {
    cxmsg.mostrar("Javascript", "aula 137 ta doce")
})

btn_mostrarcxmsg3.addEventListener("click", () => {
    cxmsg.mostrar("youtube", "Acesse o canal CFB curso que vais gostar")
})