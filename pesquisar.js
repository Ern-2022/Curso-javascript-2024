const btn_pesq = document.getElementById("btn_pesq")
const f_textpesq = document.getElementById("f_textpesq")

btn_pesq.addEventListener("click",(evt)=>{
    const valorpesq = f_textpesq.value
    if (valorpesq==""){
        alert("Digite a pesquisa")
        f_textpesq.focus()
        return
    }
    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value
    const entpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorpesq}`
    fetch(entpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })

})