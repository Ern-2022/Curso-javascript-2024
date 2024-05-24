import { Cxmsg } from "./cxmsg.js"

const config = {
    cor: "#48f",
    tipo:"OK",//tipos: ok,sn,
    textos:["SIM","NAO"],
    comando_sn:()=>{}
}

const fsim = ()=>{
    console.log("botao SIM pressionadado")
}

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click", () => {
    config.tipo="ok"
    Cxmsg.mostrar(config,"CFB cursos", "curso de javascript, criando caixa de mensagem personalizada")
})

btn_mostrarcxmsg2.addEventListener("click", () => {
    config.tipo="sn"
    config.comando_sn=()=>{fsim()}
    Cxmsg.mostrar(config,"Javascript", "aula 137 ta doce")
})

btn_mostrarcxmsg3.addEventListener("click", () => {
    config.tipo="sn"
    config.textos=["Ok","CAnCELA"]
    config.comando_sn=()=>{}
    Cxmsg.mostrar(config,"youtube", "Acesse o canal CFB curso que vais gostar")
})