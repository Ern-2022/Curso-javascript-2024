const caixa = document.querySelector("#caixa")
let cores = ["vermelho","azul","verde",["claro","escuro","medio"]]
let cursos =["HTML","CSS","Javascript",cores]

// // cursos[0]="C++"
// cursos.push("C++")
// cursos.shift("Python")

console.log(cursos[3][3][2])

cursos.map((el)=>{
    let p = document.createElement("P")
    p.innerHTML=el
    caixa.appendChild(p)
})