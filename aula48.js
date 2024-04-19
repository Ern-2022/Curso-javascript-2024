// APRENDENDO O METHOD EVERY

const p_array = document.querySelector("#array")
const btnVerficar = document.querySelector("#btnVerficar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21, 25, 19, 20, 165, 18, 22]
p_array.innerHTML="["+elementos_array+"]"

btnVerficar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Array nao conforme"
    const ret=elementos_array.every((e,i)=>{
        if(e<18){
            resultado.innerHTML = "Array nao conforme na posicao: "+ i

        }
        return e>=18
    })
    if(ret){
    resultado.innerHTML = "OK"

    }

    console.log(ret)
})
