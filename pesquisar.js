const btn_pesq = document.getElementById("btn_pesq")
const f_textpesq = document.getElementById("f_textpesq")

btn_pesq.addEventListener("click",(evt)=>{
    if(f_textpesq.value==""){
        alert("Digite a pesquisa")
        f_textpesq.focus()
        return
    }
    console.log(document.getElementsByName("f_pesq").value);
})