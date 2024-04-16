// ENTENDENDO RELACAO DOS ELEMENTOS NO DOM

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

console.log(c1_2.parentNode.parentNode.children[4])

// console.log(caixa1.hasChildNodes())
// console.log(btn_c[0].hasChildNodes())
// console.log(btn_c[0].childNodes)
// console.log(btn_c[0].children.length > 0 ? "possui filhos" : "Nao possui filhos")

// console.log(caixa1.children[4].innerHTML="ERNICIO")
