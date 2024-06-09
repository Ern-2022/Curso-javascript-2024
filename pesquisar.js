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
    if(f_pesq=="id"){

    }else if(f_pesq=="nome"){

    }else if(f_pesq=="nasc"){

    }else if(f_pesq=="email"){

    }
})