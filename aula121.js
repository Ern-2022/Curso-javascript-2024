const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click",(evt)=>{

})

let num = 10
let curso = "javascript"
// window.localStorage.setItem("numero",num)
// localStorage.setItem("NOME","ERNICIO")
// localStorage.setItem("CANAL","cfb cursos")
// localStorage.setItem("CURSO",curso)
// alert(localStorage.length)
// alert(localStorage.getItem(localStorage.key(0)))
// alert(localStorage.getItem("NOME"))
// alert(localStorage.getItem("CANAL"))
// alert(localStorage.getItem("CURSO"))
localStorage.clear()

sessionStorage.setItem("NOME", "ERNICIO")
sessionStorage.setItem("CANAL", "cfb cursos")
sessionStorage.setItem("CURSO", curso)
