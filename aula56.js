//templete strings no javascript

const caixa = document.querySelector("#caixa")

// const curso  = "javascript"
// const canal = "CFB cursos"
// // const frase = "este e o curso de: "+ curso + " e do canal "+canal
// const frase=(`Este e o curso de: ${curso}\n e do canal de ${canal}`)

const carros =["BT-50","CORROLA","VITZ","CRV"]
let ul=`<ul>`
carros.map((el)=>{
    ul+=`<li>${el}</li>`
})
ul+`</ul>`

caixa.innerHTML=ul