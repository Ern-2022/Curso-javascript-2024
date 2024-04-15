// A dicionando enentos com addEventListener
// const c1 =document.getElementById("c1")
// const c1 =document.querySelector("#c1")
const cursosTodos = [...document.querySelectorAll('.curso')]

cursosTodos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el = evt.target
        el.classList.add("destaque") 
        console.log(el.innerHTML + " foi clicado")   
    })

})

// const msg = ()=>{
//     alert('clicou')
// }


// c1.addEventListener("click",(evt)=>{
//     const el = evt.target
//     el.classList.add("destaque")
// })