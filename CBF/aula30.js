// aprendo o metodo getElementById
const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrawElementos = [dc1,dc2,dc3,dc4,dc5,dc6]
// for( let d of arrawElementos){
//     d.innerHTML="KOSMO JC"
// }
//console.log(arrawElementos)
// console.log(dc1)
// console.log(dc1.id)
// console.log(dc1.innerHTML)
// dc1.innerHTML = "KOSMO"

arrawElementos.map((e)=>{
    e.innerHTML = "KOSMO"
    console.log(e)
})