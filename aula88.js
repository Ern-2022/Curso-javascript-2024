//Aprendendo sobre as caixas de dialogo
const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const bnt_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click",(evt)=>{
    alert("lesson 88")
})

btn_confirm.addEventListener("click",(evt)=>{
    // const ret = confirm("Voce esta aprendendo muito?")
    if(confirm("Voce esta aprendendo muito?")){
        console.log("Botao OK pressionado")
    }else{
        console.log("Botao CANCELAR pressionado")
    }
})

bnt_prompt.addEventListener("click",(evt)=>{
    const nome=prompt("Digite o seu nme","Ernicio")
    if(nome==null){
        console.log("Botao CANCELAR pressionado")
    }else{
        console.log(`Nome digitado:${nome}`)
    }
})