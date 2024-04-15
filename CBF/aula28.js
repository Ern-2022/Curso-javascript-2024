// APRENDEDO O METODO MAP

const converterInt=(e)=>parseInt(e)
const dobrar = (e)=> e*2
let num = ["1","2","3","4","5"].map(dobrar)

console.log(num)

// const el = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el,({innerHtml})=>innerHtml)
// console.log(val)

// let el = document.getElementsByTagName("div")
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML="ERN"
// })


// const cursos = ["HTML","CSS","PHP","JAVASCRIPT","REACT"]
// let c = cursos.map((elemento,indice)=>{
    
//     return elemento
// })

// console.log(c)