// A dicionando enentos com addEventListener
// const c1 =document.getElementById("c1")
const c1 =document.querySelector("#c1")

const msg = ()=>{
    alert('clicou')
}


c1.addEventListener("click",(evt)=>{
    console.log(evt.target)
})