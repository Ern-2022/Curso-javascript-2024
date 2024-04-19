// APRENDENDO O METHOD SOME
// APRENDENDO O METHOD EVERY

const p_array = document.querySelector("#array")
const btnVerficar = document.querySelector("#btnVerficar")
const resultado = document.querySelector("#resultado")

const elementos_array = [16,12,20,10,17,15,13,11]
p_array.innerHTML="["+elementos_array+"]"

btnVerficar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Array nao conforme"
    const ret=elementos_array.some((e,i)=>{
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
