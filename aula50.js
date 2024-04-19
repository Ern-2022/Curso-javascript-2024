// aprendendo o method reduce

const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1,2,3,4,5]
let ant=[]
let act=[]
let dobro=[]
p_array.innerHTML="["+elementos_array+"]"

btnReduzir.addEventListener("click",(evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML=elementos_array.reduce((anterior,actual,pos)=>{
        ant.push(anterior)
        act.push(actual)
        dobro.push(actual*2)
        return actual+anterior
    })
    resultado.innerHTML+="<br/>V.anterior:"+ant+"<br/>.V.actual:"+act+"<br/>Dobro: "+ dobro
})