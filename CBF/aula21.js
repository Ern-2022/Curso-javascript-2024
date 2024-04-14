// funcoes com retorno

function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML="curso online"
    d2.innerHTML="curso online"
    d3.innerHTML="curso online"
}

function canal(){
    let n1 = 2
    let n2 = 15
    let res = n1*n2
    if(res%2 == 0)
        return "par"
    else
     return "impar"
}

let res = canal()
console.log(res)